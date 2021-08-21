import React from "react";
import { cakes } from "../data/menu";
import "./Oferta.css";
import Slide from "react-reveal/Reveal";

const Oferta = ({ id }) => {
  return (
    <div className="cakeContainer" id={id}>
      <h1 className="cakeHeading">Moja aktywność</h1>
      <div className="cakeWrapper">
        {cakes.map((cake, index) => (
          <Slide
            key={index}
            right={index >= 3 ? true : false}
            left={index < 3 ? true : false}
          >
            <div className="cakeCard">
              <img src={cake.img} alt={cake.alt} className="cakeImg" />
              <div className="cakeInfo">
                <div className="protTitle">{cake.title}</div>
                <div className="protDesc">{cake.desc}</div>
                <div className="cakePrice">{cake.price}</div>
                <button className="cakeBtn">Wybierz</button>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Oferta;
