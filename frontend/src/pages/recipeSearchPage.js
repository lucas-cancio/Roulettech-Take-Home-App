import { useState } from "react";
import Layout from "../components/layout/Layout";
import RecipeBrowser from "../components/RecipeBrowser/RecipeBrowser";

const RecipeSearchPage = () => {
    return (
        <Layout>
            <div className="text-center pt-5 mt-5 mb-3">
                <h1>Search Recipes</h1>
            </div>

            <div>
                <RecipeBrowser />
            </div>
        </Layout>
    );
};


export default RecipeSearchPage;