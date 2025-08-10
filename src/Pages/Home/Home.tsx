
import React from 'react';
import './Home.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 id="main">DebatersAI</h1>
            <h3 id="sub">
                The AI that helps with your school debate — writes your speech,<br />
                finds your sources, makes your arguments stronger,<br />
                and helps you sound more confident.
            </h3>

            <button id="start">Start Now</button>
            <button id="about" onClick={() => navigate('/about')}>About</button>

            <footer>
                <p id="footerC">© 2025 DebatersAI</p>
                <FontAwesomeIcon icon={faGithub} size="2x" id="github" onClick={() => window.open("https://github.com/dylanee300/DebatersAI")}/>
                <FontAwesomeIcon icon={faDiscord} size="2x" id="discord"/>

            </footer>
        </div>
    );
}

export default Home;
