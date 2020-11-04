document.getElementById('bouton').onclick = calculer;
function calculer() {
    var age = document.getElementById('age').value;
    var result;

    if(age < 18 && age > 0)      // Condition pour âge compris entre 0 et 18 ans
    {
       alert('Vous n\'êtes pas majeur');
    }
  else if (age >= 18 && age < 125)   // Condition pour âge compris entre 18 et 125 ans        
    {
       alert('Vous êtes majeur');
    }
  else                        // Quand les conditions ne s'appliquent pas
    {
       alert('Tu es un menteur !!!!');
    }
 
}