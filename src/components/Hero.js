import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import Sidebar from "./Sidebar";
import Popup from "./Popup";
import Img1 from "../images/1.svg";

const Hero = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const [buttonPopup, setButtonPopup] = useState(false);
  // const [buttonPopup1, setButtonPopup1] = useState(false);
  const [state] = useState({
    title: "10 zasad zdrowego stylu życia",
    img: Img1,
    p0: "Styl życia: dieta, ruch, sposoby radzenia sobie ze stresem, środowisko i jakość relacji, jakie nawiązujemy z innymi, w ponad 50 proc. odpowiada za stan naszego organizmu. Nie na wszystko mamy wpływ: nie zmienimy na przykład genów, które w 20 proc. wpływają na zdrowie. Zmiana nawyków jest jednak w zasięgu ręki. Dzięki temu zyskasz wyższą jakość życia w każdym jego aspekcie.",
    em: "zdrowie.pap.pl/10-zasad-zdrowego-stylu-zycia",
  });

  return (
    <div className="container">
      <Navbar toggle={toggle}></Navbar>
      <Sidebar show={show} toggle={toggle}></Sidebar>
      <div className="content">
        <div className="contentItems">
          <h1 className="navHead">Mój sposób na zdrowe życie</h1>
          <p>
            Nie jest skomplikowany i zbyt wymagający. Żyję wybierając najlepsze
            dla mnie opcje, które dostarczają mi satysfakcji i wiele radości!
            Zachęcam do pójścia w moje ślady, jeżeli nie we wszystkich
            aktywnościach, to przynajmniej w niektórych.
          </p>
          <div className="btn" onClick={() => setButtonPopup(true)}>
            Zobacz
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3 style={{ fontSize: "15px" }}>{state.title}</h3>
            <br />
            <img src={state.img} alt="..." /> <br />
            <p style={{ fontSize: "14px" }}>{state.p0}</p>
            <em style={{ fontSize: "12px" }}>{state.em}</em>
            <br />
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default Hero;
