import React from "react";
import "../styles/body.scss"

import Carousel from "./carousel";
import Summary from "./summary";
import Contact from "./contact";

export default function Body(){
    return(
        <div id="bodyContainer">
            <Carousel></Carousel>
            <Summary></Summary>
        </div>
    );
}