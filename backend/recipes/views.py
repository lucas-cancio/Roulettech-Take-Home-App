from rest_framework import generics, views
from .models import Recipe
from .serializers import RecipeSerializer
from django.http import Http404
from rest_framework.response import Response
from django.db.models import Q


class RecipeListAPIView(generics.ListCreateAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        queryset = Recipe.objects.all()

        keywords = self.request.query_params.get('keywords')
        ingredients = self.request.query_params.get('ingredients')
        max_cook_time = self.request.query_params.get('max_cook_time')
        min_rating = self.request.query_params.get('min_rating')
        cuisines = self.request.query_params.get('cuisines')

        # Search recipes that have at least one key word in the dish name, instructions, or summary.
        if keywords:
            keyword_list = [keyword.strip() for keyword in keywords.split(',')]
            keyword_query = Q()
            for keyword in keyword_list:
                keyword_query |= Q(name__icontains=keyword)
                keyword_query |= Q(summary__icontains=keyword)
                keyword_query |= Q(instructions__icontains=keyword) 
            
            queryset = queryset.filter(keyword_query)          

        # Search recipe that contain the specified ingredients
        if ingredients:
            ingredient_list = [ingredient.strip() for ingredient in ingredients.split(',')]
            for ingredient in ingredient_list:
                queryset = queryset.filter(ingredients__icontains=ingredient)

        # Search recipes that fall under a specified maximum cook time
        if max_cook_time:
            queryset = queryset.filter(cook_time__lte=max_cook_time)
        
        # Search recipes with a rating above a specified minimum
        if min_rating:
            queryset = queryset.filter(rating__gte=min_rating)
        
        # Search recipes that match one of the specified cuisines
        if cuisines:
            queryset = queryset.filter(cuisine__in=cuisines)

        return queryset
    

    

class RecipeDetailAPIView(views.APIView):
    """
    Retrieve, update, or delete a recipe instance
    """
    def get_object(self, pk):
        try:
            return Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            raise Http404
        
    def get(self, request, pk):
        recipe = self.get_object(pk)
        serializer = RecipeSerializer(recipe)
        return Response(serializer.data)