import api from "./axios";

export default function getRecipeDetails(recipeID) {
    return new Promise((resolve, reject) => {
        api.get(`/api/recipes/${recipeID}`)
        .then(res => resolve(res.data))
        .catch(err => reject(err));
    });
};