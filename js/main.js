//Chiedo tramite prompt l'eta dell'utente
var eta = prompt("Salve, per acquistare il biglietto indichi la sua età");
//console.log(eta);
//Chiedo tramite prompt i km all'utente
var km = prompt("Salve, per acquistare il biglietto indichi i chilometri da percorrere");
//console.log(km);
//salvo in variabile il costo chilometrico
var costoKm = 0.21;
//calcolo base per il costo del biglietto
var totaleBiglietto = km * costoKm;
console.log("totale biglietto non scontato: " +totaleBiglietto);
//inserisco la condizione
if(eta < 18) {
  //creo variabile che contiene il risultato dello sconto del 20%
  var scontoMinorenni = totaleBiglietto * 20/100;
  console.log("valore sconto: " + scontoMinorenni);
  //creo una variabile che contiene il totale biglietto - lo sconto calcolato in precedenza
  var totaleBigliettoScontato = totaleBiglietto - scontoMinorenni;
  console.log("costo totale con sconto: " +totaleBigliettoScontato);
}
