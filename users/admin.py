from django.contrib import admin

# Register your models here.


from django.contrib import admin
from users.models import *


@admin.register(CustomUser)
class UserAdmin(admin.ModelAdmin):
    pass


admin.site.register(Profile)
admin.site.register(Employer)
admin.site.register(UserExp)
admin.site.register(City)
admin.site.register(Country)
admin.site.register(MediaLinks)
admin.site.register(UserSkill)
admin.site.register(UserMarket)
admin.site.register(UserLanguage)

