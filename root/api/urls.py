from django.urls import path
from rest_framework import routers, urlpatterns
from .views import PostViewSet, UserViewSet, current_user, CreateUser

router = routers.DefaultRouter()

router.register('users', UserViewSet,'users')
router.register('posts', PostViewSet,'posts')

urlpatterns = [
    path('currentuser/', current_user),
    path('createuser/', CreateUser.as_view()),
]

urlpatterns += router.urls