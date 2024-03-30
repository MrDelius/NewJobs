from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse

# Create your models here.


class Skill(models.Model):
    prog_lang = models.CharField(max_length=400)

    def __str__(self):
        return self.prog_lang


class Market(models.Model):
    position = models.CharField(max_length=400)

    def __str__(self):
        return self.position


class WorkForm(models.Model):
    form = models.CharField(max_length=400)

    def __str__(self):
        return self.form


class WorkType(models.Model):
    type = models.CharField(max_length=400)

    def __str__(self):
        return self.type


class Job(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField(null=True, blank=False)
    country = models.ForeignKey('users.Country', on_delete=models.CASCADE, related_name='country_job',
                                null=True, blank=True)
    city = models.ForeignKey('users.City', on_delete=models.CASCADE, related_name='city_job', null=True, blank=False)
    price = models.CharField(max_length=120, null=True, blank=True)
    skills = models.ManyToManyField('Skill', null=True, blank=True)
    markets = models.ManyToManyField('Market', null=True, blank=True)
    time_create = models.DateTimeField(auto_now_add=True)
    employer = models.ForeignKey('users.Employer', on_delete=models.CASCADE, blank=True)
    applicant = models.ManyToManyField('users.Profile', blank=True)
    form = models.ForeignKey('WorkForm', on_delete=models.CASCADE, related_name='form_job', null=True, blank=False)
    type = models.ForeignKey('WorkType', on_delete=models.CASCADE, related_name='type_job', null=True, blank=False)
    experience = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post', kwargs={'post_id': self.pk})
