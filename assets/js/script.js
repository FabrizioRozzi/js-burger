var nomeHamb = document.getElementById("name");
var calculated_btn = document.getElementById("button");
var ingredienti = document.getElementsByClassName("ingredient-checkbox");


var prezzoBase = 5;
document.getElementById("price").innerHTML = prezzoBase.toFixed(2);

calculated_btn.addEventListener('click' , function(){
  if(nomeHamb === NaN){
    alert("Devi inserire un nome all'hamburger")
  }else {
    // Se abbiamo inserito il nome mi creo una variabile che mi somma il prezzo di eventuali condimenti.
    var prezzoIngredienti = 0;
    for(i = 0; i < ingredienti.length; i++){
      // Creo una variabile dove salvo l'ingrediente che sta ciclando cosi dopo posso verificare se é stato selezionato.
      var ingredienteCiclo = ingredienti[i];
      if(ingredienti.checked === true){
        prezzoIngredienti = prezzoIngredienti + (parseInt(ingrediente.value));
      }
    }
  }
})