from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=200)
    cuisine = models.CharField(max_length=50)
    ingredients = models.TextField(help_text="A comma-separated list of ingredients")
    cook_time = models.IntegerField(help_text="Expected time in minutes to complete the recipe")
    rating = models.FloatField()
    instructions = models.TextField(max_length=500)
    summary = models.TextField(max_length=200)


    def __str__(self):
        return self.name
