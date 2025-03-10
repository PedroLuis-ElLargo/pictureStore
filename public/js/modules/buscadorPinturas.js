export function setupSearch(
  inputSelector,
  itemSelector,
  titleSelector,
  artistSelector
) {
  const searchInput = document.querySelector(inputSelector);
  const cuadros = document.querySelectorAll(itemSelector);

  if (!searchInput || cuadros.length === 0) return; // Si no encuentra el input o los elementos, salir

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    cuadros.forEach((cuadro) => {
      const titulo =
        cuadro.querySelector(titleSelector)?.textContent.toLowerCase() || "";
      const artista =
        cuadro.querySelector(artistSelector)?.textContent.toLowerCase() || "";

      if (titulo.includes(searchTerm) || artista.includes(searchTerm)) {
        cuadro.style.display = "block"; // Mostrar si coincide
      } else {
        cuadro.style.display = "none"; // Ocultar si no coincide
      }
    });
  });
}
