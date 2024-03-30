import os
import django
import random
from datetime import timedelta
from django.utils import timezone

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "newjob.settings")  # Replace with your actual project name

# Initialize the Django application
django.setup()

from analytics.models import Job, Skill, Market, WorkForm, WorkType, Employer

# Define sample data
titles = ["Web Developer", "Software Engineer", "UI/UX Designer", "Data Scientist", "Product Manager"]
locations = ["New York", "San Francisco", "Los Angeles", "Chicago", "Seattle"]
descriptions = ["Description for job", "Another job description", "Exciting opportunity"]
skills = ["Python", "JavaScript", "React", "Django", "Data Analysis"]
markets = ["Technology", "Finance", "Healthcare", "E-commerce", "Design"]
work_forms = ["Full-time", "Part-time", "Contract"]
work_types = ["Remote", "On-site"]
employers = ["Company A", "Company B", "Company C", "Company D", "Company E"]

# Create 100 Job instances
for _ in range(100):
    title = random.choice(titles)
    description = random.choice(descriptions)
    location = random.choice(locations)
    price = random.randint(50000, 150000)
    employer, _ = Employer.objects.get_or_create(company=random.choice(employers))
    form, _ = WorkForm.objects.get_or_create(form=random.choice(work_forms))
    job_type, _ = WorkType.objects.get_or_create(type=random.choice(work_types))
    experience = random.randint(1, 10)

    job = Job.objects.create(
        title=title,
        description=description,
        location=location,
        price=price,
        employer=employer,
        form=form,
        type=job_type,
        experience=experience
    )

    random_skills = random.sample(skills, random.randint(1, 5))
    for skill_name in random_skills:
        skill, _ = Skill.objects.get_or_create(prog_lang=skill_name)
        job.skills.add(skill)

    random_markets = random.sample(markets, random.randint(1, 3))
    for market_name in random_markets:
        market, _ = Market.objects.get_or_create(position=market_name)
        job.markets.add(market)

print("Jobs populated successfully!")
