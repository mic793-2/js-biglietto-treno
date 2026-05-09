const km = Number(prompt("Quanti km devi percorrere?"));//Number() converte la stringa in numero, altrimenti sarebbe una stringa e non potrei fare i calcoli
const age = Number(prompt("Quanti anni hai?"));

const priceKm = 0.21;
let priceTicket = km * priceKm;

if(age < 18){
    priceTicket = priceKm *0.8;
}else if(age > 65){
    priceTicket = priceKm *0.6;
}

console.log("Il prezzo del biglietto è: " + priceTicket.toFixed(2) + "€");

alert("Il prezzo del biglietto è: " + priceTicket.toFixed(2) + "€");