// REFERENCES

var prezzoContainer = document.getElementById('price');
var bottone = document.getElementById('button');
var nomePanino = document.getElementById('name');



// IMPOSTAZIONE

var prezzoDeafault = 5;
scriviPrezzo(prezzoDeafault, prezzoContainer)


// EVENTI

bottone.addEventListener('click', function(){
  // Elimino la possibilitá di inserire spazi vuoti con "trim()".
  var nomeInserito = nomePanino.value.trim();
  console.log(nomeInserito.length)
  // Eseguo un test sul nome del panino inserito dall'utente.
if(nomeInserito.length === 0){
  // Se non si inserisce il nome del panino esce l'alert.
  alert("Inserisci il nome del panino");
}
})


// FUNZIONI

function scriviPrezzo( valore, target){
  target.innerHTML = valore.toFixed(2);
}