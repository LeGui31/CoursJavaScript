// function direBonjour() {
//     var nom = document.getElementById("nom").value;
//     alert("Bonjour " + nom);
// }

// var cliquer = document.getElementById("cliquer");
// cliquer.addEventListener("click", function () {
//     var nom = document.getElementById("nom").value;
//     alert("Bonjour " + nom);
// });

// var nom = document.getElementById("nom");
// nom.addEventListener("keypress", function (event) {
//     var charCode = event.charCode;
//     if (charCode < 97 || charCode > 122) {
//         event.preventDefault();
//         alert("Merci de tout ´ecrire en minuscule");
//     }
// });

function vert() {
    alert("vert");
    event.stopPropagation();
}
function jaune() {
    alert("jaune");
}
