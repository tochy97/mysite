from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    id = models.AutoField(primary_key=True)
    description = models.CharField(max_length=255)
    content = models.CharField(max_length=1000)