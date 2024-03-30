from django.urls import path, include
from .views import *
from users.views import load_cities

urlpatterns = [
    path('', index, name='home'),
    path('about/', about, name='about'),
    path('jobs/', jobs, name='jobs'),
    path('resume_builder/', resume_builder, name='resume_builder'),
    path('post/<int:post_id>/', post, name='post'),
    path('apply/<int:post_id>/', apply_for_job, name='apply_for_job'),
    path('company/<int:company_id>/', company, name='company'),
    path('get_job_data/<int:job_id>/', get_job_data, name='get_job_data'),
]