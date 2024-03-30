import os
import django

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "newjob.settings")  # Replace with your actual project name

# Initialize the Django application
django.setup()

from users.models import *
from analytics.models import *

# Read specializations from the text file and create UserMarket instances
with open("market.txt", "r") as file:
    for line in file:
        line = line.strip()
        if line:
            specialization = UserMarket(position=line)
            specialization.save()

print("Specializations populated successfully.")