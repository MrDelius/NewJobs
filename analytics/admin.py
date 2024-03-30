from django.contrib import admin

from analytics.models import Job, Skill, Market, WorkForm, WorkType

admin.site.register(Job)
admin.site.register(Skill)
admin.site.register(Market)
admin.site.register(WorkForm)
admin.site.register(WorkType)