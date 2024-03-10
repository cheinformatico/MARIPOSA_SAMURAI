var sombracorte, ala1, ala2, ala3, ala4;
var centrosC, contenedor, nivelD, tiempoJ,
    mensajeCentro, icoTotalMariposa, btnJugar, mensajeJuego;

var bLanzar;

function iniciar() {


    contenedor = document.querySelectorAll(".contenedor");
    sombracorte = document.querySelector(".sombracorte");

    ala1 = document.querySelectorAll(".ala1");
    ala2 = document.querySelectorAll(".ala2");
    ala3 = document.querySelectorAll(".ala3");
    ala4 = document.querySelectorAll(".ala4");

    mensajeCentro = document.querySelector(".mensajeCentro");
    icoTotalMariposa = document.querySelector(".icoMariposasCapturadas");
    btnJugar = document.querySelector(".btnJugar");

    mariposaContador = document.getElementById("mariposaContador");
    nivelD = document.getElementById("nivelD");
    tiempoJ = document.getElementById("tiempoJ");

    mensajeJuego = document.getElementById("mensajeJuego");

    centrosC = document.querySelectorAll(".centros");

    document.addEventListener("mousemove", animacionCorteCursor);
    btnJugar.addEventListener("click", jugar)


    icoTotalMariposa.style.left = 45 + "%";
    icoTotalMariposa.style.top = 30 + "%";
    mariposaContador.style.left = 55 + "%";
    mariposaContador.style.top = 26 + "%";

    icoTotalMariposa.style.scale = 5;
    mariposaContador.style.scale = 5;


}
var auxboleano;
var audioTema = new Audio();
function jugar() {
    tiempoJ.textContent = "Tiempo Jugado: " + tiempo;

    bLanzar = setInterval(estado, 1000);


    btnJugar.style.display = "none";
    icoTotalMariposa.style.left = 92.5 + "%";
    icoTotalMariposa.style.top = 9 + "%";
    mariposaContador.style.left = 95 + "%";
    mariposaContador.style.top = 5 + "%";

    icoTotalMariposa.style.scale = 1;
    mariposaContador.style.scale = 1;
    lanzar();
    auxboleano = setInterval(() => {
        if (mariposasCapturadas == aux) {


            mensajeCentro.style.visibility = "visible";
            mensajeJuego.textContent = "DERROTA";
            mensajeJuego.style.color = "red";
            icoTotalMariposa.style.left = 45 + "%";
            icoTotalMariposa.style.top = 30 + "%";
            mariposaContador.style.left = 55 + "%";
            mariposaContador.style.top = 26 + "%";

            icoTotalMariposa.style.scale = 5;
            mariposaContador.style.scale = 5;

            clearInterval(auxboleano);
            clearInterval(bLanzar);
            audioTema.src = "./res/derrota.mp3";
            audioTema.volume = .2;

            audioTema.play();


        }
    }, 3000)

    audioTema.src = "./res/tema.mp4";
    audioTema.volume = .1;

    audioTema.play();

}


var tiempo = 1;
var vf = false;

var aux = 0;

var averver;





function estado() {


    tiempo++;
    centrosC[valor].addEventListener("mouseenter", toque1);

    tiempoJ.textContent = "Tiempo Jugado: " + tiempo;

    if (vf == true) {
        lanzar();

        auxboleano = setInterval(() => {
            if (mariposasCapturadas == aux) {


                mensajeCentro.style.visibility = "visible";
                mensajeJuego.textContent = "DERROTA";
                mensajeJuego.style.color = "red";
                icoTotalMariposa.style.left = 45 + "%";
                icoTotalMariposa.style.top = 30 + "%";
                mariposaContador.style.left = 55 + "%";
                mariposaContador.style.top = 26 + "%";

                icoTotalMariposa.style.scale = 5;
                mariposaContador.style.scale = 5;

                clearInterval(auxboleano);
                clearInterval(bLanzar);
                audioTema.src = "./res/derrota.mp3";
                audioTema.play();
                audioTema.volume = .2;

            }
        }, 3000);

        vf = false;

    }




}

function animacionCorteCursor(evento) {

    var posx = evento.pageX;
    var posy = evento.pageY;

    sombracorte.style.top = posy - 42 + "px";
    sombracorte.style.left = posx - 55 + "px";


}

let duracionLanzamiento = 3000;

let animacionKeyframeCirculosIzquierdos = [
    { top: "0%", left: "1%", offset: 0 },
    { top: "-100%", left: "4%", offset: .05 },
    { top: "-200%", left: "8%", offset: .1 },
    { top: "-1200%", left: "40%", offset: 1 }


];


let animacionKeyframeCirculosDerechos = [
    { top: "0%", right: "1%", offset: 0 },
    { top: "-100%", right: "4%", offset: .05 },
    { top: "-200%", right: "8%", offset: .1 },
    { top: "-1200%", right: "40%", offset: 1 }


];

let propiedadAnimacionCirculosNivel1 =
{
    duration: 3000,
    easing: "linear",


}

let propiedadAnimacionCirculosNivel2 =
{
    duration: 2500,
    easing: "linear",


}

let propiedadAnimacionCirculosNivel3 =
{
    duration: 1800,
    easing: "linear",


}

const animacionKeyframeCorte = [
    { scale: "1", transform: "rotateZ(0deg) rotateY(0deg) rotateX(0deg)", offset: 0 },
    { scale: ".5", transform: "rotateZ(180deg) rotateY(180deg) rotateX(180deg)", offset: .5 },
    { scale: "0", transform: "rotateZ(360deg) rotateY(360deg) rotateX(360deg)", offset: 1 },
]

const propiedadAnimacionCorte = {
    duration: 500,
    easing: "linear"
}

const animacionKeyframeMariposaIzquierda = [
    { transform: "rotateZ(30deg) rotateY(0deg)", offset: 0 },
    { transform: "rotateZ(30deg) rotateY(75deg)", offset: .5 },
    { transform: "rotateZ(30deg) rotateY(0deg)", offset: 1 },
]

const propiedadAnimacionMariposaIzquierda = {
    duration: 500,
    easing: "linear"
}

const animacionKeyframeMariposaDerecha = [
    { transform: "rotateZ(-30deg) rotateY(0deg)", offset: 0 },
    { transform: "rotateZ(-30deg) rotateY(75deg)", offset: .5 },
    { transform: "rotateZ(-30deg) rotateY(0deg)", offset: 1 },
]

const propiedadAnimacionMariposaDerecha = {
    duration: 500,
    easing: "linear"
}


const animacionCambioNivel = [
    { transform: "scale(1)", offset: 0 },
    { transform: "scale(2)", offset: .5 },
    { transform: "scale(1)", offset: 1 },
]

const propiedadCambioNivel = {
    duration: 500,
    easing: "linear"
}

var valor;

var varlado;

var bucleAalas;

function lanzar() {

    var numeroalazar = Math.random() * (11 - 1);
    valor = Math.floor(numeroalazar);

    contenedor[valor].style.backgroundColor = "transparent";
    contenedor[valor].style.opacity = "1";
    contenedor[valor].style.transform = "scale(1)";

    if (mariposasCapturadas < 10 || mariposasCapturadas > 19 && mariposasCapturadas < 25 || mariposasCapturadas > 34 && mariposasCapturadas < 35) {


        if (mariposasCapturadas == 1 || mariposasCapturadas == 20 || mariposasCapturadas == 35) {

            var audioCatch = new Audio("./res/niveles.mp3");
            audioCatch.volume = .1;
            audioCatch.play();

            mariposaContador.animate(animacionCambioNivel, propiedadCambioNivel);
            nivelD.textContent = "Nivel dificultad: " + 1;

        }


        if (valor < 5) {

            contenedor[valor].animate(animacionKeyframeCirculosIzquierdos, propiedadAnimacionCirculosNivel1);

        } else {

            contenedor[valor].animate(animacionKeyframeCirculosDerechos, propiedadAnimacionCirculosNivel1);
        }
    } else if (mariposasCapturadas > 9 && mariposasCapturadas < 15 || mariposasCapturadas > 24 && mariposasCapturadas < 30) {

        if (mariposasCapturadas == 10 || mariposasCapturadas == 25) {

            var audioCatch = new Audio("./res/niveles.mp3");
            audioCatch.volume = .1;
            audioCatch.play();

            nivelD.textContent = "Nivel dificultad: " + 2;

            mariposaContador.animate(animacionCambioNivel, propiedadCambioNivel);

        }


        if (valor < 5) {

            contenedor[valor].animate(animacionKeyframeCirculosIzquierdos, propiedadAnimacionCirculosNivel2);

        } else {

            contenedor[valor].animate(animacionKeyframeCirculosDerechos, propiedadAnimacionCirculosNivel2);
        }

    } else if (mariposasCapturadas > 14 && mariposasCapturadas < 20 || mariposasCapturadas > 29 && mariposasCapturadas < 35) {

        if (mariposasCapturadas == 15 || mariposasCapturadas == 30) {
            var audioCatch = new Audio("./res/niveles.mp3");
            audioCatch.volume = .1;
            audioCatch.play();

            nivelD.textContent = "Nivel dificultad: " + 3;


            mariposaContador.animate(animacionCambioNivel, propiedadCambioNivel);

        }


        if (valor < 5) {

            contenedor[valor].animate(animacionKeyframeCirculosIzquierdos, propiedadAnimacionCirculosNivel3);

        } else {

            contenedor[valor].animate(animacionKeyframeCirculosDerechos, propiedadAnimacionCirculosNivel3);
        }

    } else if (mariposasCapturadas > 34) {

        clearInterval(auxboleano);

        clearInterval(bLanzar);
        clearInterval(bucleAalas);

        audioTema.src = "./res/victoria.mp3";
        audioTema.play();
        audioTema.volume = .8;

        mensajeCentro.style.visibility = "visible";
        mensajeJuego.textContent = "VICTORIA";
        icoTotalMariposa.style.left = 45 + "%";
        icoTotalMariposa.style.top = 30 + "%";
        mariposaContador.style.left = 55 + "%";
        mariposaContador.style.top = 26 + "%";

        icoTotalMariposa.style.scale = 5;
        mariposaContador.style.scale = 5;

        aux++;


    }


    bucleAalas = setInterval(() => {
        if (valor < 5) {
            for (var i = 0; i < ala1.length; i++) {
                ala1[i].animate(animacionKeyframeMariposaIzquierda, propiedadAnimacionMariposaIzquierda);
                ala2[i].animate(animacionKeyframeMariposaIzquierda, propiedadAnimacionMariposaIzquierda);
                ala3[i].animate(animacionKeyframeMariposaIzquierda, propiedadAnimacionMariposaIzquierda);
                ala4[i].animate(animacionKeyframeMariposaIzquierda, propiedadAnimacionMariposaIzquierda);
            }
        } else {
            for (var i = 0; i < ala1.length; i++) {
                ala1[i].animate(animacionKeyframeMariposaDerecha, propiedadAnimacionMariposaDerecha);
                ala2[i].animate(animacionKeyframeMariposaDerecha, propiedadAnimacionMariposaDerecha);
                ala3[i].animate(animacionKeyframeMariposaDerecha, propiedadAnimacionMariposaDerecha);
                ala4[i].animate(animacionKeyframeMariposaDerecha, propiedadAnimacionMariposaDerecha);
            }
        }


    }, 500)





}

var mariposaContador;

var mariposasCapturadas = 0;
function toque1() {
    clearInterval(auxboleano);
    clearInterval(bucleAalas);
    var audioCatch = new Audio("./res/catchM.mp3");

    contenedor[valor].style.cursor = "none";

    contenedor[valor].style.backgroundColor = "yellow";
    contenedor[valor].style.transform = "scale(1)  rotateY(180deg)";
    contenedor[valor].style.transform = "scale(2)";
    contenedor[valor].style.transform = "scale(3)  rotateY(180deg)";
    contenedor[valor].style.transform = "scale(4)";
    contenedor[valor].style.transform = "scale(0)  rotateY(360deg)";

    if (vf == false) {
        audioCatch.play();
        mariposasCapturadas++;

    }
    vf = true;

    mariposaContador.textContent = "x" + mariposasCapturadas;
    aux = mariposasCapturadas;

}


window.addEventListener("load", iniciar);