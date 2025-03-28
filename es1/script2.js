let dipendenti = [];

let dipendente1 = {"cf ": "TLZFRC07L12L736X", "nome" : "Federico", "cognome" : "Toluzzo", "mansione" : "studente"};
let dipendente2 = {"cf ": "D4C73R", "nome" : "Victor", "cognome" : "Mereuta", "mansione" : "studente"};

function aggiungiDipendente(dipendenti, newDipendente){
    for (let dipendente of dipendenti){
        if(dipendente.cf == newDipendente.cf){
            return;
        }
    }
    dipendenti.push(newDipendente);
}

function rimuoviDipendente(dipendenti, cf){
    for (let i = 0; i < dipendenti.length; i++){
        if(dipendenti[i].cf == cf){
            dipendenti.splice(i, 1);
        }
    }
}

function modificaDipendente(dipendenti, newDipendente){
    for (let i = 0; i < dipendenti.length; i++){
        (i) => (dipendenti[i] = dipendenti[i].cf == newDipendente.cf ? newDipendente : dipendenti[i])
    }
}

aggiungiDipendente(dipendenti, dipendente1);
aggiungiDipendente(dipendente2);
console.log(dipendenti);
let dipendente3 = {"cf ": "TLZFRC07L12L736X", "nome" : "Federico", "cognome" : "Toluzzo", "mansione" : "professore"};
modificaDipendente(dipendenti, dipendente3);
console.log(dipendenti);
rimuoviDipendente(dipendenti, "D7C73R");
console.log(dipendenti);