import React from "react";

import "../styles/card.scss"
import game from "../images/game.png";
import story from "../images/story.jpg";
import login from "../images/login.jpg";
import calc from "../images/calc.png";

import "../fonts/title.ttf";


export default function CardE(){

    return(
        <>
            <div id="container">
                <div className="card">
                    <img id="game-image" className="card-img-top" src={game} alt="Card image top"></img>
                    <div className="card-body">
                        <p className="card-title">Dinosaur Game</p>
                        <p className="card-text">It's the dinosaur game in react</p>
                        <button id="game-button" className="card-button">Play</button>
                    </div>
                </div>

                <div className="card-story">
                    <img id="story-image" className="card-img-top" src={story} alt="Card image top"></img>
                    <div className="card-body">
                        <p className="card-title">StoryBook</p>
                        <p className="card-text">It's a story like</p>
                        <button className="card-button" >Play</button>
                    </div>
                </div>


                <div className="card-login">
                    <img id="login-image" className="card-img-top" src={login} alt="Card image top"></img>
                    <div className="card-body">
                        <p className="card-title">Login</p>
                        <p className="card-text">It's the example of a login</p>
                        <button className="card-button" >Play</button>
                    </div>
                </div>

                <div className="card-calc">
                    <img id="calc-image" className="card-img-top" src={calc} alt="Card image top"></img>
                    <div className="card-body">
                        <p className="card-title">Calculator</p>
                        <p className="card-text">It's a calculator in react</p>
                        <button id="calc-button" className="card-button" >Play</button>
                    </div>
                </div>


            </div>

        </>
    );
}