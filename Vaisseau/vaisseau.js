// Déclaration des variables pour les coordonnées initiales du vaisseau
var posShipY = hauteur - 1; // Position verticale du vaisseau, initialement en bas
var posShipX = (largeur - 1) / 2; // Position horizontale du vaisseau, initialement au milieu

// Fonction pour lancer la partie et placer le vaisseau sur le plateau
function lancerPartie() {
    // Récupération de toutes les cellules du plateau
    var cellules = document.getElementsByTagName('td');
    // Calcul de l'index de la cellule où placer le vaisseau en fonction de ses coordonnées
    var index = posShipY * largeur + posShipX;
    // Remplacement du contenu de la cellule par l'image du vaisseau
    cellules[index].innerHTML = '<img src="Space Invader/Images/Vaisseau.png">';
    initAlien();
}

// Attachez le déclenchement de la fonction lancerPartie au clic sur le bouton "Jouer"
document.getElementById('bouton').addEventListener('click', lancerPartie);

// Fonction pour déplacer le vaisseau en fonction de la touche du clavier pressée
function deplacerVaisseau(event) {
    switch (event.code) {
        case "ArrowLeft":
            // Déplacer vers la gauche
            if (posShipX > 0) { // Vérifier si le déplacement est possible vers la gauche
                effaceShip();
                posShipX--;
                afficheShip();
            }
            break;
        case "ArrowRight":
            // Déplacer vers la droite
            if (posShipX < largeur - 1) { // Vérifier si le déplacement est possible vers la droite
                effaceShip();
                posShipX++;
                afficheShip();
            }
            break;
        case "ArrowUp":
            pewPew(); // Appeler la fonction pewPew lorsque la flèche vers le haut est pressée
            break;
    }
}
function effaceShip() { // Créer une fonction qui remplace 
    var cellules = document.getElementsByTagName('td');
    var index = posShipY * largeur + posShipX;
    cellules[index].innerHTML = '<img src="Case blanche.png">';
}

function afficheShip() {
    var cellules = document.getElementsByTagName('td');
    var index = posShipY * largeur + posShipX;
    cellules[index].innerHTML = '<img src="Vaisseau/Vaisseau.png">';
}

// Attacher la fonction deplacerVaisseau aux événements du clavier utilisateur
window.addEventListener("keydown", deplacerVaisseau);
