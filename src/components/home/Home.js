import './Home.css';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';



function Home() {
    const location = useLocation();
    const histroy = useNavigate();

    const handlesubmit = (e) =>{
        e.preventDefault();
        histroy('/');
    }


  return (
    <div className="homepage">
        <h1> Hello {location.state.id} welcome to the home </h1>
        <button className="loginpage" type="Submit" onClick={handlesubmit}>Go To Login Page</button>

        <div className="pic">
        <iframe width="1200" height="700" src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>

        </div>
    </div>
  )
}

export default Home
