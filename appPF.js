var programacion;
var progF;
var basededatos;
var bdF;
var entornos;
var entF;
var lenguaje;
var lengF;
var media;
var resultado;


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