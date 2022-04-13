from django.urls import include, path
from . import views

urlpatterns = [
    path('', include([
        path('', views.home, name='home'),
        path('/productos', views.productos, name='productos')

    ]))
]