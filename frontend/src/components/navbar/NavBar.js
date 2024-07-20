
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className='custom-navbar'>
            <div className='container-fluid p-2'>
                <div className='d-flex flex-row justify-content-between'>
                    <Link className='d-flex flex-column navbar-link' to='/'>
                        <h3 className='navbar-link-text'>RecipeHaven</h3>
                    </Link>
                    <div className='d-flex flex-row justify-content-around px-3'>
                        <Link className='d-flex flex-column navbar-link py-1 px-2 mx-1' to='/recipes'>
                            <h5 className='navbar-link-text'>Search</h5>
                        </Link>
                        <Link className='d-flex flex-column navbar-link py-1 px-2 mx-1' to='/createRecipe'>
                            <h5 className='navbar-link-text'>Create</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;