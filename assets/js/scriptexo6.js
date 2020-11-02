function calculer(){
    var point = document.getElementById("pointure").value;
    var year = document.getElementById("birthdate").value;

    var pointx2 = point * 2;
var pointx2Plus5 = pointx2 + 5;
var pointx2Plus50Fois50 = pointx2Plus5 * 50;
var pointx2Plus50Fois50MoinsYear = pointx2Plus50Fois50 - year;
var pointx2Plus50Fois50MoinsYearPlus = pointx2Plus50Fois50MoinsYear + 1769;

alert(pointx2Plus50Fois50MoinsYearPlus);
}