document.getElementById('bouton').onclick = calculer;
function calculer() {
    var age = document.getElementById('age').value;
    var result;

    if (age >= 18) {
        result=('Vous êtes majeur !');
    } 
    else if (age > 120) {
        result=('ça sent le sapin !');
    }
    else if (age < 0) {
        result=('tu ments !');
    }
    else {
        result =('Vous êtes mineur !')
    }
    window.alert(result);
}