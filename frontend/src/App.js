import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landingPage';
import RecipeSearchPage from './pages/recipeSearchPage';
import RecipeCreatorPage from './pages/recipeCreatorPage';
import RecipeDetailsPage from './pages/recipeDetailsPage';

function App() {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/recipes" element={<RecipeSearchPage />} />
                <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
                <Route path="/createRecipe" element={<RecipeCreatorPage />} />
            </Routes>
        </div>
    );
};

export default App;
