import Layout from "../components/layout/Layout";

import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import { useParams } from "react-router-dom";

const RecipeDetailsPage = () => {

    const { id } = useParams();
    const recipeId = parseInt(id, 10); // parse the id as an integer

    return (
        <Layout>
            <div className="container-fluid pt-5 mt-5">
                <RecipeDetails recipeID={recipeId} />
            </div>
        </Layout>
    );
};


export default RecipeDetailsPage;