function loadMore() {
    const galleryGrid = document.querySelector('.gallery-grid');

    // Ajouter plus d'images à la galerie
    const newItems = [
        { src:"images/Rectangle 80.png" , alt:"Remises des ordinateurs", text: "Remises des ordinateurs" },
  
    ];

    newItems.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('gallery-item');
        newItem.innerHTML = `
            <img src="${item.src}" alt="${item.alt}">
            <p>${item.text}</p>
        `;
        galleryGrid.appendChild(newItem);
    });

    // Masquer le bouton après avoir chargé plus d'images
    document.getElementById('loadMore').style.display = 'none';
}
