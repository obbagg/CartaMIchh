function abrirCarta(){

let sobre = document.querySelector(".sobre");

sobre.classList.toggle("abierto");

mostrarPoema();

lanzarCorazones();

}

/* POEMA QUE APARECE */

let texto = `¿Por qué la distancia es tan perjudicante para ambos?

Me interesas.  
Aunque llevamos hablando pocos días,
me has enseñado más de lo que creía saber.

No quiero presionarte,
solo quiero conocerte.

Porque hay algo en ti
que me hace pensar que vales mucho más
de lo que el mundo suele ver.

Y aunque haya kilómetros entre nosotros,
cada día pienso en cómo
algún día podamos vernos.

Porque la distancia no es el enemigo.

El enemigo sería
que te aburras de mí.

Porque yo quiero ser un Señor Darcy
que camine hacia encontrarme contigo.

ser un Noah escribirte 365 cartas
hastas poder verte.

Un Manolo donde la distancia diga
que tengo que esperar para verte
y valga totalmente la pena.`;

let i = 0;

function mostrarPoema(){

let poema = document.getElementById("poema");

poema.innerHTML="";

i=0;

function escribir(){

if(i < texto.length){

poema.innerHTML += texto.charAt(i);

i++;

setTimeout(escribir,40);

}

}

escribir();

}

/* CORAZONES QUE SALEN DEL SOBRE */

setInterval(() => {

let corazon = document.createElement("div");

corazon.className = "corazon";

corazon.innerHTML = "❤";

corazon.style.left = Math.random()*100 + "vw";

corazon.style.animationDuration = (Math.random()*3+3)+"s";

document.querySelector(".corazones").appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},6000);

},400);

