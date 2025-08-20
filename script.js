// Récupérer tous les éléments du menu
const menuItems = document.querySelectorAll('header .menu a');

// Ajout d'un écouteur d'événements pour chaque élément
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Supprime la classe 'active' de tous les éléments
        menuItems.forEach(link => link.classList.remove('active'));
        
        // Ajoute la classe 'active' à l'élément cliqué
        this.classList.add('active');
    });
});

// Fonction Voir Plus
document.querySelector('.voir-plusBtn').addEventListener('click', () => {
    alert('Voir plus...');
});

// Fonction pour gérer l'envoi de message
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêcher le comportement par défaut du formulaire (rechargement de la page)

    // Récupérer les valeurs des champs du formulaire
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;

    // Afficher une alerte ou un message de confirmation 
    alert(`Message envoyé avec succès !\n\nNom: ${name}\nEmail: ${email}\nSujet: ${subject}\nMessage: ${message}`);

    // Optionnel : Vider les champs du formulaire après l'envoi
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#subject').value = '';
    document.querySelector('#message').value = '';
});

// Carrousel (Fonctions pour la navigation)
let currentIndex = 0;
const itemsToShow = 4; // Nombre de cartes à afficher
const totalItems = document.querySelectorAll('#beneficiaires .carousel-slide .card').length;
const itemWidth = document.querySelector('#beneficiaires .carousel-slide .card').offsetWidth + 10; // Largeur des cartes avec l'espacement

function moveCarousel(direction) {
    const slide = document.querySelector('#beneficiaires .carousel-slide');

    // Calcul du nouvel index
    currentIndex += direction;

    // S'assurer qu'on ne dépasse pas les limites
    if (currentIndex < 0) {
        currentIndex = 0; // Limiter à la première carte
    } else if (currentIndex > totalItems - itemsToShow) {
        currentIndex = totalItems - itemsToShow; // Limiter à la dernière position valide
    }

    // Déplacer le carrousel
    slide.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // Mettre à jour la visibilité des flèches
    updateChevronVisibility();
}

function updateChevronVisibility() {
    const leftChevron = document.querySelector('.carousel-nav.left');
    const rightChevron = document.querySelector('.carousel-nav.right');

    // Si on est à la première carte
    if (currentIndex === 0) {
        leftChevron.classList.add('hidden');
    } else {
        leftChevron.classList.remove('hidden');
    }

    // Si on est à la dernière carte possible
    if (currentIndex === totalItems - itemsToShow) {
        rightChevron.classList.add('hidden');
    } else {
        rightChevron.classList.remove('hidden');
    }
}
