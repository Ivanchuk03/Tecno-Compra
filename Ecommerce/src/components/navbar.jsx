import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "../Style/navbar.css";

import LogoTecno from '../assets/img/zyro-image.png'

import Home from "./home.jsx";
import Products from "./productCards.jsx";
import Ayuda from "./Ayuda.jsx";
import MarcasSponsor  from "./MarcasSponsor.jsx";

import NoMatch from "./noMatch"

function Navbar({products, searchProducts, key}) {
return (
<BrowserRouter>
        <nav className="Navbar_nav" aria-multiselectable="true" aria-orientation="horizontal">
        <NavLink to="/" role="button" className="homeButton">
        <div className="logo_img">
            <img src={LogoTecno} alt="TecnoCompra"/>
            </div>  
        </NavLink>
        <div className="elementos_navbar"> 
        <NavLink className="Navbar_navlink" to="/Productos" role="button">
            Productos
        </NavLink>
        <NavLink className="Navbar_navlink" to="/Ayuda" role="button">
            Ayuda
        </NavLink>
        <NavLink className="Navbar_navlink" to="/MarcasSponsor" role="button">
            Marcas Sponsor
        </NavLink>
        </div>
        
        </nav>
    <Routes>
        <Route path="/" element = { <Home/>}/>
        <Route path="/Productos" element = {<Products products={products} searchProducts={searchProducts} key={key}/>}/>
        <Route path="/Ayuda" element = {<Ayuda/>} />
        <Route path="/MarcasSponsor" element = {<MarcasSponsor/>} />
        <Route path="*" element= {<NoMatch/>}/>
    </Routes>
</BrowserRouter>
    )
}
export default Navbar;

/*
*/