import Layout from "../components/layout/Layout";
import RecipeCreator from "../components/RecipeCreator/RecipeCreator";

const RecipeCreatorPage = () => {
    return (
        <Layout>
            <div className="pt-5 mt-5">
                <RecipeCreator />
            </div>
        </Layout>
    );
};


export default RecipeCreatorPage;