from django.urls import path

from . import views

urlpatterns = [
    path('asd', views.index, name='index'),
]