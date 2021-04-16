// REFERENCES

var prezzoContainer = document.getElementById('price');
var bottone = document.getElementById('button');
var nomePanino = document.getElementById('name');



// IMPOSTAZIONE

var prezzoDeafault = 5;
scriviPrezzo(prezzoDeafault, prezzoContainer)


// EVENTI

bottone.addEventListener('click', function(){
console.log(nomePanino.value.lenght)
if(nomePanino.value.lenght === 0){
  alert("Inserisci il nome del panino");
}
})


// FUNZIONI

function scriviPrezzo( valore, target){
  target.innerHTML = valore.toFixed(2);
}