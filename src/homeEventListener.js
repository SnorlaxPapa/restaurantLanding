"use strict";
import restaurantimg from './restaurantimg.jpg'

export function homeEventListener(event){
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.style = "";
    content.style.height = "100%";
    content.style.display = "grid";
    content.style.gridTemplateColumns = "repeat(2, 1fr)";
    content.style.columnGap = "20px";
    content.style.paddingTop = "50px";

    let image = new Image();
    image.src = restaurantimg;
    image.style.gridArea = "1 / 1 / 2 / 2";
    image.style.height = "100%"
    image.style.maxWidth = "100%";
    image.style.paddingLeft = "1em";
    content.appendChild(image);

    let description = document.createElement("div");
    description.style.gridArea = "1 / 2 / 2 /3";
    description.style.maxHeight = "100%";
    description.style.maxWidth = "100%";
    description.style.backgroundColor = "#dadcb5";
    description.style.display = "flex";
    description.style.flexDirection = "column";
    description.style.justifyContent = "center";
    description.style.fontSize = "3rem";

    let greeting = "Hello and welcome to our world's famous restaurant.";
    let history = "Priding ourselves on 150 years of eating shit, we love serving you morsels of air we call food";

    let greetingP = document.createElement('p');
    greetingP.textContent = `${greeting}`;
    description.appendChild(greetingP);

    let historyP = document.createElement('p');
    historyP.textContent = `${history}`;
    description.appendChild(historyP);

    content.appendChild(description);
}
