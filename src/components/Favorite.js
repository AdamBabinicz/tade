import React from "react";
import "./Favorite.css";
import favorite from "../images/4.jpg";
import Slide from "react-reveal/Reveal";

const Favorite = () => {
  return (
    <div className="favContainer" id="favorite">
      <h2>Moje ulubione zajęcie</h2>
      <div className="favContent">
        <Slide left>
          <img src={favorite} alt="..." className="favImage" />
        </Slide>
        <Slide right>
          <div className="textContent">
            <p>
              Jazda na rowerze na trasach od kilku do kilkunastu kilometrów
              przynosi mi największe zadowolenie. Oprócz zdrowego wysiłku,
              wycieczki rowerowe dostarczają mi wspaniałych widoków okolicznej
              przyrody.
            </p>
          </div>
        </Slide>
      </div>
      <button className="favBtn">Zobacz</button>
    </div>
  );
};

export default Favorite;
