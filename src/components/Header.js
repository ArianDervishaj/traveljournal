import React from "react";
import globe from '../assets/earth-globe.png'
function Header(){
    return(
        <header>
            <img src={globe} alt="globe" className="header--logo"/>
            <h1 className="header--title">Arian's travel journal</h1>
        </header>
    )
}

export default Header;