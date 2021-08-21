import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ toggle, show }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);

    toggle();
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
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
          <div className="sideRoute">Zobacz</div>
        </div>
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
