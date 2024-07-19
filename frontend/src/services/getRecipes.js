import api from "./axios";

export default function getRecipes(searchCriteria) {
    return new Promise((resolve, reject) => {

        // Ensure searchCriteria.keywords is a string
        const keywordsString = typeof searchCriteria.keywords === 'string' ? searchCriteria.keywords : '';

        // Split the string into an array based on the delimiters
        const keywordList = keywordsString.split(/[ ,;]+/);
        let keywords = '';

        // Iterate over the array and concatenate each keyword
        keywordList.forEach(keyword => {
            keywords += keyword + ',';
        })


        // Ensure searchCriteria.ingredients is an array
        const ingredientsArray = Array.isArray(searchCriteria.ingredients) ? searchCriteria.ingredients : [];

        let ingredients = '';

        // Iterate over the array and concatenate each ingredient
        ingredientsArray.forEach(ingredient => {
            ingredients += ingredient + ',';
        });


        api.get("/api/recipes", {
            params: {
                keywords: keywords,
                ingredients: ingredients,
                max_cook_time: searchCriteria.maxCookTime,
                min_rating: searchCriteria.minRating,
                cuisine: searchCriteria.cuisine
            }
        })
        .then((res) => { 
            resolve(res.data);
        })
        .catch((err) => {
            reject(err);
        });
    });
};