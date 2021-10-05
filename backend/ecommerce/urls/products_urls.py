from django.urls import path
from ecommerce.views.products_views import getProducts, getProduct

urlpatterns = [
    path('',getProducts,name='products'),
    path('<str:pk>',getProduct,name='product'),
]
