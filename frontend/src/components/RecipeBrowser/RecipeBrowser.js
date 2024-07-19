import './RecipeBrowser.css';

import RecipeListResult from '../RecipeListResult/RecipeListResult';
import SearchFilters from '../SearchFilters/SearchFilters';

import getRecipes from '../../services/getRecipes';
import { useEffect, useState } from 'react';


const RecipeBrowser = () => {

    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = (searchCriteria) => {

        getRecipes(searchCriteria)
        .then((res) => {
            setRecipes(res);
        })
        .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchRecipes({
            keywords: "",
            cuisine: "",
            minRating: 0,
            maxCookTime: 200,
            ingredients: []
        });
    }, []);

    return (
        <div>
            <SearchFilters handleFetchRecipes={fetchRecipes} />
            <RecipeListResult recipes={recipes} />
        </div>
    );
};

export default RecipeBrowser;