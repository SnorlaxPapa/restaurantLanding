"use strict";

import "./style.css";
import {homeEventListener} from './homeEventListener.js';
import {menuEventListener} from './menuEventListener.js';
import {aboutEventListener} from './aboutEventListener.js';

let homeButton = document.querySelector("#home");
homeButton.addEventListener("click", homeEventListener);

let menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", menuEventListener);

let aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", aboutEventListener);

window.addEventListener("load", homeEventListener);

const buttons = document.querySelectorAll("button");

document.addEventListener("keydown", (event)=>{
    if (event.key == "Tab") event.preventDefault();
    let activeEle = document.activeElement;
    let index = Array.from(buttons).indexOf(activeEle)
    
    let nextIndex; 
    if (index==-1) nextIndex = 0;
    else{
        nextIndex = event.shiftKey ? (index-1+buttons.length) % buttons.length : (index+1) % buttons.length;
    }

    buttons[nextIndex].focus();
})


