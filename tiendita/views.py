from django.shortcuts import render
# importo el modelo a usar
from .models import Product

def home(request): 
    return render(request, "home.html")

def productos(request):
    # asigno el modelo importado para ocuparlo en el html
    products = Product.objects.all()
    return render(request, 'productos.html', {'products': products})
