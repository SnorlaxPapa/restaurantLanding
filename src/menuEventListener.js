"use strict";

export function menuEventListener(){
    let content = document.querySelector("#content");
    content.innerHTML = "";
    content.style = "";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.height = "80vh";
    content.style.width = "40%";
    content.style.margin = "auto";
    content.style.marginTop = "20px";
    content.style.alignItems = "center";
    content.style.gap = "5px";
    content.style.border = "5px solid black";
    content.style.borderRadius = "15%";
    content.style.fontSize = "3rem";
    content.style.justifyContent = "center";

    content.innerHTML = `<p> We don't serve any food. </p> 
                         <p> We only serve shit! </p>`;
}