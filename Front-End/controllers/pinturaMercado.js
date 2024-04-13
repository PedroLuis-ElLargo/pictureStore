const listaPintura = document.querySelector("#listaPintura");
const URL = `http://localhost:4000/api/pinturas`;

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log("Éxito: ", data);
    data.forEach((pintura) => mostrarPintura(pintura));
  })
  .catch((error) => console.error("Error: ", error));

const mostrarPintura = (data) => {
  const div = document.createElement("div");
  div.classList.add("col-md-4");
  div.innerHTML = `
    <div class="trending-content">
      <img
        src="../assets/img/${data.imagen}"
        alt="card-images"
        class="img-fluid"
      />
      <div class="trending-desc">
        <h4 class="user-title">${data.nombre}</h4>
        <h3 class="user-position">${data.nombre_pintura}</h3>
        <div class="bid d-flex justify-content-between align-items-center">
          <div>
            <h5>Oferta Actual</h5>
            <span>$${data.precio_oferta}</span>
          </div>
          <div>
            <h5>Tiempo de la venta</h5>
            <span>${data.fecha_actualizacion}</span>
          </div>
        </div>
        <div class="container-user-image">
          <img
            src="../assets/img/perfil3.jpg"
            alt="img-fluid"
            class="user-image"
          />
        </div>
      </div>
    </div>
  `;
  listaPintura.appendChild(div);
};
