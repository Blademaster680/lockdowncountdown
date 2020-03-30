from django.urls import path, include
from .views import indexview

urlpatterns = [
    path('', indexview, name='index'),
]