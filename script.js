const btnRandom = document.querySelector("#random-btn")
function moverAleatoriamente (botones3) {

    botones3.style.position = "absolute"
    botones3.style.top = Math.floor(Math.random() * 200 + 5) + "%";
    botones3.style.left = Math.floor(Math.random() * 200 + 5) + "%";

    
}

btnRandom.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target)

} );


