// metto il menu in una variabile
let menu = document.getElementById("menu");
console.log(menu); //controllo di aver preso l'elemento giusto

//creo la variabile per alternare i comandi
let a = 0;

//creo la funzione che fa comparire e scomparire il menu
function appariMenu() {
    // creo if per alternare i comandi
    if(a == 0) {
        // comando che fa comparire il menu
        menu.style.display = "block";
        a = 1;
    }
    else if(a == 1) {
        // comando che fa riscomparire il menu
        menu.style.display = "none";
        a = 0;
    }
}

