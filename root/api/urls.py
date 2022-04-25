from django.urls import path
from rest_framework import routers, urlpatterns
from .views import PostViewSet, UserViewSet, current_user, CreateUser, send_email

router = routers.DefaultRouter()

router.register('posts', PostViewSet,'posts')

urlpatterns = [
    path('currentuser/', current_user),
    path('createuser/', CreateUser.as_view()),
    path('sendemail/', send_email),
]

urlpatterns += router.urls