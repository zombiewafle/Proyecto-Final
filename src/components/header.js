import React from "react";
import "../styles/header.scss";

import logo from "../images/logo.png";
import uvg from "../images/logouvg.png";

export default function Header(){
    return(
        
        <div id="headerContainer">
            <img id="headerLogo" src={logo}></img>
            <a id="gameItem" className="headerItems" href="http://34.201.74.95:3164/">Card Game</a>
            <a id="storyItem" className="headerItems" href="http://34.201.74.95:3166/">StoryBook</a>
            <a id="CalculatorItem" className="headerItems" href="http://34.201.74.95:3165/">Calculator</a>
            <a id="chatItem" className="headerItems" href="http://34.201.74.95:3170/">Chat</a>
            <a id="artItem" className="headerItems" href="http://34.201.74.95:3162/">CSS Art</a> 
            <a id="cardsItem" className="headerItems" href="http://34.201.74.95:3171/">Proyecto 1</a>
            <div id="filler"></div>
            <a id="uvgA" href="https://www.uvg.edu.gt/"><img id="uvg" src={uvg}></img></a>
        </div>
        
    );
}