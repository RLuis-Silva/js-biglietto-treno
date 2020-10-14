// console.log("js funziona");

var utenteEta, utenteKm, prezzoTotale, prezzoBiglietto;
var sconto20, sconto40;

utenteEta = parseInt(prompt("Inserire età del passeggero") );
// console.log(utenteEta);

utenteKm = parseInt(prompt("Inserire Km") );
// console.log(utenteKm + "km");


if(isNaN(utenteEta)){
  alert("Errore, hai inserito l' età  passeggero non valido. ");
}
if(isNaN(utenteKm)){
  alert("Errore, hai inserito i Km non validi. ");
}

document.getElementById('eta').innerHTML = "Età passegero: " + utenteEta + " anni";
document.getElementById('km').innerHTML = "Km passegero: " + utenteKm + " Km";

prezzoTotale = utenteKm * 0.21;
sconto20 = (prezzoTotale / 100) * 20;
sconto40 = (prezzoTotale / 100) * 40;

if(utenteEta < 18) {
  prezzoBiglietto = prezzoTotale - sconto20;
  document.getElementById('prezzo').innerHTML = "Prezzo biglietto (sconto 20% minorenne): " + prezzoBiglietto.toFixed(2) + " euro";

} else if(utenteEta >= 65) {
  prezzoBiglietto = prezzoTotale - sconto40;
  /*non funziona*/
  document.getElementById('prezzo').innerHTML = "Prezzo biglietto (sconto 40% over 65): " + prezzoBiglietto.toFixed(2) + " euro";

} else {
  prezzoTotale;
  document.getElementById('prezzo').innerHTML = "Prezzo biglietto: " + prezzoTotale.toFixed(2) + " euro";
}

document.getElementById('nome').innerHTML = "Nome e Cognome passeggero: Ragnar Lothbrok";
document.getElementById('posto').innerHTML = "Posto: AD123 1° classe";
// console.log("prezzo Biglietto", prezzoBiglietto.toFixed(2) + " euro");
