
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className='custom-navbar'>
            <div className='container-fluid p-2'>
                <div className='d-flex flex-row justify-content-between'>
                    <Link className='d-flex flex-column navbar-link' to='/'>
                        <h3 className='navbar-link-text'>RecipeHub</h3>
                    </Link>
                    <div className='d-flex flex-row justify-content-around px-3'>
                        <Link className='d-flex flex-column navbar-link py-1 px-2 mx-1' to='/recipes'>
                            <h3 className='navbar-link-text'>Search</h3>
                        </Link>
                        <Link className='d-flex flex-column navbar-link py-1 px-2 mx-1' to='/createRecipe'>
                            <h3 className='navbar-link-text'>Create</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
        // <div className="container-fluid">
        //     <div className="d-flex flex-row">
        //         <Link to="/">
        //             <h4>Home</h4>
        //         </Link>
        //         <Link to="/createRecipe">
        //             <h4>Create Recipe</h4>
        //         </Link>
        //         <Link to="/recipes">
        //             <h4>Search Recipes</h4>
        //         </Link>
        //     </div>
        // </div>

export default NavBar;