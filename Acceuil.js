// Exemple simple pour défiler le carousel automatiquement
document.querySelectorAll('.carousel').forEach(carousel => {
    let scrollAmount = 0;
    setInterval(() => {
        carousel.scrollBy({ left: 200, behavior: 'smooth' });
        scrollAmount += 200;
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
            scrollAmount = 0;
        }
    }, 3000);
});
