from django.contrib.auth.views import LoginView
from django.urls import path, include
from users.views import *
from django.conf import settings
from django.conf.urls.static import static

app_name = 'users'

urlpatterns = [
    path('profile/<slug:profile_slug>', profile_view, name='profile'),
    path('employer/<slug:employer_slug>', employer_view, name='employer'),
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', CustomLogoutView.as_view(), name='logout'),
    path('general_profile/', create_or_update_profile, name='general_profile'),
    path('general_employer/', create_or_update_employer, name='general_employer'),
    path('post_jobs/', post_jobs, name='post_jobs'),
    path('general_profile/cities_profile/', load_cities, name='cities_profile'),
    path('general_employer/cities_employer/', load_cities, name='cities_employer'),
    path('post_jobs/cities_jobs/', load_cities, name='cities_jobs'),
    path('my_jobs/', my_jobs, name='my_jobs'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
