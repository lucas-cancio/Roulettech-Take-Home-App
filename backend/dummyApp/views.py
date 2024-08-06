from django.shortcuts import render
from django.http import HttpResponse



def index(request):
    return HttpResponse("Hi there. Here is some dummy text from the dummyApp on the Django server. I got automation working!")