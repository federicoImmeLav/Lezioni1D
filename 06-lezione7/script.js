// le funzioni sono composte da un comando e dalle ()
// comando che scrive nella console
console.log("ciao, js funziona");

// creiamo una variabile
var a = 0;

// creo una funzione
function cambioSfondo() {
    // scrivo cosa voglio che la funzione faccia
    if(a == 0) {
        // prendo l'elemento che si chiama sfondo e gli cambio il colore
        document.getElementById("sfondo").style.backgroundColor = "black";
        a = 1;
    }
    else if(a == 1) {
        document.getElementById("sfondo").style.backgroundColor = "white";
        a = 0;
    }
}

function quadrati() {
    if(a == 0) {
        document.getElementById("quadrato1").style.backgroundColor = "green";
        document.getElementById("quadrato2").style.backgroundColor = "red";
        a = 1;
    }
    else if(a == 1) {
        document.getElementById("quadrato1").style.backgroundColor = "red";
        document.getElementById("quadrato2").style.backgroundColor = "green";
        a = 0;
    }
}

