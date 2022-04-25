from email import message
from re import sub
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from django.conf import settings
from django.core.mail import send_mail
from rest_framework.decorators import authentication_classes, permission_classes

from .models import Post
from .serializer import UserSerializer, UserSerializerWithToken, PostSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permissions_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permissions_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = PostSerializer


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def send_email(request):
    data = dict(request.data)
    data = list(data.keys())[0].split(",")
    for element in data:
        if(str(element).find("subject") > 0):
            subject = str(element).split(":")[1]
        if(str(element).find("message") > 0):
            message = str(element).split(":")[1]
    return Response(
        send_mail(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            [settings.EMAIL_HOST_USER],
            fail_silently=False,
        )
    )


@api_view(['GET'])
def current_user(request):

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class CreateUser(APIView):

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            username = request.data.get('username', None)
            email = request.data.get('email', None)
            serializer.save()
            send_mail(
                'Welcome to tochyegeonu.com',
                f"Hello,  {username} .\n Thank you for registering for my website and enjoy the tutorials.",
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False,
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
