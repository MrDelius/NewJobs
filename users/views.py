from datetime import datetime

from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView
from django.http import HttpResponse
from django.shortcuts import redirect, render, get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import CreateView, RedirectView

from users.forms import *
from users.models import Profile
from analytics.forms import JobForm
from analytics.models import Job

# Create your views here.


class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    template_name = 'users/signup.html'

    def get_success_url(self):
        user_type = self.request.POST.get('user_type')
        print(user_type, '\n')
        if user_type == 'employer':
            return reverse_lazy('users:general_employer')  # Replace with the appropriate URL name
        elif user_type == 'applicant':
            return reverse_lazy('users:general_profile')

    def post(self, request, *args, **kwargs):
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            if user.user_type == 'employer':
                Employer.objects.create(user=user)
            elif user.user_type == 'applicant':
                Profile.objects.create(user=user)

            login(self.request, user)
            return redirect(self.get_success_url())
        else:
            return render(request, self.template_name, {'form': form})


class CustomLoginView(LoginView):
    form_class = CustomLoginForm
    template_name = 'users/login.html'

    def get_success_url(self):
        user = self.request.user
        if user.first_name and user.user_type == 'applicant':
            return reverse('users:profile', kwargs={'profile_slug': user.profile.slug})
        elif user.user_type == 'applicant':
            return reverse('users:general_profile')
        elif user.user_type == 'employer' and user.employer.company_name:
            return reverse('users:employer', kwargs={'employer_slug': user.employer.slug})
        else:
            return reverse('users:general_employer')


class CustomLogoutView(RedirectView):
    """
    Provides users the ability to logout
    """
    url = '/users/login/'

    def get(self, request, *args, **kwargs):
        logout(request)
        return super(CustomLogoutView, self).get(request, *args, **kwargs)


@login_required
def create_or_update_profile(request):
    custom_user = CustomUser.objects.get(email=request.user.email)
    print(custom_user.id)
    profile_instance, created = Profile.objects.get_or_create(user=custom_user)

    if request.method == "POST":
        form_name = NameUserForm(request.POST)
        form_profile = ProfileForm(request.POST, request.FILES, instance=profile_instance)

        if form_name.is_valid():
            # Process username form data
            firstname = form_name.cleaned_data['first_name']
            lastname = form_name.cleaned_data['last_name']
            user_instance = CustomUser.objects.get(pk=request.user.id)
            user_instance.first_name = firstname
            user_instance.last_name = lastname

            raw_birthday = request.POST.get('birthday')  # Get the raw birthday from the POST data
            formatted_birthday = raw_birthday.replace('/', '-')  # Convert to "YYYY-MM-DD" format

            mutable_post_data = request.POST.copy()  # Create a mutable copy of the POST data
            mutable_post_data['birthday'] = formatted_birthday  # Update the birthday value
            form_profile = ProfileForm(mutable_post_data)

            if form_profile.is_valid():
                avatar = request.FILES.get('avatar')
                country = form_profile.cleaned_data['country']
                city = form_profile.cleaned_data['city']
                birthday = form_profile.cleaned_data['birthday']
                phone = form_profile.cleaned_data['phone']

                # Update the profile instance attributes
                profile_instance.avatar = avatar
                profile_instance.country = country
                profile_instance.city = city
                profile_instance.birthday = birthday
                profile_instance.phone = phone
                profile_instance.save()
                profile_instance.save()
                user_instance.save()
                # Save the updated profile data

                return redirect('users:profile', profile_slug=profile_instance.slug)
    else:
        form_name = NameUserForm()
        form_profile = ProfileForm(instance=profile_instance)

    return render(request, 'users/general_profile - Copy.html', {'form': form_name, 'profile': form_profile})


@login_required
def create_or_update_employer(request):
    employer_instance, created = Employer.objects.get_or_create(user=request.user)

    if request.method == "POST":
        form_employer = EmployerForm(request.POST, request.FILES, instance=employer_instance)
        if form_employer.is_valid():
            print(form_employer.cleaned_data['logo'])
            logo = form_employer.cleaned_data['logo']
            company_name = form_employer.cleaned_data['company_name']
            country = form_employer.cleaned_data['country']
            city = form_employer.cleaned_data['city']
            description = form_employer.cleaned_data['description']
            phone_number = form_employer.cleaned_data['phone_number']
            link = form_employer.cleaned_data['link']

            # Update employer instance attributes
            employer_instance.logo = logo
            employer_instance.company_name = company_name
            employer_instance.country = country
            employer_instance.city = city
            employer_instance.description = description
            employer_instance.phone_number = phone_number
            employer_instance.link = link

            employer_instance.save()

            return redirect('users:employer', employer_slug=request.user.employer.slug)

    else:
        form_employer = EmployerForm(instance=employer_instance)

    return render(request, 'users/general_employer.html', {'employer': form_employer})


def load_cities(request):
    print(request.GET.get("country"))
    country_id = request.GET.get("country")
    if country_id != '':
        cities = City.objects.filter(country_id=country_id)
    else:
        cities = ''
    return render(request, 'users/city_options.html', {'cities': cities})


def profile_view(request, profile_slug):
    profile = get_object_or_404(Profile, slug=profile_slug)
    user = request.user
    if (not user.first_name or not profile.birthday) and user.user_type != 'employer':
        return redirect('users:general_profile')

    if request.method == 'POST':
        links_form = MediaLinksForm(request.POST, instance=profile.links)
        exp_form = UserExpForm(request.POST, instance=profile.experience)
        occupation_form = UserMarketForm(request.POST)
        skills_form = UserSkillForm(request.POST)
        languages_form = UserLanguageForm(request.POST)
        education_form = EducationForm(request.POST, instance=profile)
        awards_form = AwardsForm(request.POST, instance=profile)
        about_form = AboutForm(request.POST, instance=profile)

        if links_form.is_valid():
            user_links = links_form.save(commit=False)
            user_links.profile = profile
            user_links.save()

        if exp_form.is_valid():
            user_exp = exp_form.save(commit=False)
            user_exp.profile = profile
            user_exp.save()

            # Handle many-to-many field (occupation)
        if occupation_form.is_valid():
            selected_occupations = occupation_form.cleaned_data['occupation']

            # Assuming you have a ManyToMany field named 'languages' in UserProfile model
            profile.occupation.set(selected_occupations)
            profile.save()

        # Handle many-to-many field (skills)
        if skills_form.is_valid():
            selected_skills = skills_form.cleaned_data['skills']

            # Assuming you have a ManyToMany field named 'languages' in UserProfile model
            profile.skills.set(selected_skills)
            profile.save()

        # Handle many-to-many field (languages)
        if languages_form.is_valid():
            selected_languages = languages_form.cleaned_data['languages']

            # Assuming you have a ManyToMany field named 'languages' in UserProfile model
            profile.languages.set(selected_languages)
            profile.save()

        if education_form.is_valid():
            profile.education = education_form.cleaned_data['education']
            profile.save()

        if awards_form.is_valid():
            profile.awards = awards_form.cleaned_data['awards']
            profile.save()

        if about_form.is_valid():
            profile.about = about_form.cleaned_data['about']
            profile.save()

        # Redirect to a success page or wherever you want
        try:
            return redirect('users:profile', profile_slug=user.profile.slug)
        except AttributeError:
            return reverse('users:profile', kwargs={'profile_slug': user.profile.slug})
    else:
        links_form = MediaLinksForm(instance=profile.links)
        exp_form = UserExpForm(instance=profile.experience)
        occupation_form = UserMarketForm(initial={'occupation': profile.occupation.all()})  # Use initial data
        skills_form = UserSkillForm(initial={'skills': profile.skills.all()})  # Use initial data
        languages_form = UserLanguageForm(initial={'languages': profile.languages.all()})  # Use initial data
        education_form = EducationForm(instance=profile)
        awards_form = AwardsForm(instance=profile)
        about_form = AboutForm(instance=profile)

    context = {
        'profile': profile,
        'links_form': links_form,
        'exp_form': exp_form,
        'occupation_form': occupation_form,
        'skills_form': skills_form,
        'languages_form': languages_form,
        'education_form': education_form,
        'awards_form': awards_form,
        'about_form': about_form,
    }
    return render(request, 'users/profile.html', context=context)


def employer_view(request, employer_slug):
    employer = get_object_or_404(Employer, slug=employer_slug)
    return render(request, 'users/employer.html', {'employer': employer})


@login_required()
def my_jobs(request):
    if request.user.employer:
        employer = get_object_or_404(Employer, slug=request.user.employer.slug)
        jobs = Job.objects.filter(employer=employer)
        context = {'employer': employer, 'jobs': jobs}
    else:
        profile = get_object_or_404(Profile, slug=request.user.profile.slug)
        jobs = Job.objects.filter(jobs_applied=profile)
        context = {'profile': profile, 'job': jobs}

    return render(request, 'users/my_jobs.html', context)


@login_required
def post_jobs(request):
    print(request.GET.get('country'))
    if request.user.employer:
        employer = Employer.objects.get(user=request.user)

        if request.method == 'POST':
            form = JobForm(request.POST)
            if form.is_valid():
                # Save the form data and create a new job
                job = form.save(commit=False)
                job.employer = request.user.employer
                job.save()

                # Handle ManyToMany field 'skills'
                skills = form.cleaned_data.get('skills')
                markets = form.cleaned_data.get('markets')
                job.skills.set(skills)
                job.markets.set(markets)

                return redirect('users:my_jobs')
        else:
            form = JobForm()

        context = {
            'employer': employer,
            'form': form
        }
        return render(request, 'users/post_jobs.html', context)
