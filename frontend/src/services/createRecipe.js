import api from "./axios";

export default function createRecipe(formData) {

    let adjustedFormData = formData;

    const ingredientsArray = Array.isArray(formData.ingredients) ? formData.ingredients : [];

    adjustedFormData.ingredients = "";
    ingredientsArray.forEach(ingredient => {
        adjustedFormData.ingredients += ingredient.trim() + ',';
    });

    return new Promise((resolve, reject) => {
        api.post("/api/recipes", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
};