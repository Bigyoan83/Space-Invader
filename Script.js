var largeur = 9;
var hauteur = 5;
var plateau = [];


function initPlateau() {
   var contenuDiv = document.getElementById("contenu");
   var tableauHTML = document.createElement("table");

   for (var i = 0; i < hauteur; i++); {
        var ligne = document.createElement("tr");
        for (var j = 0; j < largeur; j++); {
            var cellule = document.createElement("td");
            console.log(cellule);
            // var img = document.createElement("img");
            // img.src = "ship.png";   // Chemin de l'image ship.png
            // cellule.append(img);
            ligne.appendChild(cellule);
        }
        tableauHTML.appendChild(ligne);
   }
   contenuDiv.appendChild(tableauHTML);
}
window.addEventListener("load", initPlateau);