/*
Cliccando su bart, ci chiede quanti clienti ha la classe. Ci chiede i nomi e poi li scrive alla lavagna
*/

// Recupero gli elementi dal DOM
const listElement = document.getElementById('text-container');
const bart = document.getElementById('bart');

// In ascolto su Bart
bart.addEventListener('click', function(){

    // Chiedo all'utente i componenti della classe
	const components = parseInt(prompt('Da quanti componenti è formata la classe?'));
    console.log(components);

});