from django.db import models

class Country(models.Model):
    country = models.CharField(max_length=100)
    lockdownStart = models.DateTimeField(auto_now=False)
    lockdownEnd = models.DateTimeField(auto_now=False)

    def __str__(self):
        return self.country

