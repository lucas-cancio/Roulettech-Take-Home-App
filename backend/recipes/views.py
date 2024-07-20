from rest_framework import generics, views, status
from .models import Recipe
from .serializers import RecipeSerializer
from django.http import Http404
from rest_framework.response import Response
from django.db.models import Q
import logging


logger = logging.getLogger(__name__)


class RecipeListAPIView(generics.ListCreateAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        print("HALAMANA")
        queryset = Recipe.objects.all()

        keywords = self.request.query_params.get('keywords')
        ingredients = self.request.query_params.get('ingredients')
        max_cook_time = self.request.query_params.get('max_cook_time')
        min_rating = self.request.query_params.get('min_rating')
        cuisine = self.request.query_params.get('cuisine')

        print(f"Keywords: '{keywords}'")
        print(f"Ingredients: {ingredients}")
        print(f"Max Cook Time: {max_cook_time}")
        print(f"Min Rating: {min_rating}")
        print(f"Cuisine: {cuisine}")

        # Search recipes that have at least one key word in the dish name, instructions, or summary.
        if keywords:
            keyword_list = [keyword.strip()  for keyword in keywords.split(',') if keyword != '']
            print("Keyword List: " + str(keyword_list))
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
            try:
                min_rating = float(min_rating)
                queryset = queryset.filter(rating__gte=min_rating)
            except ValueError:
                raise Http404

        # Search recipes that match the specified cuisines
        if cuisine:
            queryset = queryset.filter(cuisine=cuisine)

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

        # Convert relative image URL to absolute URL
        data = serializer.data
        if 'image' in data:
            data['image'] = request.build_absolute_uri(data['image'])

        return Response(data)
    
    def post(self, request, *args, **kwargs):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)