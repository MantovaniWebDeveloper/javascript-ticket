//Chiedo tramite prompt l'eta dell'utente
var eta = prompt("Salve, per acquistare il biglietto indichi la sua età");
//console.log(eta);
//Chiedo tramite prompt i km all'utente
var km = prompt("Salve, per acquistare il biglietto indichi i chilometri da percorrere");
//console.log(km);
//salvo in variabile il costo chilometrico
var costokm = 0.21;
//calcolo base per il costo del biglietto
var totaleBiglietto = km * costokm;
console.log(totaleBiglietto);
