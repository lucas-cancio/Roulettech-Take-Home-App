import './RecipeListResult.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';

const RecipeListResult = ({recipes}) => {

    return (
        <div className='d-flex flex-column justify-content-start mt-4'>
            <h2 className='text-center my-4'>Recipes Found:</h2>
            <div className='d-flex flex-row justify-content-center flex-wrap'>
                    {
                    recipes ?
                        recipes.map((recipe, index) => (
                            <Link to={`/recipes/${recipe.id}`} className='d-flex flex-column recipe-details-link col-sm-10 col-md-5 col-lg-4 col-xl-3 m-3' key={index}>
                                <RecipeCard recipe={recipe} />
                            </Link>
                        )) 
                    : <></>
                    }
            </div>
        </div>
    );
};

export default RecipeListResult;