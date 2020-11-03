document.getElementById('bouton').onclick = afficher;
function afficher(){
    
var name = document.getElementById("name").value;
var age = document.getElementById("age").value;
var city = document.getElementById("city").value;

alert('Bonjour tu t\'appelles '+name+' \n tu as '+age+' ans \n tu habites '+city);
}