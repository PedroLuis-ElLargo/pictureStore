// Selecciona todos los elementos <a> con la clase 'switch' y asigna un evento de click a cada uno
document.querySelectorAll("a.switch").forEach(function (elemento) {
  elemento.addEventListener("click", function (e) {
    // Evita el comportamiento predeterminado del enlace
    e.preventDefault();

    // Alterna la clase 'active' en el elemento clickeado
    this.classList.toggle("active");

    // Verifica si el elemento clickeado tiene la clase 'active'
    var isActive = this.classList.contains("active");

    // Busca el ancestro más cercano con la clase 'form-peice' del elemento clickeado
    var formPeice = this.closest(".form-peice");

    // Obtiene todos los elementos siblings con la clase 'form-peice' del ancestro encontrado
    var siblingFormPieces =
      formPeice.parentNode.querySelectorAll(".form-peice");

    // Si el elemento clickeado está activo
    if (isActive) {
      // Agrega la clase 'switched' al elemento 'form-peice' actual
      formPeice.classList.add("switched");

      // Remueve la clase 'switched' de los elementos siblings
      siblingFormPieces.forEach(function (sibling) {
        if (sibling !== formPeice) {
          sibling.classList.remove("switched");
        }
      });
    } else {
      // Si el elemento clickeado no está activo
      // Remueve la clase 'switched' del elemento 'form-peice' actual
      formPeice.classList.remove("switched");

      // Agrega la clase 'switched' a los elementos siblings
      siblingFormPieces.forEach(function (sibling) {
        if (sibling !== formPeice) {
          sibling.classList.add("switched");
        }
      });
    }
  });
});
