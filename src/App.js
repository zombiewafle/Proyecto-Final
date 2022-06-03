import React from "react";
import reactDom from "react-dom";
import CardE from "./components/cards.js";
import {Calc} from "./components/calc.js";
import Game from "./game/game.js";

import Header from "./components/header.js";
import Body from "./components/body.js";
import Footer from "./components/footer.js";

export function App(){
    return (
        <>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </>
    );
}