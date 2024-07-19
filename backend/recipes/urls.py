from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('recipes', views.RecipeListAPIView.as_view()),
    path('recipes/<int:pk>', views.RecipeDetailAPIView.as_view()),
]