// propriété de la voiture
let voiture = {
    couleur : "jaune",
    forme : "arrondie",
    taille : "petite",
// fonction est appelé méthode dans l'objet
    demarrer : function(){
        console.log("Vrrrrrrummmmm !!!!!");
    },
    avancer : function(){
        console.log("j'accelllllèèèèère !!!");
    },
    reculer : function() {
        console.log("On recccuuuuuuuule !!!!");
    }
};
// ajout d'un élément non-existant dans l'objet voiture
voiture.nombreRoue = 4;
// affiche le message 
console.log(voiture);
voiture.avancer();



// voiture (c, f, t) fonction cosntructeur d'objet voiture
function Voiture(c, f, t){
// propriété de chaque modèle d'objet voiture à construire
this.couleur = c;
this.forme = f;
this.taille = t;
// méthode de chaque modèle d'objet voiture à construire
this.demarrer = function() {
    console.log("vrrrrmmmmmmmmh !!!");
};
this.avancer = function(){
    console.log("j'acccccèèèèèèèèèèèèèlere !!!");
};
this.reculer = function(){
    console.log("On recuuuuuuuuuuule");
};
}; 


// EXERCICE 1 : Créez 5 voitures de différentes couleurs, tailles et formes.

// créer un nouvel objet voiture1
// on va utiliser le mot clé "new"
let voiture1 = new Voiture("rouge", "carré", "grande");
// accède à l'objet voiture1
console.log(voiture1);
voiture1.demarrer();

// objet voiture2
let voiture2 = new Voiture("bleue", "carré", "grande");
console.log(voiture2);
voiture2.avancer();

// objet voiture3
let voiture3 = new Voiture("orange", "carré", "petite");
console.log(voiture3);
voiture3.reculer();

// objet voiture4
let voiture4 = new Voiture("vert", "carré", "petite");
console.log(voiture4);
voiture4.demarrer();

// objet voiture5
let voiture5 = new Voiture("noir", "carré", "grande");
console.log(voiture5);
voiture5.avancer();

//  EXERCICE 2 : Créez 5 utilisateurs à partir d’un constructeur d’objets que vous aurez créé.

//utilise la fonction constructeur d'objet utilisateur
// propriété de chaque modèle
function utilisateur(n, p, d, v, a){
    this.nom = n;
    this.prenom = p;
    this.datedenaissance = d;
    this.villederesidence = v;
    this.age = a;
// méthode de chaque modèle
this.courrir = function(){
    console.log("La coursssssssseeeeeee !!!");
};
this.marcher = function(){
    console.log("Je maaarrrrrrche !!!");
};
this.sauter = function(){
    console.log("j'aime saaaaauuuter !!!");
};
this.lire = function(){
    console.log("la lecture est ma passsion");
};
this.ecrire = function(){
    console.log("Écrire est un art");
};
this.reciter = function(){
    console.log("il faut bien articuler quand on récite");
};
};

// Faire l'exercice après avoir créer constructeur d'objet utilisateur
// utilisateur 1 
let utilisateur1 = new utilisateur("MOUSSA", "Niakhaté", "12/02/2002", "Monaco", 23);
console.log(utilisateur1);
utilisateur1.courrir();

// Faire l'exercice après avoir créer l'objet utilisateur
// utilisateur 2 
let utilisateur2 = new utilisateur("ALEXANDER", "Isak", "02/07/2000", "Cannes", 25);
console.log(utilisateur2);
utilisateur2.marcher();

// Faire l'exercice après avoir créer l'objet utilisateur
// utilisateur 3 
let utilisateur3 = new utilisateur("LÉANDRO", "Trossard", "23/04/1997", "Londres", 28);
console.log(utilisateur3);
utilisateur3.sauter();

// Faire l'exercice après avoir créer l'objet utilisateur
// utilisateur 4 
let utilisateur4 = new utilisateur("DAVID", "Cooper", "05/09/1990", "South-Africa", 35);
console.log(utilisateur4);
utilisateur4.lire();

// Faire l'exercice après avoir créer l'objet utilisateur
// utilisateur 5 
let utilisateur5 = new utilisateur("PATRICK", "Habibora", "27/11/2005", "Havre", 20);
console.log(utilisateur5);
utilisateur5.ecrire();

// Faire l'exercice après avoir créer l'objet utilisateur
// utilisateur 6 
let utilisateur6 = new utilisateur("ZINÉDINE", "Zidane", "14/06/1985", "Aix-en-provence", 40);
console.log(utilisateur6);
utilisateur6.reciter();