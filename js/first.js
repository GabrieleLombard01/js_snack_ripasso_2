// Recupero gli elementi dal DOM
const listElement = document.getElementById('text-container');
const bart = document.getElementById('bart');

// In ascolto su Bart
bart.addEventListener('click', function(){

    // Chiedo all'utente la frase da scrivere
	const phrase = prompt('Cosa vuoi che scriva?').trim();
    console.log(phrase);

    // Chiedo all'utente quante volte scrivere
	const times = parseInt(promt('Quante volte? '));
    console.log(times);

});