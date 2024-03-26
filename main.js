var botonc1 = document.getElementById('botonc1');
var botonc2 = document.getElementById('botonc2');
var botonc3 = document.getElementById('botonc3');
var botonj1 = document.getElementById('botonj1');
var botonj2 = document.getElementById('botonj2');
var botonj3 = document.getElementById('botonj3');
var botonp1 = document.getElementById('botonp1');
var botonp2 = document.getElementById('botonp2');
var botond1 = document.getElementById('botond1');
var botond2 = document.getElementById('botond2');
var barraDePersonaje = document.getElementById('contenido');
var barraDeComida = document.getElementById('contenidoComida');
var barraDeJugar = document.getElementById('contenidoJuego');
var barraDePelea = document.getElementById('contenidoPelea');
var barraDeDormir = document.getElementById('contenidoDormir');
var pComida = document.getElementById('pComida');
var pJuego = document.getElementById('pJuego');
var pDormir = document.getElementById('pDormir');
var pPelea = document.getElementById('pPelea');
var pPersonaje = document.getElementById('pPersonaje');
var dialogo = document.getElementById('dialogo');
var comida = document.getElementById('comida');
var fight = document.getElementById('fight');
var dormir = document.getElementById('dormir');
var juego = document.getElementById('jugar');
var estado;
var tamaños = document.documentElement.style;
var valorPersonaje = 100;
var valorComida = 100;
var valorJugar = 100;
var valorPelea = 100;
var valorDormir = 100;
function restarValor() {
    if (valorComida >= 100) {
        valorComida = 100;
    }
    if (valorPersonaje >= 100) {
        valorPersonaje = 100;
    }
    if (valorPelea >= 100) {
        valorPelea = 100;
    }
    if (valorDormir >= 100) {
        valorDormir = 100;
    }
    if (valorJugar >= 100) {
        valorJugar = 100;
    }
    if (valorComida <= 0) {
        valorComida = 0;
    }
    if (valorPersonaje <= 0) {
        valorPersonaje = 0;
    }
    if (valorPelea <= 0) {
        valorPelea = 0;
    }
    if (valorDormir <= 0) {
        valorDormir = 0;
    }
    if (valorJugar <= 0) {
        valorJugar = 0;
    }
    if (valorPersonaje < 30 && valorPersonaje >= 0) {
        estado = 'debil';
        dialogo.textContent = '😔';
        barraDePersonaje.style.backgroundColor = 'chocolate';
        pPersonaje.style.color = 'red';
    }
    else {
        dialogo.textContent = '😁';
        estado = 'contento';
        barraDePersonaje.style.backgroundColor = 'green';
        pPersonaje.style.color = 'black';
    }
    if (valorPelea < 30 && valorPelea >= 0) {
        estado = 'inquieto';
        dialogo.textContent = '🫨';
        barraDePelea.style.backgroundColor = 'chocolate';
        pPelea.style.color = 'red';
    }
    else {
        barraDePelea.style.backgroundColor = 'green';
        pPelea.style.color = 'black';
    }
    if (valorDormir < 30 && valorDormir >= 0) {
        estado = 'cansado';
        dialogo.textContent = '🥱';
        barraDeDormir.style.backgroundColor = 'chocolate';
        pDormir.style.color = 'red';
    }
    else {
        barraDeDormir.style.backgroundColor = 'green';
        pDormir.style.color = 'black';
    }
    if (valorJugar < 30 && valorJugar >= 0) {
        dialogo.textContent = '😑';
        estado = 'aburrido';
        barraDeJugar.style.backgroundColor = 'chocolate';
        pJuego.style.color = 'red';
    }
    else {
        barraDeJugar.style.backgroundColor = 'green';
        pJuego.style.color = 'black';
    }
    if (valorComida < 30 && valorComida > 0) {
        dialogo.textContent = '😵‍💫';
        estado = 'hambriento';
        barraDeComida.style.backgroundColor = 'chocolate';
        pComida.style.color = 'red';
    }
    else {
        barraDeComida.style.backgroundColor = 'green';
        pComida.style.color = 'black';
    }
    if (valorPersonaje == 0) {
        alert("HAS MUERTO");
    }
    if (valorPersonaje != 0) {
        setTimeout(restarValor, 1000);
    }
    valorPelea--;
    valorDormir--;
    valorJugar--;
    valorPersonaje--;
    valorComida--;
    barraDeComida.style.width = valorComida + '%';
    barraDePersonaje.style.width = valorPersonaje + '%';
    barraDeDormir.style.width = valorDormir + '%';
    barraDePelea.style.width = valorPelea + '%';
    barraDeJugar.style.width = valorJugar + '%';
    pComida.textContent = valorComida + '%';
    pJuego.textContent = valorJugar + '%';
    pDormir.textContent = valorDormir + '%';
    pPelea.textContent = valorPelea + '%';
    pPersonaje.textContent = valorPersonaje + '%';
}
restarValor();
function cambiarImagen(valor) {
    valor.style.backgroundImage = "none";
}
function llenarBarraComida() {
    valorComida += 25;
    valorPersonaje = valorPersonaje + 25;
    comida.style.backgroundImage = "url('https://areajugones.sport.es/wp-content/uploads/2020/11/Poke%CC%81mon-GO-Cubone-1080x609.jpg')";
    comida.style.backgroundSize = "cover";
    setTimeout(function () { return cambiarImagen(comida); }, 1000);
}
function llenarBarraPelea() {
    valorPelea += 25;
    valorPersonaje = valorPersonaje + 25;
    fight.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4349c16f-5e4f-4957-b471-430a94a5f3c9/d197j04-4d80b9dc-9e20-4be5-b94c-c57637873b6c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi80MzQ5YzE2Zi01ZTRmLTQ5NTctYjQ3MS00MzBhOTRhNWYzYzkvZDE5N2owNC00ZDgwYjlkYy05ZTIwLTRiZTUtYjk0Yy1jNTc2Mzc4NzNiNmMuanBnIn1dXX0.FmlsQp7w8781oH-hLUWZsFlkASF7d5plpEi31QsAbeg')";
    fight.style.backgroundSize = "cover";
    setTimeout(function () { return cambiarImagen(fight); }, 1000);
}
function llenarBarraJuego() {
    valorJugar += 25;
    valorPersonaje = valorPersonaje + 25;
    juego.style.backgroundImage = "url('https://pokecompany.com/wp-content/uploads/2020/03/PM15-84-1024x576.jpg')";
    juego.style.backgroundSize = "cover";
    setTimeout(function () { return cambiarImagen(juego); }, 1000);
}
function llenarBarraDormir() {
    valorDormir += 25;
    valorPersonaje = valorPersonaje + 25;
    dormir.style.backgroundImage = "url('https://img.game8.co/3738532/140e30a54714bf876193089a37d34865.png/show')";
    dormir.style.backgroundSize = "cover";
    setTimeout(function () { return cambiarImagen(dormir); }, 1000);
}
botonc1.addEventListener('click', llenarBarraComida);
botonc2.addEventListener('click', llenarBarraComida);
botonc3.addEventListener('click', llenarBarraComida);
botonj1.addEventListener('click', llenarBarraJuego);
botonj2.addEventListener('click', llenarBarraJuego);
botonj3.addEventListener('click', llenarBarraJuego);
botonp1.addEventListener('click', llenarBarraPelea);
botonp2.addEventListener('click', llenarBarraPelea);
botond1.addEventListener('click', llenarBarraDormir);
botond2.addEventListener('click', llenarBarraDormir);
