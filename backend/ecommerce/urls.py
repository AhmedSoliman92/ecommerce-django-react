from django.urls import path
from .views import getProducts,getProduct, MyTokenObtainPairView, user_profile, get_users

urlpatterns = [
    path('users/login', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile',user_profile, name = 'user-profile'),
    path('users/',get_users, name = 'get-users'),
    path('products',getProducts,name='products'),
    path('products/<str:pk>',getProduct,name='product'),
]
