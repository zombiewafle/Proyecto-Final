import React from "react";
import "../styles/footer.scss"

import discord from "../images/discord.svg";
import chat from "../images/chat.svg";
import patron from "../images/patron.png";




export default function Footer(){



    return (
        <div className="footer">
            <div id="divider"></div>
            <div id="footerInfo">
                <span id="dbInfo">
                    <p id="info1">Pagina creada para mostrar algunas de las cosas que fuimos aprendiendo a lo largo del curso</p>
                    <p id="info2">Solo se muestran algunos de los proyectos, laboratorios y ejercicios realizados en clase</p>
                    <p id="info3">Este sitio no está afiliado con la Universidad del Valle. Todas las imágenes y logos de los juegos son propiedad de sus respectivos dueños.</p>
                </span>
                <span id="advices">
                    <p>¿Tienes sugerencias? ¡Ven y únete en Discord!</p>
                    <a id="discordA"><img id="discord" width ="100%" src={discord}></img>   </a>
                    <img id="chat" width ="10%" src={chat} ></img>
                    <a id="patreonA" href="https://www.patreon.com/"><img id="patron" width ="100%" src={patron} ></img></a>
                </span>
            </div>
        </div>
    );
}
