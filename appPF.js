var programacion;
var progF;
var basededatos;
var bdF;
var entornos;
var entF;
var lenguaje;
var lengF;
var ingles;
var inglesF;
var media;
var mediaCon
var resultado;
var resultado2;


function calcularMedia(){
    programacion= document.getElementById("prog").value;
    progF=parseFloat(programacion);
    basededatos= document.getElementById("bd").value;
    bdF=parseFloat(basededatos);
    entornos=document.getElementById("ent").value;
    entF=parseFloat(entornos);
    lenguaje=document.getElementById("leng").value;
    lengF=parseFloat(lenguaje);
    media=(progF+bdF+entF+lengF)/4;
    resultado=document.getElementById("media");
    resultado.value=media.toFixed(2);
    console.log(media.toFixed(2));
    return false;
}

function calcularMediaCon(){
    programacion= document.getElementById("prog").value;
    progF=parseFloat(programacion);
    basededatos= document.getElementById("bd").value;
    bdF=parseFloat(basededatos);
    entornos=document.getElementById("ent").value;
    entF=parseFloat(entornos);
    lenguaje=document.getElementById("leng").value;
    lengF=parseFloat(lenguaje);
    ingles= document.getElementById("ing").value;
    inglesF = parseFloat(ingles);
    mediaCon=(progF+bdF+entF+lengF+inglesF)/5;
    resultado2=document.getElementById("mediaCon");
    resultado2.value=mediaCon.toFixed(2);
    console.log(mediaCon.toFixed(2));
    return false;
}

function examen(){
    calcularMediaCon();
    calcularMedia();
}