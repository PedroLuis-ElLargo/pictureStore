import { setupMenu } from "./modules/menu.js";
import { setupTheme } from "./modules/theme.js";
import { iniciarTemporizadores } from "./modules/timer.js";
import { setupSearch } from "./modules/buscadorPinturas.js";
import { renderFavoritos } from "./modules/cardFavoritos.js";

document.addEventListener("DOMContentLoaded", () => {
  setupMenu();
  setupTheme();

  // Iniciar temporizador
  setTimeout(() => {
    iniciarTemporizadores(7, 25, 46); // Inicia el temporizador en todas las cards
  }, 100); // Se retrasa un poco para asegurarse de que el DOM cargue bien

  // Buscador para la sección de pinturas
  setupSearch(
    "#search-painting",
    ".picture-up-content .col-md-6",
    "h3",
    ".fire-user"
  );

  // funcion para las cards de favoritos
  renderFavoritos();
});
