// // Exemple simple pour défiler le carousel automatiquement
// document.querySelectorAll('.carousel').forEach(carousel => {
//     let scrollAmount = 0;
//     setInterval(() => {
//         carousel.scrollBy({ left: 200, behavior: 'smooth' });
//         scrollAmount += 200;
//         if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
//             carousel.scrollTo({ left: 0, behavior: 'smooth' });
//             scrollAmount = 0;
//         }
//     }, 3000);
// });

// const dots = document.querySelectorAll(".dot");
// const cards = document.querySelectorAll(".testimonial-card");
// // const carousel = document.getElementById("carousel");
// let currentIndex = 0;

// pour beneficiaire
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('#beneficiaires-carousel .carousel-container');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!carousel || !prevBtn || !nextBtn) {
    console.error('Carousel ou boutons introuvables.');
    return;
  }

  // calcul de la largeur d’une carte + l’espace entre elles
  const style = getComputedStyle(carousel);
  const gap = parseInt(style.gap) || 20;

  function getScrollAmount() {
    const firstCard = carousel.querySelector('.card');
    return firstCard ? (firstCard.offsetWidth + gap) : 250;
  }

  let scrollAmount = getScrollAmount();
  window.addEventListener('resize', () => {
    scrollAmount = getScrollAmount();
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".slider .cards");
  const dots = document.querySelectorAll(".slider .dot");
  let currentIndex = 0;
  let interval;

  function showCard(index) {
    cards.forEach(c => c.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    cards[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
  }

  // Auto défilement
  function startAutoSlide() {
    interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % cards.length;
      showCard(nextIndex);
    }, 3000); // change toutes les 3s
  }

  // Clic sur les points
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showCard(index);
      clearInterval(interval); // stop auto quand clic
      startAutoSlide(); // redémarre après
    });
  });

  // Initialisation
  showCard(0);
  startAutoSlide();
});


