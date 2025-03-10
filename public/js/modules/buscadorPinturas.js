export function setupSearch() {
  const searchInput = document.getElementById("search-input");
  const cuadros = document.querySelectorAll(".trending-grid .col-md-4"); // Asegura que seleccionamos correctamente cada cuadro

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    cuadros.forEach((columna) => {
      const cuadro = columna.querySelector(".trending-content"); // Obtener el contenido del cuadro
      if (!cuadro) return; // Seguridad por si algún elemento no tiene contenido

      const artista = cuadro
        .querySelector(".user-title")
        .textContent.toLowerCase();
      const titulo = cuadro
        .querySelector(".user-position")
        .textContent.toLowerCase();

      if (artista.includes(searchTerm) || titulo.includes(searchTerm)) {
        columna.style.display = "block"; // Mostrar si coincide
      } else {
        columna.style.display = "none"; // Ocultar si no coincide
      }
    });
  });
}
