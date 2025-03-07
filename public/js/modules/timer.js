export function iniciarTemporizador(horas, minutos, segundos) {
  const timerElement = document.getElementById("timer");

  function actualizarTiempo() {
    if (horas === 0 && minutos === 0 && segundos === 0) {
      timerElement.innerText = "Venta Finalizada";
      clearInterval(intervalo);
      return;
    }

    if (segundos === 0) {
      if (minutos === 0) {
        horas--;
        minutos = 59;
      } else {
        minutos--;
      }
      segundos = 59;
    } else {
      segundos--;
    }

    timerElement.innerText =
      `${String(horas).padStart(2, "0")}h:` +
      `${String(minutos).padStart(2, "0")}m:` +
      `${String(segundos).padStart(2, "0")}s`;
  }

  // Ejecutar la función inmediatamente y luego cada segundo
  actualizarTiempo();
  const intervalo = setInterval(actualizarTiempo, 1000);
}
