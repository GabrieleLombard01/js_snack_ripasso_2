// Recupero gli elementi dal DOM
const listElement = document.getElementById('text-container');
const bart = document.getElementById('bart');

// In ascolto su Bart
bart.addEventListener('click', function(){

    // Chiedo all'utente la frase da scrivere
	const phrase = prompt('Cosa vuoi che scriva?').trim();
    console.log(phrase);

    // Chiedo all'utente quante volte scrivere
	const times = parseInt(prompt('Quante volte? '));
    console.log(times);

    // Validazione
	if (!phrase || isNaN(times) || times < 1) {
		alert('Ciucciati il calzino!');
		return;
	}

    alert('Che pizza!');

    // Testo da scrivere
    let paragraph = '';

    for (let i = 0; i < times; i++) {
		paragraph += `<li>${phrase}</li>`;
	}

    // Stampo in pagina
    listElement.innerHTML = paragraph;
});