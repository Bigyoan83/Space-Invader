var largeur = 9;
var hauteur = 5;
var plateau = [];


function initPlateau() {    // Définition de la fonction initPlateau
   var contenuDiv = document.getElementById("contenu"); // Récupération de l'élément HTML avec l'ID "contenu"
   console.log(contenuDiv);
   var tableauHTML = document.createElement("table");   // Création d'un élément de tableau HTML
   console.log(tableauHTML);

   for (var i = 0; i < hauteur; i++) { // Boucle pour créer les lignes du tableau en fonction de la hauteur
        var ligne = document.createElement("tr");   // Création d'une balise de ligne de tableau
        plateau[i] = [];
        for (var j = 0; j < largeur; j++) {    // Boucle pour créer les cellules de la ligne en fonction de la largeur
            var cellule = document.createElement("td"); // Création d'une balise de cellule de tableau
            console.log(cellule);   
            var img = document.createElement("img"); // Création d'une balise image pour contenir l'image "vide.png"
            img.src = "ship.png";   // Chemin de l'image ship.png
            cellule.appendChild(img);
            ligne.appendChild(cellule); // Récupère et intègre la variable créé cellule
            plateau[i][j] = img;
        }
        tableauHTML.appendChild(ligne);
   }
   contenuDiv.appendChild(tableauHTML);
}
window.addEventListener("load", initPlateau);