import React from "react";


export default function StoryBookIndex(){
    return(
        <>
            <h1>Laboratorio No.3: Historia Interactiva</h1>
            <p>Instrucciones: Crear una historia interactiva, ya sea fictisia o veridica. </p>
            <hr></hr>
            <b id="Start">  <a href="start.html">Iniciar</a>    </b>
            <hr></hr>
        </>
    );
}

export default function StoryBookStart(){
    return(
        <>
            <p>La historia interactiva elegida para este laboratorio es sobre una exploración a un edificio abandonado.</p>
	        <p>Durante la historia se mostrará esto: "!!!", significa que se encuentra en un punto importante de la historia.</p>
	        <hr></hr>

	        <p>Te encuentras frente a una casa de dos niveles, frente a ti se encuentra la puerta principal y dos ventanas, una a cada lado de la puerta. Por el lado derecho se puede ver un pasillo a la parte trasera de la casa. </p>
	        <p>¿Hacia donde irás?</p>
	        <br></br>

	        <b id="m_door"><a href="m_Door.html">Puerta principal</a></b>
	        <br></br>
	        <b id="o_corridor"><a href="o_Corridor.html">Pasillo a un lado</a></b>

	        <br></br>
	        <hr></hr>
        </>
    );
}

export default function StoryBookBDoor(){
    return(
        <>
            <p>Atraviesas la puerta y te lastimas, (no fue una buena idea), ¿ahora que harás? </p>
	        <hr></hr>
	        <b><a href="kitchen.html">Entrar a la casa</a></b>
	        <br></br>
	        <b><a href="start.html">Regresar por el pasillo hacia la parte frontal de la casa</a></b>
            <br></br>
	        <hr></hr>
        </>
    );
}

export default function StoryBookDiningRoom(){
    return(
        <>
        	<p>La mesa ya está preparada, todo está listo para empezar a comer, incluso es posible ver comida completamente descompuesta en los platos. Un olor fétido se percibe en todo el cuarto.</p>
            <p>Al frente se puede ver la sala familiar, y a la derecha la entrada de la casa, ahora. ¿Qué harás? </p>
	        <hr></hr>
	        
	        <br></br>
            <b><a href="livingRoom.html">Ir a la sala familiar</a></b>
            <br></br>
            <b><a href="entry.html">Ir a la puerta frontal</a></b>
            <br></br>
	        <b><a href="kitchen.html">Regresar</a></b>
	        <br></br>
	        <hr></hr>
        </>
    );
}

export default function StoryBookEnd(){
    return(
        <>
        	<p>Te encuentras frente a la puerta principal de la casa, el lugar se encuentra totalmente oscuro, eres capaz de ver un poco gracias a la luz de la luna, luz que entra por un tragaluz justo arriba de ti, ahora. ¿Qué harás?</p>
	        <hr></hr>
	        <b><a href="s_Floor.html">Subir escaleras hacia el segundo nivel</a></b>
	        <br></br>
	        <b><a href="diningRoom.html">Ir al comedor</a></b>
	        <br></br>
	        <b><a href="m_Door.html">Salir de la casa</a></b>
	        <hr></hr>
        </>
    );
}

export default function StoryBookEntry(){
    return(
        <>
        	<p>Te encuentras frente a la puerta principal de la casa, el lugar se encuentra totalmente oscuro, eres capaz de ver un poco gracias a la luz de la luna, luz que entra por un tragaluz justo arriba de ti, ahora. ¿Qué harás?</p>
	        <hr></hr>
	        <b><a href="s_Floor.html">Subir escaleras hacia el segundo nivel</a></b>
	        <br></br>
	        <b><a href="diningRoom.html">Ir al comedor</a></b>
	        <br></br>
	        <b><a href="m_Door.html">Salir de la casa</a></b>
	        <hr></hr>
        </>
    );
}

export default function StoryBookHallway(){
    return(
        <>
            <p>Te encuentras en el final del pasillo, apenas se ve algo, escuchas ruidos que vienen de los cuartos. Se siente un frío sepulcral y te sientes vigilado. Ves una grabadora de voz y decides reproducir lo que hay en ella, notas que hay una grabación reciente y escuchas:</p>
	        <article>El sujeto está acercandose, parece que no se ha decidido todavía si entrar por la puerta principal o por el pasillo a un costado de la casa</article>
	        <p>Ahora. ¿Qué harás</p>
	        <hr></hr>
            <b><a href="run.html">Regresar</a></b>
	        <hr></hr>
        </>
    );
}

export default function StoryBookInspecting(){
    return(
        <>
        	<p>Revisando lo que hay en la sala, observas que los muebles, decoraciones y cosas personales de poco valor permanecen en allí, destrozados y rayados , ahora. ¿Qué harás?</p>
	        <hr></hr>
	        <b><a href="livingRoom.html">Regresar</a></b>
	        <br></br>
	        <hr></hr>
        </>
    );
}

export default function StoryBookKitchen(){
    return(
        <>
        <p>Te encuentras en la cocina de la casa, el cuarto está en total oscuridad, solamente pasan los rayos de la luz de la luna. Frente a tí, se encuentra el comedor,ahora. ¿Qué harás? </p>
	    <hr></hr>
	    <br></br>
	    <b><a href="diningRoom.html">Ir hacia el comedor</a></b>
	    <br></br>
        <b><a href="b_Door.html">Regresar</a></b>
	    <br></br>
	    <hr></hr>
        </>
    );
}

export default function StoryBookLivingRoom(){
    return(
        <>
        	<p>Te encuentras en la sala, el cuarto principal de la casa. Observas papeles, marcos de fotos y signos de saqueo por toda la casa, ahora. ¿Qué harás?</p>
	        <hr></hr>
	        <b><a href="inspectingLivingRoom.html">Inspeccionar la sala</a></b>
	        <br></br>
	        <b><a href="kitchen.html">Regresar</a></b>
	        <br></br>
	        <hr></hr>
        </>
    );
}

export default function StoryBookMDoor(){
    return(
        <>
        	<p>Te encuentras frente a la entrada principal de la casa, notas marcas extrañas, huellas y manchas de sangre por todos lados, ahora. ¿Qué harás?</p>
	        <hr></hr>
	        <b><a href="entry.html">Entrar a la casa</a></b>
	        <br></br>
	        <b><a href="start.html">Regresar</a></b>
	        <hr></hr>
        </>
    );
}

export default function StoryBookOCorridor(){
    return(
        <>
        	<p>Atraviesas el corredor que da a la parte trasera de la casa. Te encuentras en el patio trasero y ves una puerta corrediza de cristal. ¿Qué harás?</p>
	        <hr></hr>
	        <b><a href="b_Door.html">Romper la puerta y entrar a la casa</a></b>
	        <br></br>
	        <b><a href="start.html">Regresar por el pasillo hacia la parte frontal de la casa</a></b>
	        <br></br>
	        <hr></hr>
        </>
    );
}

export default function StoryBookRun(){
    return(
        <>
            <p>Huyes antes de siquiera ingresar a la propiedad, y mientras te alejas sientes que acabas de "esquivar una bala". (Sin darte cuenta escapas de una posible muerte).</p>
            <hr></hr>
        </>
    );
}

export default function StoryBookSFloor(){
    return(
        <>
        	<p>Frente a ti se puede ver un largo pasillo con una ventana al fondo y dos cuartos, ahora. ¿Qué harás?</p>
	        <hr></hr>
            <b><a href="hallway.html">Recorrer el pasillo</a></b>
            <br></br>
	        <b><a href="sf_Room1.html">Entrar al cuarto en el lado izquierdo del pasillo</a></b>
	        <br></br>
            <b><a href="sf_Room2.html">Entrar al primer cuarto del lado derecho del pasillo</a></b>
	        <br></br>
	        <b><a href="entry.html">Regresar</a></b>
	        <br></br>
	        <hr></hr>
        </>
    );
}

export default function StoryBookSFRoom(){
    return(
        <>
        	<p>Te encuentras en enorme cuarto, todo está destrozado, notas que han saqueado completamente el lugar. También notas simbolos extraños en las paredes, estos te ponen nervioso y piensas en huir, ahora. ¿Qué harás?</p>
	        <hr></hr>
	        <b><a href="s_Floor.html">Regresar</a></b>
	        <br></br>
	        <hr></hr>
        </>
    );
}

export default function StoryBookSFRoom2(){
    return(
        <>
            <p>Te encuentras en un cuarto decorado para un bebé, ves como una mesedora va hacia delante y hacia atras. Llantos de bebé te atormentan, hay ciertos elementos que te llaman la atención.</p>
	        <details>
	        	<summary>Una foto familiar, notas ciertos detalles en ella...</summary>
	        	<p>Rasguños sobre la madre, manchas de sangre sobre los niños y donde el padre se encontraba está rasgado </p>
	        </details>
	        <hr></hr>
            <b><a href="s_Floor.html">Regresar</a></b>
	        <hr></hr>
        </>
    );
}
