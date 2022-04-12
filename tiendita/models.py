from django.db import models

# Create your models here.
class Product(models.Model):
    id_product = models.CharField(max_length=40, primary_key=True)
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.CharField(max_length=300)
    