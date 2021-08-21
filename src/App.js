import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Oferta from "./components/Oferta";
import Favorite from "./components/Favorite";
import Chefs from "./components/Chefs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Hero></Hero>
      <Oferta id="menu"></Oferta>
      <Favorite id="favorite"></Favorite>
      <Chefs id="staff"></Chefs>
      <Footer></Footer>
    </Router>
  );
}

export default App;
