// REFERENCES

var prezzoContainer = document.getElementById('price');
var bottone = document.getElementById('button');
var nomePanino = document.getElementById('name');
var ingredienti = document.getElementsByClassName('ingredient-checkbox');
var totale = 0;


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
}else{
  var prezzoIngrediente = 0;
  for(i = 0; i < ingredienti.length; i++ ){
    var ingrediente = ingredienti[i];
    if(ingrediente.checked === false){
      
    }else{
     // console.log("sono qui")
      prezzoIngrediente = prezzoIngrediente + parseInt(ingrediente.value);
    }
  }

  totale = prezzoDeafault + prezzoIngrediente;
  //console.log(totale);
  // Richiamo la funzione per sovrascrivere il prezzo totale senza eventuali coupon.
  scriviPrezzo(totale, prezzoContainer);
  

}
});


// FUNZIONI

function scriviPrezzo( valore, target){
  target.innerHTML = valore.toFixed(2);
}