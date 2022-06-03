import React from "react";

import cardGame from "../images/cardGame.png";
import story from "../images/story.png";
import calculator from "../images/calculator.png";
import chat from "../images/chat.png";
import css from "../images/css.png";
import p1 from "../images/p1.png";

import {FaArrowRight, FaArrowLeft} from "react-icons/fa";
import "../styles/carousel.scss";


export default function Carousel(){
    return(
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            
            <div class="carousel-item active">
              <img class="d-block w-100" src={cardGame} alt="First slide"></img>
            </div>
            
            <div class="carousel-item">
              <img class="d-block w-100" src={story} alt="Second slide"></img>
            </div>
            
            <div class="carousel-item">
              <img class="d-block w-100" src={calculator} alt="Third slide"></img>
            </div>

            <div class="carousel-item">
              <img class="d-block w-100" src={chat} alt="Third slide"></img>
            </div>

            <div class="carousel-item">
              <img class="d-block w-100" src={css} alt="Third slide"></img>
            </div>

            <div class="carousel-item">
              <img class="d-block w-100" src={p1} alt="Third slide"></img>
            </div>


          </div>


          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    );
}
