import React from "react";

import userSummary from "../images/user.jpg";
import programming from "../images/languages.jpg";
import "../styles/body.scss"

export default function Summary(){
    return(
        <div id="summaryContainer">
            <div className="summaries">
                <div id="sum1">
                    <span className="imageSummary"><img id="img1" src={userSummary}></img></span>
                    <h2 className="summaryTitles">Javier André Salazar De Leon</h2>
                    <p className="summary">I'm a computer science engineering student, a fan of the hardware and the tinkering of it. A gamer and basically a tech nerdy.</p>
                </div>

                <div id="sum2">
                    <span className="imageSummary"><img id="img2" src={programming}></img></span>
                    <h2 className="summaryTitles">Languages of expertise</h2>
                    <p className="summary">Right now I'm a fan of all the web related programming languages like HTML, JavaScript and CSS. During the course we practice with React and SCSS, along with other technologies like Webpack, Babel and bootstrap</p>
                </div>
            </div>

        </div>
    );
}