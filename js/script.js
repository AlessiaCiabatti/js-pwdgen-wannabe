//NOME 1
const nome = prompt('Inserisci nome');
console.log(nome);

//COGNOME 2
const cognome = prompt('Inserisci Cognome');
console.log(cognome);

//COLORE PREFERITO 3
const colore = prompt('Qual è il tuo colore preferito?');
console.log(colore);

//STAMPA RISULTATO 4
const numero = '24'
const datiCompleti = nome+cognome+colore+numero;
console.log(datiCompleti);

// document.getElementById('codice').innerHTML = datiCompleti;

document.getElementById('codice').innerHTML = `

<p>
  <strong class="verde">${datiCompleti}</strong>
</p>
`