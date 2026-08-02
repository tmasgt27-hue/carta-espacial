// Cambiar escenas

function mostrarEscena(id) {

    const escenas = document.querySelectorAll(".escena");

    escenas.forEach(escena => {

        escena.classList.remove("activa");

    });


    document.getElementById(id).classList.add("activa");

}



// Inicio de la historia

function comenzar() {

    const musica = document.getElementById("musica");

    if (musica) {

        musica.play();

    }


    mostrarEscena("carta");

}



// Abrir carta

function abrirCarta() {

    mostrarEscena("astronauta");

}



// Mostrar tarjeta

function mostrarTarjeta() {

    mostrarEscena("tarjeta");

}



// Abrir mensaje

function leerMensaje() {

    mostrarEscena("mensaje");


    escribirTexto();

}





// Escritura de la carta

function escribirTexto() {


    const texto = `

Incluso en un universo enorme,
lleno de estrellas y caminos desconocidos,
existen personas que hacen que todo parezca
tener un poco más de sentido.

Y entre tantos lugares que podría conocer,
me alegra haber encontrado un lugar especial:
estar contigo.

`;


    let i = 0;

    const elemento = document.getElementById("texto");


    elemento.innerHTML = "";


    function escribir() {


        if (i < texto.length) {


            elemento.innerHTML += texto.charAt(i);

            i++;


            setTimeout(escribir, 60);


        }


    }


    escribir();

}





// Tickets

const tickets = [

{
titulo:"CAMINA CONMIGO",
texto:"Cuando digo que quiero caminar contigo, no hablo solo de compartir un camino. Hablo de construir sueños, de reír en los días buenos y de quedarnos cuando las cosas no sean tan fáciles."
},


{
titulo:"AUNQUE ESTÉS LEJOS",
texto:"Aunque existan kilómetros entre nosotros, hay una parte de mí que siempre encuentra la forma de estar contigo."
},


{
titulo:"SIEMPRE TE ELEGIRÍA",
texto:"Entre millones de personas y caminos diferentes, volvería a encontrarte y volvería a elegirte."
},


{
titulo:"NUESTRO UNIVERSO",
texto:"Tal vez el universo sea enorme, pero encontrarte a ti hizo que mi pequeño mundo se sintiera completo."
}


];



function sacarTicket(){


    const ticket = tickets[
        Math.floor(Math.random()*tickets.length)
    ];


    document.getElementById("ticket").innerHTML = `

    <h3>${ticket.titulo}</h3>

    <p>${ticket.texto}</p>

    `;


}



// Reiniciar

function reiniciar(){

    mostrarEscena("inicio");

}
