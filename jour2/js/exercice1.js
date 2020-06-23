/*Exercice 1*/
function displayDate() {
    var date = new Date();
    var jour = getFrenchDay()
    var heure = date.getHours();
    var minute = date.getMinutes();
    var seconde = date.getSeconds();

    alert("Aujourd'hui, nous sommes " + jour + " et il est " + heure + "h" + minute + "m" + seconde + "s");
}

function getFrenchDay() {
    var date = new Date();
    var jour = date.getDay();

    switch (jour) {
        case 0:
            return "Dimanche";
        case 1:
            return "Lundi";
        case 2:
            return "Mardi";
        case 3:
            return "Mercredi";
        case 4:
            return "Jeudi";
        case 5:
            return "Vendredi";
        case 6:
            return "Samedi";
        default:
            return error.alert("error");
    }
}

/** Exercice 2 */
function displayMultiple(){
    for(var i=0; i<101; i++){
        if (i%3 == 0 && i%5==0){
            console.log(i +": FizzBuzz");
        }else if(i%3 == 0){
            console.log(i +": Fizz");
        }else if(i%5 ==0){
            console.log(i +": Buzz");
        }else if(i==0){

        }
    }
    alert("watch console");
}

/**Exercice 3 */
var table = [];
function writeTable(){
    var size = Math.floor((Math.random() *10)+3);
    document.write('<table border="1"><tr>')
    for(var i=0; i<size ;i++){
        var note = Math.floor(Math.random() * 20);
        table.push(note);
        document.write('<td>', note);
    }
    document.write('</tr></table><br>');
    document.write("La moyenne est de "+moyenne()+"</br>");
    document.write(moreThanTen() +" étudiants ont plus de la moyenne</br>");
    document.write("La meilleure note est " +getBestMark()+ "</br>");
    researchGrade();

}

function moreThanTen(){
    var numb = 0;
    for (var i=0; i<table.length; i++){
        if(table[i] >= 10){
            numb++;
        }
    }
    return numb;
}

function moyenne(){
    result=0;
    for(var i=0; i<table.length;i++){
        result +=table[i];
        var mean = result/(table.length);
    }
    return mean;
}

function getBestMark(){
    var numb = 0;
    for (var i=0; i<table.length; i++){
        if(table[i] > numb){
            numb = table[i];
        }
    }
    return numb;
}

function researchGrade(){
    var grade = Number(document.getElementById("searchGrade").value);
    var occurence = 0;
    for(var i=0; i<table.length;i++){
        if(table[i] == grade){
            occurence++;
        }
    }
    if(occurence == 0){
       alert("La note "+grade+ " n'apparait pas dans le tableau</br>");
    }else{
        alert("La note "+grade+ " apparait " +occurence+ " fois dans le tableau");
    }
}


