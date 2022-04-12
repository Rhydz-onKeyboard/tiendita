from django.contrib import admin
from .models import Product
# Register your models here.

# Registrar el modelo en el back office (mi pagina admin)
admin.site.register(Product)

