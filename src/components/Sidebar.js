import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Popup from "./Popup";
import Img1 from "../images/11.svg";

const Sidebar = ({ toggle, show }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);

    toggle();
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [buttonPopup1, setButtonPopup1] = useState(false);
  const [state] = useState({
    title: "Aktywność fizyczna - korzyści zdrowotne",
    img: Img1,
    p0: "Aktywność fizyczną w życiu codziennym można podzielić na zajęcia zawodowe, sportowe, domowe lub inne. Wydatek energetyczny można oznaczyć np. poprzez liczbę kilokalorii (kcal) niezbędnych do zapewnienia energii przy wykonywaniu określonej czynności. Dlatego należy pamiętać, że poza ćwiczeniami typowo sportowymi, wszelkie inne aktywności fizyczne, które odbywają się w czasie wolnym – jako część pracy zawodowej bądź domowej – również przynoszą korzyści zdrowotne.",
    em: "ncez.pzh.gov.pl/aktywnosc-fizyczna",
  });

  return (
    <div className={`sideContainer ${show ? "show" : ""}`}>
      <div className="close" onClick={toggle}>
        <FaTimes />
      </div>
      <div className="sideMenu">
        <Link to="/" className="sideLink" onClick={() => scrollTo("menu")}>
          Wybór
        </Link>
        <Link to="/" className="sideLink" onClick={() => scrollTo("staff")}>
          Ważne
        </Link>
        <Link to="/" className="sideLink" onClick={() => scrollTo("favorite")}>
          Ulubione
        </Link>
        <Link to="/" className="sideLink" onClick={() => scrollTo("contact")}>
          {/* Kontakt */}
        </Link>
        <div className="btnWrap">
          <div className="sideRoute" onClick={() => setButtonPopup(true)}>
            Zobacz
          </div>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3 style={{ fontSize: "15px" }}>{state.title}</h3>
          <br />
          <img src={state.img} alt="..." /> <br />
          <p style={{ fontSize: "14px", textAlign: "left" }}>{state.p0}</p>
          <em style={{ fontSize: "11px" }}>{state.em}</em>
          <br />
        </Popup>
      </div>
    </div>
    // <SidebarContainer isOpen={isOpen} onClick={toggle}>
    // 	<Icon onClick={toggle}>
    // 		<CloseIcon />
    // 	</Icon>

    // 	<SidebarMenu>
    // 		<SidebarLink to="/">Pizzas</SidebarLink>
    // 		<SidebarLink to="/">Desserts</SidebarLink>
    // 		<SidebarLink to="/">Full Menu</SidebarLink>
    // 	</SidebarMenu>

    // 	<SideBtnWrap>
    // 		<SidebarRoute to="/">Order Now</SidebarRoute>
    // 	</SideBtnWrap>
    // </SidebarContainer>
  );
};

export default Sidebar;
