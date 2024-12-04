/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = 2
let numero2 = 10

if (numero1 > numero2) {
  console.log ("numero1 maggiore")
}
else if (numero2 > numero1) {
  console.log ("numero2 maggiore")
}
  /* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let num3 = 5
if ( num3 > 5 || num3 < 5) {
   { console.log (num3 + "not equal")} 
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let divisore = 5
if (10 % divisore === 0) {
  console.log ("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let w = 2
let e = 6

if (w === 8) {
  console.log ("W uguale a 8")
}
else if (e === 8){
  console.log ("E uguale a 8")
}
else if (w + e === 8) {
  console.log("La somma di W+E è uguale a 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart1 ;
let spedizione = 4
let cart = 50

if (cart > 50){
  totalShoppingCart = cart
}
else if (cart < 50){ totalShoppingCart = cart + spedizione;
}
console.log("Aggiunto costo di spedizione")

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let percentuale = 20;
let totalShoppingCart =(percentuale / 100) * cart;
console.log(totalShoppingCart = "carrello scontato")
 if (totalShoppingCart < 50){
  console.log("Devi aggiungere 4,50 $ di spedizione")
 }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 13;
let b = 6;
let c = 9;

if (a < b) {}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let tazza = "oggetto";
{
  console.log(typeof tazza)
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = 9;
if (numero % 2 === 0) {
  console.log(numero + " è pari");
} else {
  console.log(numero + " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
  if (val < 5) {
      console.log("Meno di 10");
    } else if (val < 10) {
      console.log("Meno di 5");
    } 
      console.log("Uguale a 10 o maggiore");
    
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"

console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop {
  console.log
}

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let myArr = [];
console.log (myArr)

let .myArr = [0,1,2,3,4,5,6,7,8,9,10,]


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArr.splice (11,100)
console.log(myArr)
