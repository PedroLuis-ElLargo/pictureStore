// Función para renderizar las cards favoritas
export function renderFavoritos() {
  const contenedorFavoritos = document.getElementById("contenedorFavoritos");
  if (!contenedorFavoritos) {
    console.error("No se encontró el contenedor 'contenedorFavoritos'.");
    return;
  }

  // Limpiar el contenido actual (si es necesario)
  contenedorFavoritos.innerHTML = "";

  // Obtener los favoritos del localStorage
  const favoritos = getFavoritosFromLocalStorage(); // Función para obtener los IDs de favoritos

  // Verifica que el array de favoritos no esté vacío
  if (favoritos.length === 0) {
    contenedorFavoritos.innerHTML = "<p>No tienes favoritos.</p>";
    return;
  }

  // Crear un fragmento de documento para mejorar el rendimiento
  const fragment = document.createDocumentFragment();

  // Renderiza las cards favoritas
  favoritos.forEach((cardId) => {
    const cardData = getCardDataById(cardId); // Obtener los datos de la card

    if (!cardData) {
      console.warn(`No se encontró la card con ID ${cardId}`);
      return;
    }

    const cardHTML = `
        <div class="col-md-6 mb-4" data-id="${cardId}">
          <div class="fire-bubble-art d-flex justify-content-between align-items-center">
            <img src="${cardData.imgSrc}" alt="${cardData.altText}" class="img-fluid fire-image fire-width" />
            <div class="fire-content fire-width">
              <h3 class="mb-0">${cardData.title}</h3>
              <div class="fire-time d-flex justify-content-between">
                <div class="current-bid">
                  <h4>Oferta actual</h4>
                  <span>${cardData.price}</span>
                </div>
                <div class="auction">
                  <h4>Tiempo de la venta</h4>
                  <span class="timer">${cardData.timer}</span>
                </div>
                <span class="middle-line"></span>
              </div>
              <span class="fire-user">
                <img src="${cardData.userImg}" alt="user-image" /> ${cardData.userName}
              </span>
              <div class="d-flex fire-links">
                <a href="#" class="heart flex-shrink-0" data-id="${cardId}">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="#" class="theme-btn">Comprar Producto</a>
              </div>
            </div>
          </div>
        </div>
      `;

    // Crear el elemento desde el HTML generado y añadirlo al fragmento
    const div = document.createElement("div");
    div.innerHTML = cardHTML;
    fragment.appendChild(div.firstChild);
  });

  // Finalmente, añadir el fragmento al contenedor
  contenedorFavoritos.appendChild(fragment);
}

// Función para obtener los datos de la card (simulada)
function getCardDataById(cardId) {
  // Ejemplo de datos, debes adaptarlos según cómo estés manejando los datos de las cards
  const cardsData = [
    {
      id: "1",
      imgSrc: "../img/cuadro1.jpg",
      altText: "fire-bubble-image",
      title: "Arte de burbujas de fuego",
      price: "$1500",
      timer: "07h:25m:46s",
      userImg: "../img/perfil2.jpg",
      userName: "Rose Ortega",
    },
    // Puedes agregar más cards aquí
  ];

  // Asegúrate de que los tipos coincidan, aquí estamos comparando Strings
  return cardsData.find((card) => card.id === String(cardId)); // Convertir cardId a string si es necesario
}

// Función para obtener los favoritos del localStorage
function getFavoritosFromLocalStorage() {
  const favoritos = localStorage.getItem("favoritos");
  return favoritos ? JSON.parse(favoritos) : [];
}
