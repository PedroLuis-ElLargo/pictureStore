import { setupMenu } from "./modules/menu.js";
import { setupTheme } from "./modules/theme.js";
import { iniciarTemporizador } from "./modules/timer.js";
import { setupSearch } from "./modules/buscadorPinturas.js"; // 🔹 Importamos el buscador

document.addEventListener("DOMContentLoaded", () => {
  setupMenu();
  setupTheme();
  iniciarTemporizador(7, 25, 46);
  setupSearch();
});
