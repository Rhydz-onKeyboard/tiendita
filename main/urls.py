from django.urls import include, path
from . import views

urlpatterns = [
    path('', include([
        path('', views.main_view, name='main'),
    ]))
]