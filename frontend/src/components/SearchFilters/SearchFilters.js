import { useEffect, useState } from 'react';
import './SearchFilters.css'
import IngredientPill from '../IngredientPill/IngredientPill';

const SearchFilters = ({handleFetchRecipes}) => {

    const [keywords, setKeywords] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [minRating, setMinRating] = useState(0);
    const [maxCookTime, setMaxCookTime] = useState(200);
    const [curIngredient, setCurIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const handleKeywordsChange = (event) => {
        event.preventDefault();
        setKeywords(event.target.value);
        console.log("keywords" + keywords);
    };
    
    const handleCuisineChange = (event) => {
        event.preventDefault();
        setCuisine(event.target.value);
        console.log("cuisine" + cuisine);
    };

    const handleMinRatingChange = (event) => {
        event.preventDefault();
        const selectedMinRating = Number(event.target.value);
        setMinRating(selectedMinRating);
        console.log("min rating" + minRating);
    };

    const handleMaxCookTimeChange = (event) => {
        event.preventDefault();
        setMaxCookTime(event.target.value);
        console.log("max cook time" + maxCookTime);
    };

    const handleCurrentIngredientChange = (event) => {
        event.preventDefault();
        setCurIngredient(event.target.value);
    };

    const handleAddIngredient = (event) => {
        event.preventDefault();
        setIngredients([...ingredients, curIngredient]);
        setCurIngredient('');
        console.log("ingredients" + ingredients);
    };

    const handleRemoveIngredient = (ingredientName) => {
        setIngredients(ingredients.filter(recipe => recipe !== ingredientName));
    };
    
    const handleApplyFilters = (event) => {
        event.preventDefault();

        const searchCriteria = {
            keywords: keywords,
            cuisine: cuisine,
            minRating: minRating,
            maxCookTime: maxCookTime,
            ingredients: ingredients
        };

        handleFetchRecipes(searchCriteria);
    };

    useEffect(() => {

    }, []);



    return (
        <form>
            <div className='d-flex flex-row justify-content-around align-items-center flex-wrap'>
                <div className='d-flex flex-column col-sm-11 col-md-10 col-lg-10 filter-banner p-3'>
                    <div className='d-flex flex-row justify-content-around align-items-center flex-wrap'>

                        <div className='d-flex flex-column p-2'>
                            <label htmlFor='keywordsInput'>Keywords</label>
                            <input className='filter-input' name="keywords" id='keywordsInput' type="text" value={keywords} onChange={handleKeywordsChange}
                                placeholder='search'
                            ></input>
                        </div>

                        <div className='d-flex flex-column p-2'>
                            <label htmlFor='cuisineInput'>Cuisine</label>
                            <input className='filter-input' name="cuisine" id='cuisineInput' type="text" placeholder='Mexican' value={cuisine} onChange={handleCuisineChange}></input>
                        </div>

                        <div className='d-flex flex-column p-2'>
                            <label htmlFor='minRatingInput'>Min Rating</label>
                            <select className='filter-input' name="minRating" id="minRatingInput" onChange={handleMinRatingChange}>
                                <option value="0">Over 0</option>
                                <option value="1">Over 1</option>
                                <option value="2">Over 2</option>
                                <option value="3">Over 3</option>
                                <option value="4">Over 4</option>
                            </select>
                        </div>

                        <div className='d-flex flex-column p-2'>
                            <label htmlFor='maxCookTimeInput'>Max Cook Time (Minutes)</label>
                            <input className='filter-input' name="maxCookTime" type="number" value={maxCookTime} onChange={handleMaxCookTimeChange}></input>
                        </div>

                        <div className='d-flex flex-column justify-content-center'>
                            <div className='d-flex flex-row'>
                                <label htmlFor='ingredientsInput'>Ingredients</label>
                            </div>
                            <div className='d-flex flex-row'>
                                <input className='filter-input' type='text' placeholder='salt' value={curIngredient} onChange={handleCurrentIngredientChange}></input>
                                <input type='button' value="Add" onClick={handleAddIngredient}></input>
                            </div>
                        </div>
                        
                        { ingredients.length > 0 ? (
                            <div className='d-flex flex-column justify-content-end p-2 pb-0 mb-0'>
                                <div className='d-flex flex-row flex-wrap justify-content-around'>
                                    {ingredients.map((ingredient, index) => (
                                        <div key={index} className='d-flex flex-column px-2 mt-3'>
                                            <IngredientPill name={ingredient} handleDelete={handleRemoveIngredient} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <> </>
                        )}
                        {/* <div className='d-flex flex-column p-2'>
                            <div className='d-flex flex-row flex-wrap'>
                            </div>
                        </div> */}
                    </div>
                    <div className='d-flex flex-row justify-content-center mt-3'>
                        <input type='button' value="Apply" onClick={handleApplyFilters}></input>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SearchFilters;