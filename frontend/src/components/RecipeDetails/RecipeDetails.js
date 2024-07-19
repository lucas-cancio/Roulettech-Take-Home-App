import { useEffect, useState } from 'react';
import './RecipeDetails.css';
import getRecipeDetails from '../../services/getRecipeDetails';


const RecipeDetails = ({recipeID}) => {

    const [recipe, setRecipe] = useState({});
    const [fetchStatus, setFetchStatus] = useState("loading");
    const [ingredients, setIngredients] = useState([]);

    console.log(recipeID);
    
    useEffect(() => {
        getRecipeDetails(recipeID)
        .then((res) => {
            setRecipe(res);
            setFetchStatus("success");
        })
        .catch((err) => {
            console.error(err);
            setFetchStatus("failed");
        })
    }, []);

    useEffect(() => {
        if (recipe.ingredients) {
            setIngredients(recipe.ingredients.split(','));
        };
    }, [recipe]);

    return (
        <div className='container-fluid'>
            { fetchStatus === "loading" ? (
                <h1 className=''>Fetching Recipe Details</h1>
            ) : fetchStatus === "failed" ? (
                <h1 className=''>Could Not Retrieve Recipe Details</h1>
            ) : (
                <div className='d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-column justify-content-start'>
                        <div className='d-flex flex-row justify-content-center'>
                            <h1><strong>{recipe.name}</strong></h1>
                        </div>

                        <div className='d-flex flex-row justify-content-center flex-wrap'>
                            <div className='d-flex flex-column m-2 mx-5 px-2'>
                                <h5>{recipe.cuisine}</h5>
                            </div>
                            <div className='d-flex flex-column m-2 mx-5 px-2'>
                                <div className='d-flex flex-row justify-content-center'>
                                    <div className='d-flex flex-col justify-content-center'>
                                        <h5 className='recipe-rating text-center'>{recipe.rating}/5</h5>
                                    </div>
                                    <div className='d-flex flex-col justify-content-end'>
                                        <svg  className='rating-star-icon bi bi-star-fill' xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                </div>  
                            </div>
                            <div className='d-flex flex-column m-2 mx-5 px-3'>
                                <h5>{recipe.cook_time} Minutes</h5>
                            </div>
                        </div>

                        <div className='d-flex flex-row justify-content-center my-2'>
                            <p><strong>{recipe.summary}</strong></p>
                        </div>

                        <div className='d-flex flex-row justify-content-center flex-wrap p-2'>
                            <div className='d-flex flex-column col-sm-10 col-md-7 col-lg-6 mt-5'>
                                <div className='d-flex flex-row justify-content-center'>
                                    <h4>Instructions</h4>
                                </div>
                                <div className='d-flex flex-row justify-content-center flex-wrap mt-3 ps-2'>
                                    <pre className='recipe-instruction-text text-center'>{recipe.instructions}</pre>
                                </div>

                                <div className='d-flex flex-row justify-content-center mt-5 pt-3'>
                                    <h4>Ingredients</h4>
                                </div>
                                <div className='d-flex flex-row justify-content-start mt-2 ps-5 mb-4'>
                                    <ul>
                                        {ingredients.map((ingredient, index) => (
                                            <li className='' key={index}>
                                                <p>{ingredient.trim()}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='d-flex flex-column col-sm-8 col-md-4 col-lg-5 px-3'>
                                <div className='d-flex flex-row justify-content-center'>
                                    <img className='recipe-image' src={recipe.image} alt={recipe.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeDetails;