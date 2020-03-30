from django.contrib import admin
from .models import Country

class LockdownInfo(admin.ModelAdmin):
    list_display = ('country', 'lockdownStart', 'lockdownEnd')

admin.site.register(Country, LockdownInfo)
