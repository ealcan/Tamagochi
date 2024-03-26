const botonc1 = document.getElementById('botonc1');
const botonc2 = document.getElementById('botonc2');
const botonc3 = document.getElementById('botonc3');
const botonj1 = document.getElementById('botonj1');
const botonj2 = document.getElementById('botonj2');
const botonj3 = document.getElementById('botonj3');
const botonp1 = document.getElementById('botonp1');
const botonp2 = document.getElementById('botonp2');
const botond1 = document.getElementById('botond1');
const botond2 = document.getElementById('botond2');
let barraDePersonaje = document.getElementById('contenido');
let barraDeComida = document.getElementById('contenidoComida');
let barraDeJugar = document.getElementById('contenidoJuego');
let barraDePelea = document.getElementById('contenidoPelea');
let barraDeDormir = document.getElementById('contenidoDormir');
let pComida = document.getElementById('pComida');
let pJuego = document.getElementById('pJuego');
let pDormir = document.getElementById('pDormir');
let pPelea = document.getElementById('pPelea');
let pPersonaje = document.getElementById('pPersonaje');
let dialogo = document.getElementById('dialogo');
let comida = document.getElementById('comida');
let fight = document.getElementById('fight');
let dormir = document.getElementById('dormir');
let juego = document.getElementById('jugar');

let estado: string;
let tamaños = document.documentElement.style;
let valorPersonaje: number= 100;
let valorComida: number = 100;
let valorJugar: number= 100;
let valorPelea: number = 100;
let valorDormir: number= 100;


function restarValor(): void {
    if(valorComida >= 100){
        valorComida = 100;
    }
    if(valorPersonaje >= 100){
        valorPersonaje = 100;
    }
    if(valorPelea >= 100){
        valorPelea = 100;
    }
    if(valorDormir >= 100){
        valorDormir = 100;
    }
    if(valorJugar >= 100){
        valorJugar = 100;
    }
    if(valorComida <= 0){
        valorComida = 0;
    }
    if(valorPersonaje <= 0){
        valorPersonaje = 0;
    }
    if(valorPelea <= 0){
        valorPelea = 0;
    }
    if(valorDormir <= 0){
        valorDormir = 0;
    }
    if(valorJugar <= 0){
        valorJugar = 0;
    }

    if (valorPersonaje < 30 && valorPersonaje >= 0){
        estado = 'debil';
        dialogo.textContent= '😔';
        barraDePersonaje.style.backgroundColor ='chocolate';
        pPersonaje.style.color = 'red';
    }
    else{
        dialogo.textContent = '😁';
        estado = 'contento';
        barraDePersonaje.style.backgroundColor ='green';
        pPersonaje.style.color = 'black';
    }
    if (valorPelea < 30 && valorPelea >= 0){
        estado = 'inquieto';
        dialogo.textContent = '🫨';
        barraDePelea.style.backgroundColor ='chocolate';
        pPelea.style.color = 'red';
    }
    else{
        barraDePelea.style.backgroundColor ='green';
        pPelea.style.color = 'black';
    }
    if (valorDormir < 30 && valorDormir >= 0){
        estado = 'cansado';
        dialogo.textContent = '🥱';
        barraDeDormir.style.backgroundColor ='chocolate';
        pDormir.style.color = 'red';
    }
    else{
        barraDeDormir.style.backgroundColor ='green';
        pDormir.style.color = 'black';
    }
    if (valorJugar < 30 && valorJugar >= 0){
        dialogo.textContent = '😑';
        estado = 'aburrido';
        barraDeJugar.style.backgroundColor ='chocolate';
        pJuego.style.color = 'red';
    }
    else{
        barraDeJugar.style.backgroundColor ='green';
        pJuego.style.color = 'black';
    }
    if (valorComida < 30 && valorComida >0){
        dialogo.textContent = '😵‍💫';
        estado = 'hambriento';
        barraDeComida.style.backgroundColor ='chocolate';
        pComida.style.color = 'red';
    }
    else{
        barraDeComida.style.backgroundColor ='green';
        pComida.style.color = 'black';
    }
    if (valorPersonaje == 0){
        alert("HAS MUERTO");
    }
    if (valorPersonaje != 0){
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

function cambiarImagen(valor:any): void{
    valor.style.backgroundImage = "none";
}

function llenarBarraComida(): void{
        valorComida += 25;
        valorPersonaje = valorPersonaje+ 25;
        comida.style.backgroundImage= "url('https://areajugones.sport.es/wp-content/uploads/2020/11/Poke%CC%81mon-GO-Cubone-1080x609.jpg')";
        comida.style.backgroundSize = "cover";
        setTimeout(() => cambiarImagen(comida), 1000);
}
function llenarBarraPelea(): void{
    valorPelea += 25;
    valorPersonaje = valorPersonaje+ 25;
    fight.style.backgroundImage= "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4349c16f-5e4f-4957-b471-430a94a5f3c9/d197j04-4d80b9dc-9e20-4be5-b94c-c57637873b6c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi80MzQ5YzE2Zi01ZTRmLTQ5NTctYjQ3MS00MzBhOTRhNWYzYzkvZDE5N2owNC00ZDgwYjlkYy05ZTIwLTRiZTUtYjk0Yy1jNTc2Mzc4NzNiNmMuanBnIn1dXX0.FmlsQp7w8781oH-hLUWZsFlkASF7d5plpEi31QsAbeg')";
    fight.style.backgroundSize = "cover";
    setTimeout(() => cambiarImagen(fight), 1000);
}
function llenarBarraJuego(): void{
    valorJugar += 25;
    valorPersonaje = valorPersonaje+ 25;
    juego.style.backgroundImage= "url('https://pokecompany.com/wp-content/uploads/2020/03/PM15-84-1024x576.jpg')";
    juego.style.backgroundSize = "cover";
    setTimeout(() => cambiarImagen(juego), 1000);
}
function llenarBarraDormir(): void{
    valorDormir += 25;
    valorPersonaje = valorPersonaje+ 25;
    dormir.style.backgroundImage= "url('https://img.game8.co/3738532/140e30a54714bf876193089a37d34865.png/show')";
    dormir.style.backgroundSize = "cover";
    setTimeout(() => cambiarImagen(dormir), 1000);
}

botonc1.addEventListener('click',llenarBarraComida);
botonc2.addEventListener('click',llenarBarraComida);
botonc3.addEventListener('click',llenarBarraComida);
botonj1.addEventListener('click',llenarBarraJuego);
botonj2.addEventListener('click',llenarBarraJuego);
botonj3.addEventListener('click',llenarBarraJuego);
botonp1.addEventListener('click',llenarBarraPelea);
botonp2.addEventListener('click',llenarBarraPelea);
botond1.addEventListener('click',llenarBarraDormir);
botond2.addEventListener('click',llenarBarraDormir);
