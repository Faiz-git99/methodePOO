// la classe est une nouvelle façon de créer des objets
// la classe en JS est comme l'objet avec des propriétés et des méthodes. on ajoute juste la fonct° constructeur d'objet 
// on utilise grâce au mot clé "class" suivi du nom de la classe
class Document {
// On va introduire la fonction constructeur d'objet grâce au mot clé "constructor"
// constructor = propriété
constructor(titre, nombrePage, auteur){
    this.titre = titre;
    this.nombrePage = nombrePage;
    this.auteur = auteur;
};
// méthode description de la calsse Document
description(){
    console.log("Le titre du document est :", this.titre);
    console.log("L'auteur est", this.auteur);
    console.log("Le document contient", this.nombrePage, "pages");
};
};

// documents créés grâce au modèle de construction class
// utilisation de constructeur d'objet avec l'outil "class"
// premier objet concessionné avec "class"
let documentHTML = new Document("Introduction au HTML", 25, "NOURDINE Combo");
// accéder au fonct° constructor et la méthode description
console.log(documentHTML);
documentHTML.description();

// deuxième objet concessionné avec "class"
let documentCSS = new Document("Comment embellir une page en CSS ?", 12, "MOUSSA Djanfar");
// accéder au fonct° constructor et la méthode description
console.log(documentCSS);
documentCSS.description();

// troisième objet concessionné avec "class"
let documentJavaScript = new Document("Introduction au JavaScript (JS)", 50, "M. Nkoukoud");
// accéder au fonct° constructor et la méthode description
console.log(documentJavaScript);
documentJavaScript.description();

// quatrième objet concessionné avec "class"
let documentNodejs = new Document("Comment installer le serveur ?", 5, "CHRISTOPHE Colomb");
// accéder au fonct° constructor et la méthode description
console.log(documentNodejs);
documentNodejs.description();

// cinquième objet concessionné avec "class"
let documentMySQL = new Document("Apprendre MySQL", 65, "ALBERT Einstein");
// accéder au fonct° constructor et la méthode description
console.log(documentMySQL);
documentMySQL.description();