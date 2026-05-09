const km = Number(prompt("Quanti km devi percorrere?"));//Number() converte la stringa in numero, altrimenti sarebbe una stringa e non potrei fare i calcoli
const age = Number(prompt("Quanti anni hai?"));

const priceKm = 0.21;
let priceTicket = km * priceKm;
let discountPrice = priceTicket;//inizializzo la variabile con il prezzo del biglietto, così se non ci sono sconti rimane invariato

if(age < 18){
    //discountPrice = priceTicket * 0.2;
    //priceTicket = priceTicket - discountPrice;
    discountPrice = priceTicket - (priceTicket * 0.2);//posso fare direttamente il calcolo senza creare una variabile per lo sconto
    
}else if(age > 65){
   // priceTicket = priceTicket *0.6;
    discountPrice = priceTicket - (priceTicket * 0.4);//posso fare direttamente il calcolo senza creare una variabile per lo sconto
}

console.log("Il prezzo del biglietto è: " + discountPrice.toFixed(2) + "€");//toFixed(2) serve per limitare il numero di decimali a 2, altrimenti potrebbe avere molti decimali e non sarebbe bello da vedere

alert("Il prezzo del biglietto è: " + discountPrice.toFixed(2) + "€");