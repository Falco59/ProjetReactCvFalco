import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="Home">
      <Navigation />
      <div className="HomeContent">
        <div className="content">
          <h1>Jean-Philippe Fumière</h1>
          <h2>Développeur Amateur</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              Télécharger CV
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
