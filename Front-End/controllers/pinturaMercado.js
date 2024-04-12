const listaPinturas = document.querySelector("#listaPintura");
let currentPage = 1;
const limit = 2;

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

async function cargarpinturas(page) {
  const offset = (page - 1) * limit;
  const URL = `http://localhost:4000/api/pinturas?limit=${limit}&offset=${offset}`;
  try {
    const data = await fetchData(URL);
    console.log(data); // Imprime la respuesta de la API en la consola
    listaPinturas.innerHTML = "";
    for (const pintura of data.result) {
      const pinturaData = await fetchData(pintura.url);
      mostrarpintura(pinturaData);
      loadedImages++;
      if (loadedImages >= initialLoadLimit) {
        break; // Si se han cargado las dos imágenes iniciales, salir del bucle
      }
    }
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

function mostrarpintura(data) {
  const div = document.createElement("div");
  div.classList.add("pintura");
  div.innerHTML = `
  <div class="trending-content">
  <img
    src=""
    alt="card-images"
    class="img-fluid"
  />
  <div class="trending-desc">
    <h4 class="user-title">Wayne Garner</h4>
    <h3 class="user-position">Arte de fluido oriental</h3>
    <div
      class="bid d-flex justify-content-between align-items-center"
    >
      <div>
        <h5>Oferta Actual</h5>
        <span>$7000</span>
      </div>
      <div>
        <h5>Tiempo de la venta</h5>
        <span>07h:25m:46s</span>
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
  listaPinturas.append(div);
}
// Llamada inicial para cargar las dos primeras imágenes
cargarpinturas(currentPage);
