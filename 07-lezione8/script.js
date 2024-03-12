// i testi tra virgolette o comunque i testi si chiamano stringhe
console.log("CIAO");

// per creare una variabile si usa let
let a;
console.log(a);
//posso assegnare dei valori alla mia variabile
a = 1;
console.log(a + a);
//funzione che prende l'elemento nel sito che ha id 
// quadrato
let quadrato = document.getElementById("quadrato");
console.log(quadrato);

// creo la funzione 
function cambiaColore() {
    // a chi + cosa + quale proprietà
    quadrato.style.backgroundColor = "green";
}

function tornaRosso() {
    quadrato.style.backgroundColor = "red";
}


let cerchio = document.getElementById("cerchio");
console.log(cerchio);
// creo la variabile da cui dipende il cerchio
let b = 0;

// alterno il funzionamento della funzione in base al valore di b
function cambiaCerchio() {
    if (b == 0) {
        console.log("b = 0");
        cerchio.style.backgroundColor = "purple";
        b = 1;
    } else if (b == 1) {
        console.log("b = 1");
        cerchio.style.backgroundColor = "blue";
        b = 0;
    }
}