import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./HomePage.css"; // Assuming you're using a separate CSS file for styling

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the desired path
  };

  return (
    <div className="home-page">
      <div className="containr">
        <h1>Fruit.AI</h1>
        <p className="tagline">"Be Healthy!"</p>
        <div className="grid">
          <div className="box chat" onClick={() => handleNavigation("/Chatbot")}>Chat.</div>
          <div className="box pty"></div>
          <div className="box empty"></div>
          <div className="box translate" onClick={() => handleNavigation("/TranslatorPage")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1200px-Google_Translate_logo.svg.png"
              alt="Translate"
              className="icon"
            />
          </div>
          <div className="box faqs" onClick={() => handleNavigation("/FAQ")}>FAQs</div>
          <div className="box about" onClick={() => handleNavigation("/about")}>About</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
