from django.urls import path
from ecommerce.views.users_views import MyTokenObtainPairView,user_profile, get_users, register_user,update_user_profile

urlpatterns = [
    path('login', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile',user_profile, name = 'user-profile'),
    path('profile/update',update_user_profile, name = 'update-user-profile'),
    path('',get_users, name = 'get-users'),
    path('register',register_user, name = 'register'),

]
