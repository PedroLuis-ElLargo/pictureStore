import { setupMenu } from "./modules/menu.js";
import { setupTheme } from "./modules/theme.js";
import { iniciarTemporizador } from "./modules/timer.js";

// Ejecutar funciones al cargar la página completamente
document.addEventListener("DOMContentLoaded", function () {
  setupMenu(); // Configurar menú
  setupTheme(); // Configurar tema
  iniciarTemporizador(7, 25, 46); // Iniciar temporizador
});
