import './IngredientPill.css';

const IngredientPill = ({name, handleDelete}) => {

    const handleBtnClick = (event) => {
        event.preventDefault();
        handleDelete(name);
    };

    return (
        <div className='rounded-pill ingredient-pill'>
            <div className='d-flex flex-row ps-2'>
                <div className='d-flex flex-column'>
                    <p className='ingredient-text'> <strong>{name}</strong></p>
                </div>
                <button className='d-flex flex-column deleteBtn' onClick={handleBtnClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default IngredientPill;