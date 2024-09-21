let queue = 0;
let audio = new Audio('./assets/4.mp3');

let t;
let b;
let c;
let o;
window.onload = () => {
    t = document.querySelector("#times");
    b = document.querySelector("#butt");
    c = document.querySelector("#close");
    o = document.querySelector("#open");
    
    b.onmousedown = () => {
        Assia();
    }

    b.onmouseup = () => {
        June();
    }

    b.onkeypress = () => {
        Assia();
    }

    b.onkeyup = () => {
        June();
    }
}

function Assia() {
    audio.cloneNode(true).play();
    queue++;
    t.innerHTML = queue;
    c.classList.add("hidden");
    o.classList.remove("hidden");
}

function June() {
    c.classList.remove("hidden");
    o.classList.add("hidden");
}