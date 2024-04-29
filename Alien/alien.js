var posAlienX ;
    var posAlienY ;

function initAlien() {
    posAlienX = 0 ;
    posAlienY = 0 ;
    parcoursGrille();
}

function deplaceAlien(x, y) {
    // Supprimer l'alien de sa position actuelle
    var celluleActuelle = document.getElementById('contenu').querySelector('table').rows[posAlienY].cells[posAlienX];
    celluleActuelle.innerHTML = '';

    // Mettre à jour les nouvelles coordonnées de l'alien
    posAlienX = x;
    posAlienY = y;

    // Afficher l'alien à la nouvelle position sur le plateau
    var celluleNouvelle = document.getElementById('contenu').querySelector('table').rows[y].cells[x];
    var imageAlien = document.createElement('img');
    imageAlien.src = 'Alien/alien.png'; // Chemin vers l'image de l'alien
    celluleNouvelle.appendChild(imageAlien);

    // Appeler récursivement la fonction pour continuer le déplacement de l'alien
    setTimeout(function(){
        deplaceAlien(x, y);
    }, 500); // Appel de la fonction deplaceAlien avec un délai de 500 millisecondes pour donner l'impression de mouvement
}


// Fonction pour faire parcourir la grille par l'alien
function parcoursGrille() {
    var direction = 'droite'; // Initialiser la direction du déplacement de l'alien

    // Définir une fonction pour déplacer l'alien de gauche à droite
    function deplacementGaucheDroite() {
        // Effacer l'alien de sa position actuelle
        deplaceAlien(posAlienX, posAlienY);

        // Mettre à jour la position de l'alien en fonction de la direction
        if (direction === 'droite') {
            posAlienX++; // Déplacer l'alien vers la droite
        } else if (direction === 'gauche') {
            posAlienX--; // Déplacer l'alien vers la gauche
        }

        // Vérifier si l'alien atteint le bord de la grille
        if (posAlienX === largeur - 1) { // Si l'alien atteint le bord droit de la grille
            direction = 'gauche'; // Changer la direction du déplacement vers la gauche
        } else if (posAlienX === 0) { // Si l'alien atteint le bord gauche de la grille
            direction = 'droite'; // Changer la direction du déplacement vers la droite
        }

        // Afficher l'alien à sa nouvelle position
        deplaceAlien(posAlienX, posAlienY);

        // Appeler récursivement la fonction pour continuer le déplacement de l'alien
        setTimeout(deplacementGaucheDroite, 500);
    }

    // Déplacer l'alien de gauche à droite pour la première fois
    deplacementGaucheDroite();
}