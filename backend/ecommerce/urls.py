from django.urls import path
from .views import getProducts,getProduct, MyTokenObtainPairView, user_profile, get_users,register_user

urlpatterns = [
    path('users/login', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile',user_profile, name = 'user-profile'),
    path('users/',get_users, name = 'get-users'),
    path('users/register',register_user, name = 'register'),
    path('products',getProducts,name='products'),
    path('products/<str:pk>',getProduct,name='product'),
]
