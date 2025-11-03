/* il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65
il risultato dovrà essere un numero con due decimali dopo la virgola
potete stampare il risultato tramite un alert o in console

Bonus: scrivete il risultato in un elemento in pagina (es. un tag <div>) */

// Input:

const km = parseInt(prompt("Insert the distance to cover:"));
const age = parseInt(prompt("Insert you age:"));

// Fixed variables:

const pricePerKm = 0.21;
const price = km * pricePerKm;

// Discount calculation:

let minor = (price * 20) / 100;
let over = (price * 40) / 100;

// Message Output:

let message = "";

// Condition:

if (age < 18) {
    message = `Your price it's: ${(price - minor).toFixed(2)}€`;
} else if (age > 65) {
    message = `Your price it's: ${(price - over).toFixed(2)}€`;
} else {
    message = `Your price it's: ${price.toFixed(2)}€`;
}

document.getElementById("result").textContent = message;