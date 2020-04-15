
from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import SignUpView, DisplayAllUsers

urlpatterns = [
    path('token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path('signup/', SignUpView.as_view(), name='sign_up'),
    path('users/', DisplayAllUsers.as_view(), name='users')

]
