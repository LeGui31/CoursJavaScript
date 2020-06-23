/**Exercice 1 */
function deletePropertyRollno() {
    var student = {
        name: "David Rayy",
        class: "VI",
        rollno: 12
    };
    console.log(student);
    delete student.rollno;
    console.log(student);
}

/**Exercice 2 */
function displayRecette() {
    var recetteSocca = {
        nom: "socca",
        servi: 2,
        ingredients: ["Pois-Chiche", "Sel", "Poivre"]
    };
    console.log("nom: " + recetteSocca.nom);
    console.log("servies: " + recetteSocca.servi);
    console.log("ingredients: " + recetteSocca.ingredients);
}

/**Exercice 3 */
class Book {
    constructor(title, author, isRead) {
        this.titre = title;
        this.auteur = author;
        this.etat = isRead;
    }


}

function defineBooksState() {
    var book1 = new Book("Cyrano de Bergerac", "Edmond Rostand", false);
    var book2 = new Book("Les Fourberies de Scapin", "Molière", true);
    var book3 = new Book("Le Cid", "Pierre Corneille", true);
    var book4 = new Book("Les Chaises", "Eugène Ionesco", true);

    console.log(book1.titre);
    console.log(book1.auteur);
    console.log(book1.etat);

    console.log(book2.titre);
    console.log(book2.auteur);
    console.log(book2.etat);

    console.log(book3.titre);
    console.log(book3.auteur);
    console.log(book3.etat);

    console.log(book4.titre);
    console.log(book4.auteur);
    console.log(book4.etat);
}