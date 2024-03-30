from django.contrib.auth import password_validation
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django import forms
from django.core.exceptions import ValidationError
from django.forms import ModelMultipleChoiceField

from users.models import *
from phonenumber_field.formfields import PhoneNumberField
from django.urls import path
from django.utils.dateparse import parse_date
from datetime import datetime


class CustomUserCreationForm(UserCreationForm):
    user_type = forms.ChoiceField(
        widget=forms.RadioSelect(attrs={'class': 'logInBySlug_header__8tA2M'}),
        choices=[('applicant', 'Applicant'), ('employer', 'Employer')],
        initial='applicant',  # Set the initial selected choice
    )
    password2 = None
    email = forms.EmailField(label='Email',
                             widget=forms.TextInput(
                                 attrs={'class': 'MuiInputBase-input MuiInputBase-inputAdornedStart css-mnn31',
                                        'placeholder': 'name@example.com'}))
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput(
        attrs={'class': 'MuiInputBase-input '
                        'MuiInputBase-inputAdornedStart '
                        'MuiInputBase-inputAdornedEnd '
                        'css-mnn31',
               'placeholder': '*******'}))

    class Meta:
        model = CustomUser
        fields = ('user_type', 'email', 'password1')

    def clean_password1(self):
        password1 = self.cleaned_data.get('password1')
        try:
            password_validation.validate_password(password1, self.instance)
        except forms.ValidationError as error:

            # Method inherited from BaseForm
            self.add_error('password1', error)
        return password1


class CustomLoginForm(AuthenticationForm):
    username = forms.EmailField(
        widget=forms.TextInput(attrs={
            'class': 'MuiInputBase-input MuiInputBase-inputAdornedStart css-mnn31',
            'placeholder': 'name@example.com'
        })
    )
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={
            'class': 'MuiInputBase-input MuiInputBase-inputAdornedStart css-mnn31',
            'placeholder': '*******'
        })
    )


class NameUserForm(forms.ModelForm):
    first_name = forms.CharField(widget=forms.TextInput(attrs={'class': 'MuiInputBase-input css-mnn31'}))
    last_name = forms.CharField(widget=forms.TextInput(attrs={'class': 'MuiInputBase-input css-mnn31'}))

    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name')


class EmployerForm(forms.ModelForm):
    logo = forms.ImageField(required=True, widget=forms.ClearableFileInput(
        attrs={'class': 'UploaderInput_imageUploaderInput__1Uy4D',
               'id': 'id_avatar', 'type': 'file'}))
    company_name = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'Input_input__PhHFB  ',
               'id': 'Company name'}))
    phone_number = PhoneNumberField(widget=forms.TextInput(
        attrs={'class': 'form-control phoneinput_inputClass__qnpFe',
               'type': 'tel',
               'style': 'padding-left: 0;'}))
    link = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'Input_input__PhHFB  ',
               'id': 'Link'}))
    country = forms.ModelChoiceField(queryset=Country.objects.all(), widget=forms.Select(
        attrs={'class': 'MuiSelect-select MuiSelect-outlined MuiInputBase-input css-1fm29hi',
               'hx-get': 'cities_employer/',
               'hx-target': '#id_city'}))
    city = forms.ModelChoiceField(queryset=City.objects.none(), widget=forms.Select(
        attrs={'class': 'MuiSelect-select MuiSelect-outlined MuiInputBase-input css-1fm29hi'}))
    description = forms.CharField(
        widget=forms.Textarea(attrs={'name': 'description', 'rows': 3,
                                     'class': 'off-screen'})
    )

    class Meta:
        model = Employer
        fields = ['logo', 'company_name', 'country', 'city', 'description', 'phone_number', 'link']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        if "country" in self.data:
            print(self.data.get("country"))
            country_id = int(self.data.get("country"))
            self.fields["city"].queryset = City.objects.filter(country_id=country_id)


class CustomDateField(forms.DateField):
    def strptime(self, value, date_format):
        return datetime.strptime(value, date_format).date()


class ProfileForm(forms.ModelForm):
    avatar = forms.ImageField(required=False, widget=forms.FileInput(attrs={'id': 'id_avatar'}))
    country = forms.ModelChoiceField(queryset=Country.objects.all(), widget=forms.Select(
        attrs={'class': 'MuiSelect-select MuiSelect-outlined MuiInputBase-input css-1fm29hi',
               'hx-get': 'cities_profile/',
               'hx-target': '#id_city'}))
    city = forms.ModelChoiceField(queryset=City.objects.none(), widget=forms.Select(
        attrs={'class': 'MuiSelect-select MuiSelect-outlined MuiInputBase-input css-1fm29hi'}))
    birthday = forms.DateField(widget=forms.DateInput(attrs={'class': 'MuiInputBase-input MuiOutlinedInput-input '
                                                                      'MuiInputBase-inputAdornedEnd css-1uvydh2',
                                                             'placeholder': 'YYYY/MM/DD'}))
    phone = PhoneNumberField()

    class Meta:
        model = Profile
        fields = ('country', 'city', 'birthday', 'phone')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        if "country" in self.data:
            country_id = int(self.data.get("country"))
            self.fields["city"].queryset = City.objects.filter(country_id=country_id)


class MediaLinksForm(forms.ModelForm):
    class Meta:
        model = MediaLinks
        fields = ['instagram', 'telegram', 'facebook', 'twitter', 'youtube', 'github', 'linkedin']

    def __init__(self, *args, **kwargs):
        super(MediaLinksForm, self).__init__(*args, **kwargs)

        for field_name, field in self.fields.items():
            id_name = field_name  # Use field name as id
            field.widget.attrs['class'] = 'Input_input__PhHFB  '
            field.widget.attrs['id'] = id_name  # Set id attribute


class UserExpForm(forms.ModelForm):
    position = forms.CharField(widget=forms.TextInput(attrs={'class': 'Input_input__PhHFB  ', 'id': 'Position'}))
    year = forms.FloatField(widget=forms.NumberInput(attrs={'class': 'Input_input__PhHFB  ', 'id': 'Years'}))
    userexp = forms.CharField(widget=forms.Textarea(attrs={'class': 'Textarea_textarea__xNDIL'}))

    class Meta:
        model = UserExp
        fields = ['position', 'userexp', 'year']


class UserMarketForm(forms.Form):
    occupation = ModelMultipleChoiceField(queryset=UserMarket.objects.all(), widget=forms.CheckboxSelectMultiple)


class UserSkillForm(forms.Form):
    skills = ModelMultipleChoiceField(queryset=UserSkill.objects.all(), widget=forms.CheckboxSelectMultiple)


class UserLanguageForm(forms.Form):
    languages = ModelMultipleChoiceField(queryset=UserLanguage.objects.all(), widget=forms.CheckboxSelectMultiple)


class EducationForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['education']
        widgets = {
            'education': forms.Textarea(
                attrs={'rows': 6, 'class': 'MuiInputBase-input MuiInputBase-inputMultiline css-10oer18'}),
        }


class AwardsForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['awards']
        widgets = {
            'awards': forms.Textarea(
                attrs={'rows': 6, 'class': 'MuiInputBase-input MuiInputBase-inputMultiline css-10oer18'}),
        }


class AboutForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['about']
        widgets = {
            'about': forms.Textarea(
                attrs={'rows': 6, 'class': 'MuiInputBase-input MuiInputBase-inputMultiline css-10oer18'}),
        }
