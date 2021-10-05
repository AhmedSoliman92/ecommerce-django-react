from django.urls import path
from ecommerce.views.users_views import MyTokenObtainPairView,user_profile, get_users, register_user

urlpatterns = [
    path('login', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile',user_profile, name = 'user-profile'),
    path('',get_users, name = 'get-users'),
    path('register',register_user, name = 'register'),

]
