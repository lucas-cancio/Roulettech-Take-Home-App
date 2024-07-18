
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex flex-row">
                <Link to="/">
                    <h4>Home</h4>
                </Link>
                <Link to="/createRecipe">
                    <h4>Create Recipe</h4>
                </Link>
                <Link to="/recipes">
                    <h4>Search Recipes</h4>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;