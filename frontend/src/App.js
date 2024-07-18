import { useState } from 'react';
import './App.css';
import api from './services/axios';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import LandingPage from './pages/landing';
import RecipeSearch from './pages/recipeSearch';
import RecipeCreator from './pages/recipeCreator';

function App() {

    const [recipes, setRecipes] = useState([]);

    const handleBtnClick = (event) => {
        event.preventDefault();

        api.get("/api/recipes/")
        .then((res) => { 
            
            setRecipes(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    };
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/recipes" element={<RecipeSearch />} />
                <Route path="/createRecipe" element={<RecipeCreator />} />
            </Routes>
            <div className="App">
                Hello, world!
                <div>
                    <button onClick={handleBtnClick}>Update recipes</button>
                    <h1>Recipes found:</h1>
                    <ul>
                        { recipes.map((recipe) => (
                            <li key={recipe.id}>
                                <h4>{recipe.name}</h4>
                                <p><strong>Cuisine:</strong> {recipe.cuisine} </p>
                                <p>{recipe.summary}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <NavBar />
        </div>
    );
}

export default App;
