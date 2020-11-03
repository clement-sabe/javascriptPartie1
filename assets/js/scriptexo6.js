function calculer(){
    var point = document.getElementById("pointure").value;
    var year = document.getElementById("birthdate").value;
    var result = (((((point*2)+5)*50)-year)+1769);

    alert('Résultat : ' + result)
    }

