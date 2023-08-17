/*
Cliccando su bart, ci chiede quanti clienti ha la classe. Ci chiede i nomi e poi li scrive alla lavagna
*/

// Recupero gli elementi dal DOM
const listElement = document.getElementById('text-container');
const bart = document.getElementById('bart');

// In ascolto su Bart
bart.addEventListener('click', function(){

    // Chiedere quanti studenti ci sono
	const numberOfStudents = parseInt(prompt('Quanti studenti ci sono?', 5));

    // Validazione
	if (isNaN(numberOfStudents) || numberOfStudents < 1) {
		return; 
	}
});