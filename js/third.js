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

    // Logica
    const studentsList = document.createElement('ul'); 
	studentsList.classList.add('list-unstyle');

    // Ciclo
    for (let i = 1; i <= numberOfStudents; i++) {
		const name = prompt('Mi dai il nome dello studente numero ' + i).trim();
		const listItem = document.createElement('li');
		listItem.append(name);
		studentsList.appendChild(listItem);
	}

    // Stampo in pagina
    listElement.appendChild(studentsList);
});