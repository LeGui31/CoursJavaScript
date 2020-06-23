function exercice1() {
    var i = 'le contenu i';
    document.write('<table border="1" >');
    document.write('<tr >');
    document.write('<td>');
    document.writeln(45);
    document.write('</td>');
    document.write('<td>');
    document.writeln("Bonjour comment ça va ? ");
    document.write('</td>');
    document.write('<td>');
    document.writeln(i);
    document.write('</td>');
    document.write('<td>');
    document.writeln(Math.PI);
    document.write('</td>');
    document.write('<td>');
    document.writeln(parseInt(Math.random() * 100));
    document.write('</td>');
    document.write('</tr>');
    document.write('</table>');
}

function drawSquare() {
    for (var i = 0; i < 11; i++) {
        for (var j = 0; j < 21; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}

function whileHundred() {
    var debut = new Date();
    var i = 0;
    while (i < 101) {
        i++;
    }
    var fin = new Date();
    tempsMs = fin.getTime() - debut.getTime();
    alert("Le script a mis " + tempsMs + " secondes.");
}

function forHundred() {
    var debut = new Date();
    for (var i = 0; i < 101; i++) {

    }
    var fin = new Date();
    tempsMs = fin.getTime() - debut.getTime();
    alert("Le script a mis " + tempsMs + " secondes.");
}

function compareFunction(fonction) {
    alert(fonction);
}

function createTableExercice2() {
    var table;
    return table = [2, 4, 8, 6];
}

function somme() {
    var table = createTableExercice2();
    var result = 0;
    for (var i = 0; i < table.length; i++) {
        result += table[i];
    }
    alert(result);
}

function produit() {
    var table = createTableExercice2();
    var result = 1;
    for (var i = 0; i < table.length; i++) {
        result *= table[i];
    }
    alert(result);
}

function exercice3() {
    var tab = [];
    for (var i = 0; i < 16; i++) {
        tab.push(i);
    }
    tab.forEach(element => {
        if (element % 2 == 0) {
            document.write("<h6>" + element + " est pair</h6>");
            console.log(element + ' est pair');
        } else {
            document.write("<h6>" + element + " est impair</h6>");
            console.log(element + ' est impair');
        }
    });
}

function createEleve(name, mark){
    var Eleve = {
        name :name,
        mark: mark,
    };
    return Eleve;
}

function exercice4() {  
    var eleve1 = createEleve("David", 80);
    var eleve2 = createEleve("Vinoth", 77);
    var eleve3 = createEleve("Divya", 88);
    var eleve4 = createEleve("Ishitha", 95);
    var eleve5 = createEleve("Thomas", 68);

    document.write('<table border="1" cellspacing="1">');
    document.write('<th>', "Student Name", '<th>', "Marks");
    document.write('<tr>', '<td>', eleve1.name, '<td>', eleve1.mark);
    document.write('<tr>', '<td>', eleve2.name, '<td>', eleve2.mark);
    document.write('<tr>', '<td>', eleve3.name, '<td>', eleve3.mark);
    document.write('<tr>', '<td>', eleve4.name, '<td>', eleve4.mark);
    document.write('<tr>', '<td>', eleve5.name, '<td>', eleve5.mark);
    document.write('</table>');
    
    document.write('la moyenne de la classe est de :', moyenne(eleve1.mark, eleve2.mark,eleve3.mark,eleve4.mark,eleve5.mark));
    document.write('<br>la moyenne de la classe léttrée est de :', letterMean(moyenne(eleve1.mark, eleve2.mark,eleve3.mark,eleve4.mark,eleve5.mark)));
}


function moyenne(){
    result=0;
    for(var i=0; i<arguments.length;i++){
        result +=arguments[i];
        var mean = result/(arguments.length);
    }
    return mean;
}

function letterMean(moyenne){
    if(moyenne <60){
        return "F";
    }
    else if(moyenne>=60 && moyenne<70){
        return "D";
    }else if(moyenne>=70 && moyenne<80){
        return "C";
    }else if(moyenne>=80 && moyenne<90){
        return "B";
    }else{
        return "A";
    }

}

/*Exercice 5*/

var tabName = new Array();

function addName(){
    var nom = document.getElementById("addName").value;
    tabName.push(nom);
    console.log(tabName);
}

function tirageRandom(){
    if(tabName.length > 0){
        alert("le gagnant est :" +tabName[Math.floor(Math.random()*tabName.length)]);
        //tabName = new Array();
    }else{
        alert("Votre Tableau est vide, ajoutez des noms");
    }
}