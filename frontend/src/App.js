import { useState } from 'react';
import './App.css';
import api from './services/axios';

function App() {

    const [myText, setMyText] = useState("");

    const handleBtnClick = (event) => {
        event.preventDefault();

        api.get("/dummyApp/")
        .then((res) => {
            setMyText(res.data);
        })
        .catch((err) => {
            console.error(err);
            setMyText(err);
        });
    };

    return (
        <div className="App">
            Hello, world!

            <div>
                <button onClick={handleBtnClick}>Update text from server</button>
                <p>Django text:</p>
                {myText}
            </div>
        </div>
    );
}

export default App;
