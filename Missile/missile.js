var posMissileX ;
var posMissileY ;

// Fonction pour représenter un tir de missile
function pewPew() {
    // Initialiser les variables pour que le missile démarre sa course juste au-dessus de votre vaisseau
    posMissileX = posShipX; // La position en X du missile sera la même que celle du vaisseau
    posMissileY = posShipY - 1; // La position en Y du missile sera une case au-dessus de celle du vaisseau

    // Modifier le plateau pour afficher le missile à l'emplacement correspondant
    var celluleMissile = document.getElementById('contenu').querySelector('table').rows[posMissileY].cells[posMissileX]; // Sélectionner la cellule correspondant à la position du missile sur le plateau  
    var imageMissile = document.createElement('img'); // Créer un élément d'image pour représenter le missile
    imageMissile.src = 'Missile/Missile.png';  // Spécifier le chemin de l'image du missile
    celluleMissile.appendChild(imageMissile);  // Ajouter l'image du missile dans la cellule sélectionnée du plateau
    deplacementMissile(posMissileY, posMissileX); // Appel la fonction déplacementMissile avec la position du missile Y et X
}

function deplacementMissile(y, x) {
    // Supprimer l'image du missile de sa position actuelle
    var celluleActuelle = document.getElementById('contenu').querySelector('table').rows[y].cells[x];
    celluleActuelle.innerHTML = '';

    // Vérifier si le missile est en haut du plateau
    if (y > 0) { // Si le missile n'est pas déjà en haut du plateau
        // Mettre à jour les nouvelles coordonnées du missile pour le faire avancer d'une case vers le haut
        y--;

        // Sélectionner la nouvelle cellule où afficher le missile à sa nouvelle position sur le plateau
        var celluleNouvelle = document.getElementById('contenu').querySelector('table').rows[y].cells[x];
        
        // Créer un élément d'image pour représenter le missile
        var imageMissile = document.createElement('img');
        imageMissile.src = 'Missile/Missile.png'; // Chemin vers l'image du missile
        
        // Afficher l'image du missile dans la nouvelle cellule sur le plateau
        celluleNouvelle.appendChild(imageMissile);

        // Appeler récursivement la fonction deplacementMissile avec un délai de 200 millisecondes
        // Cela permet de donner l'impression de mouvement continu du missile vers le haut
        setTimeout(function(){
            deplacementMissile(y, x);
        }, 200);
    }
}