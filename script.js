// Genera 5 numeri casuali
let numeriCasuali = [];
while (numeriCasuali.length < 5) {
    let numero = Math.floor(Math.random() * 100) + 1;

    // per verificare che non ci siano numeri doppioni
    if (!numeriCasuali.includes(numero)) {
        numeriCasuali.push(numero);
    }
}



// aggiungere i numericasuali nel DOM
document.getElementById("numeriCasuali").textContent = numeriCasuali.join(", ");





//# Sezione Funzioni --------------------------------------------------------------------
// Chiediamo all'utente di inserire i numeri dopo che sono scomparsi
function chiediNumeriUtente() {
    let numeriUtente = [];
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Inserisci uno dei numeri che hai visto:"));
        numeriUtente.push(numero);
    }
    verificaNumeri(numeriUtente);
}

// Verifica quanti e quali numeri sono stati indovinati
function verificaNumeri(numeriUtente) {
    let numeriIndovinati = numeriCasuali.filter(numero => numeriUtente.includes(numero));
    document.getElementById("risultato").textContent = 
        `Hai indovinato ${numeriIndovinati.length} numeri: ${numeriIndovinati.join(", ")}`;
}
