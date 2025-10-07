function addition(){

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("resultat").value = c;



}
function soustraction(){

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("resultat").value = c;



}
function multiplication(){

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("resultat").value = c;



}

function division() {

    var a = (document.getElementById("t1").value);
    var b = (document.getElementById("t2").value);
   if(b==0) {
    document.getElementById("resultat").value = "Erreur";
} else {
    document.getElementById("resultat").value = a / b;
}
   

}

function parité()
{
	var x = document.getElementById("resultat").value
	if (x % 2 ==0){
    	document.getElementById("parité").value = " Nombre Pair "
	}
	else{
    	document.getElementById("parité").value = " Nombre Impair "
	}



}

function permuter(){

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    let temp = a 

    document.getElementById("t1").value=b;
    document.getElementById("t2").value = temp;
}
function reset() {


document.getElementById("t1").value="";
 document.getElementById("t2").value ="";
 document.getElementById("résultat").value="";
  document.getElementById("parité").value = "";

}