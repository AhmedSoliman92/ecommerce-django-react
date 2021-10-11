from django.urls import path
from ecommerce.views.orders_views import addOrderItems
urlpatterns = [
    path('add',addOrderItems, name ='add-orders'),
]