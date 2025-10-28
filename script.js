/* il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65
il risultato dovrà essere un numero con due decimali dopo la virgola
potete stampare il risultato tramite un alert o in console

Bonus: scrivete il risultato in un elemento in pagina (es. un tag <div>) */

let pricePerKm = 0.21;
let km = 100;
let age = 22;
let price = km * pricePerKm;

let minor = (price * 20) / 100;
let over = (price * 40) / 100;

let message = "";

if (age < 18) {
    message = `Your price it's: ${(price - minor).toFixed(2)}€`;
} else if (age > 65) {
    message = `Your price it's: ${(price - over).toFixed(2)}€`;
} else {
    message = `Your price it's: ${price.toFixed(2)}€`;
}

document.getElementById("result").textContent = message;