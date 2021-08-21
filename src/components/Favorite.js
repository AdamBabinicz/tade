import React, { useState } from "react";
import "./Favorite.css";
import favorite from "../images/4.jpg";
import Slide from "react-reveal/Reveal";
import Popup from "./Popup";
import Img1 from "../images/9.svg";

const Favorite = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [buttonPopup1, setButtonPopup1] = useState(false);
  const [state] = useState({
    title: "Ile kalorii spalamy na rowerze?",
    img: Img1,
    p0: "Przyjmuje się, że jazda na rowerze ze średnią prędkością ok. 20 km/h przez godzinę pozwala spalić 400 – 500 kcal. W ciągu pół godzinnej przejażdżki jesteśmy w stanie pozbyć się ok. 200 – 300 kcal.",
    em: "pgbikes.pl/porady-rowerowe/porady",
  });

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
      <button className="favBtn" onClick={() => setButtonPopup(true)}>
        Zobacz
      </button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 style={{ fontSize: "15px" }}>{state.title}</h3>
        <br />
        <img src={state.img} alt="..." /> <br />
        <p style={{ fontSize: "14px", textAlign: "left" }}>{state.p0}</p>
        <em style={{ fontSize: "11px" }}>{state.em}</em>
        <br />
      </Popup>
    </div>
  );
};

export default Favorite;
