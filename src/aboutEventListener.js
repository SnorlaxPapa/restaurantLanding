"use strict";

export function aboutEventListener(){
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
    content.style.fontSize = "3rem";
    content.style.justifyContent = "center";

    content.innerHTML = `<p> YOU DON'T </p> 
                         <p> KNOW ME SON. </p>`;
}