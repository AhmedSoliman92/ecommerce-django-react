from django.urls import path
from .views import getProducts,getProduct
urlpatterns = [
    path('products',getProducts,name='products'),
    path('products/<str:pk>',getProduct,name='product'),
]