import './RecipeCreator.css';

import { useState } from 'react';
import IngredientPill from '../IngredientPill/IngredientPill';
import createRecipe from '../../services/createRecipe';

const RecipeCreator = () => {

    const [name, setName] = useState("");
    const [instructions, setInstructions] = useState("");
    const [summary, setSummary] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [cookTime, setCookTime] = useState(15);
    const [ingredients, setIngredients] = useState([]);
    
    const [imageFile, setImageFile] = useState(null);
    const [imageValidationMsg, setImageValidationMsg] = useState("");

    const [curIngredient, setCurIngredient] = useState("");


    const handleNameChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    const handleInstructionsChange = (event) => {
        event.preventDefault();
        setInstructions(event.target.value);
    };

    const handleSummaryChange = (event) => {
        event.preventDefault();
        setSummary(event.target.value);
    };

    const handleCuisineChange = (event) => {
        event.preventDefault();
        setCuisine(event.target.value);
    };

    const handleCookTimeChange = (event) => {
        event.preventDefault();
        setCookTime(event.target.value);
    };

    const handleCurrentIngredientChange = (event) => {
        event.preventDefault();
        setCurIngredient(event.target.value);
    };

    const handleAddIngredient = (event) => {
        event.preventDefault();
        
        if (curIngredient !== "") {
            setIngredients([...ingredients, curIngredient]);
            setCurIngredient('');
            console.log("ingredients" + ingredients);
        };
    };

    const handleRemoveIngredient = (ingredientName) => {
        setIngredients(ingredients.filter(recipe => recipe !== ingredientName));
    };

    const handleImageFileChange = (event) => {
        setImageFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        

        // name = models.CharField(max_length=200)
        // cuisine = models.CharField(max_length=50)
        // ingredients = models.TextField(help_text="A comma-separated list of ingredients")
        // cook_time = models.IntegerField(help_text="Expected time in minutes to complete the recipe")
        // rating = models.FloatField()
        // instructions = models.TextField(max_length=500)
        // summary = models.TextField(max_length=200)
        // image = models.ImageField(null=True)

        const allowedTypes = ['image/jpeg', 'image/png'];
        if (!allowedTypes.includes(imageFile.type)) {
            setImageValidationMsg('Invalid file type. Please select a JPG or PNG image.');
            return;
        }

        const maxSize = 5 * 1024 * 1024; // 5MB
        if (imageFile.size > maxSize) {
            setImageValidationMsg('File size exceeds 5MB limit.');
            return;
        }

        const formData = {
            name: name,
            cuisine: cuisine,
            ingredients: ingredients,
            cook_time: cookTime,
            instructions: instructions,
            summary: summary,
            image: imageFile,
        };

        createRecipe(formData)
        .then((res) => {
            console.log("Successfully created recipe: ", res.data);
        })
        .catch((err) => {
            console.warn("Failed to create recipe.");
            console.error(err);
        });
    };

    return (
        <form className='d-flex flex-row justify-content-center'>
            <div className='d-flex flex-column col-sm-10 col-md-9 align-items-center creator-container my-3'>

                <div className='d-flex flex-row justify-content-center recipe-creator-banner'>
                    <h1 className='text-center p-2'>Create Your Recipe</h1>
                </div>

                <div className='d-flex flex-row justify-content-around flex-wrap my-3'>
                    
                    <div className='d-flex flex-column p-3'>
                        <label htmlFor='recipeCreatorNameInput'>Name</label>
                        <input className='recipe-creator-input' id='recipeCreatorNameInput' type='text' value={name} onChange={handleNameChange}></input>
                    </div>

                    <div className='d-flex flex-column p-3'>
                        <label htmlFor='recipeCreatorCuisineInput'>Cuisine</label>
                        <input className='recipe-creator-input' id='recipeCreatorCuisineInput' type='text' value={cuisine} onChange={handleCuisineChange}></input>
                    </div>

                    <div className='d-flex flex-column p-3'>
                        <label htmlFor='recipeCreatorCookTimeInput'>Cook Time (minutes)</label>
                        <input className='recipe-creator-input' id='recipeCreatorCookTimeInput' type='number' value={cookTime} onChange={handleCookTimeChange}></input>
                    </div>

                </div>

                <div className='d-flex flex-row justify-content-start align-self-start ps-5 ms-4 pb-4'>
                    <div className='d-flex flex-column'>
                        <label htmlFor='recipeCreatorImgInput'>Image</label>
                        <input className='recipe-creator-input' id='recipeCreatorImgInput' type='file' accept=".jpg,.jpeg,.png" onChange={handleImageFileChange}></input>
                        { imageValidationMsg !== "" ? (
                            <p className='imageValidationMsg'>{imageValidationMsg}</p>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div className='d-flex flex-row justify-content-start align-self-start ps-5 ms-4 pb-4 text-area-container'>
                    <div className='d-flex flex-column col-10'>
                        <label htmlFor='recipeCreatorSummaryInput'>Summary</label>
                        <textarea className='recipe-creator-input' id='recipeCreatorSummaryInput' placeholder="Provide a short summary/explanation of your recipe..."
                             value={summary} onChange={handleSummaryChange}>
                        </textarea>
                    </div>
                </div>

                <div className='d-flex flex-row justify-content-start align-self-start ps-5 ms-4 pb-4 text-area-container'>
                    <div className='d-flex flex-column col-10'>
                        <label htmlFor='recipeCreatorInstructionsInput'>Instructions</label>
                        <textarea className='recipe-creator-input' id='recipeCreatorInstructionsInput' placeholder="Provide instructions for your recipe"
                             value={instructions} onChange={handleInstructionsChange}>
                        </textarea>
                    </div>
                </div>

                <div className='d-flex flex-row justify-content-start align-self-start ps-5 ms-4 pb-4 mt-3 flex-wrap'>
                    <div className='d-flex flex-column justify-content-start'>
                        <div className='d-flex flex-row'>
                            <label htmlFor='ingredientsInput'>Ingredients</label>
                        </div>
                        <div className='d-flex flex-row'>
                            <input className='recipe-creator-input' type='text' placeholder='salt' value={curIngredient} onChange={handleCurrentIngredientChange}></input>
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
                </div>

                <div className='d-flex flex-row justify-content-center my-3'>
                    <input className='creator-submit-btn rounded-pill' type='button' value="Create" onClick={handleSubmit} ></input>
                </div>

            </div>
        </form>
    );
};

export default RecipeCreator;