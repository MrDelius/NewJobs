from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.urls import reverse
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Users require an email field')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    user_type = models.CharField(max_length=10, choices=[('applicant', 'Applicant'), ('employer', 'Employer')],
                                 default='applicant')

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class Country(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField(max_length=250)
    country = models.ForeignKey('Country', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Employer(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, blank=True)
    logo = models.ImageField(upload_to='images/logos/', null=True, blank=False)
    company_name = models.CharField(max_length=250, null=True, blank=False)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name='country_employer',
                                null=True, blank=False)
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='city_employer', null=True, blank=False)
    description = models.TextField(null=True, blank=False)
    phone_number = PhoneNumberField(null=True, blank=False)
    link = models.CharField(max_length=250, null=True, blank=False)
    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
        # Generate slug based on user's email without @ and domain
        email_parts = self.user.email.split('@')
        slug = f"{slugify(email_parts[0])}-{slugify(email_parts[1].split('.')[0])}"
        if not self.slug or self.slug != slug:
            self.slug = slug
            super().save(*args, **kwargs)
        else:
            super().save(*args, **kwargs)

    def __str__(self):
        return str(self.company_name)

    def get_absolute_url(self):
        return reverse('employer', kwargs={'employer_slug': self.slug})


class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, blank=True)
    avatar = models.ImageField(null=True, blank=True, upload_to='images/avatars/')
    country = models.ForeignKey('Country', on_delete=models.CASCADE, related_name='country_profiles',
                                null=True, blank=False)
    city = models.ForeignKey('City', on_delete=models.CASCADE, related_name='city_profiles', null=True, blank=False)
    birthday = models.DateField(null=True, blank=False)
    phone = PhoneNumberField(null=True, blank=False)
    links = models.OneToOneField('MediaLinks', on_delete=models.CASCADE, null=True, blank=True)
    occupation = models.ManyToManyField('UserMarket', blank=True)
    skills = models.ManyToManyField('UserSkill', blank=True)
    languages = models.ManyToManyField('UserLanguage', blank=True)
    experience = models.OneToOneField('UserExp', on_delete=models.CASCADE, null=True, blank=True)
    education = models.TextField(null=True, blank=True)
    awards = models.TextField(null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    slug = models.SlugField()
    vacancy = models.ManyToManyField('analytics.Job', blank=True)

    def save(self, *args, **kwargs):
        # Generate slug based on user's email without @ and domain
        email_parts = self.user.email.split('@')
        slug = f"{slugify(email_parts[0])}-{slugify(email_parts[1].split('.')[0])}"
        if not self.slug or self.slug != slug:
            self.slug = slug
            super().save(*args, **kwargs)
        else:
            super().save(*args, **kwargs)

    def __str__(self):
        return str(self.user)

    def get_absolute_url(self):
        return reverse('profile', kwargs={'profile_slug': self.slug})


class MediaLinks(models.Model):
    instagram = models.CharField(max_length=100, null=True, blank=True)
    telegram = models.CharField(max_length=100, null=True, blank=True)
    facebook = models.CharField(max_length=100, null=True, blank=True)
    twitter = models.CharField(max_length=100, null=True, blank=True)
    youtube = models.CharField(max_length=100, null=True, blank=True)
    github = models.CharField(max_length=100, null=True, blank=True)
    linkedin = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return str(self.instagram)


class UserMarket(models.Model):
    position = models.CharField(max_length=400, null=True, blank=True)

    def __str__(self):
        return self.position


class UserSkill(models.Model):
    ability = models.CharField(max_length=400, null=True, blank=True)

    def __str__(self):
        return self.ability


class UserLanguage(models.Model):
    language = models.CharField(max_length=400, null=True, blank=True)

    def __str__(self):
        return self.language


class UserExp(models.Model):
    position = models.CharField(max_length=400, null=True, blank=True)
    userexp = models.TextField(max_length=400, null=True, blank=True)
    year = models.FloatField(null=True, blank=True)

    def __str__(self):
        return str(self.position)

