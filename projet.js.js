// Quand on clique sur "Voir la liste", ça descend vers la section "Liste des Projets"
document.querySelector('.bouton').addEventListener('click', function() {
  document.querySelector('.text-wrapper-16').scrollIntoView({ 
    behavior: 'smooth' 
  });
});
// Tous les boutons "Voir la bénéficiaire"
const boutons = document.querySelectorAll('.contactez-nous');

boutons.forEach((btn) => {
  btn.addEventListener('click', () => {
    alert("Page profil bénéficiaire en construction...");
    // Tu peux aussi rediriger vers une page profil :
    // window.location.href = "beneficiaire.html";
  });
});
// Exemple simple de recherche dans les projets
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('click', () => {
  let recherche = prompt("Entrez le nom d’un projet ou bénéficiaire :");
  if (recherche) {
    alert("Résultats pour : " + recherche);
    // Ici tu peux ajouter une vraie fonction de recherche
  }
});
// Exemple pour mettre un effet actif sur le menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active')); // retire "active"
    item.classList.add('active'); // ajoute "active" sur le bon
  });
});