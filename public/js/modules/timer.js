export function iniciarTemporizadores(horas, minutos, segundos) {
  const timers = document.querySelectorAll(".timer"); // Selecciona todos los temporizadores

  if (timers.length === 0) return;

  timers.forEach((timerElement) => {
    let h = horas,
      m = minutos,
      s = segundos;

    function actualizarTiempo() {
      if (h === 0 && m === 0 && s === 0) {
        timerElement.innerText = "Venta Finalizada";
        clearInterval(intervalo);
        return;
      }

      timerElement.innerText =
        `${String(h).padStart(2, "0")}h:` +
        `${String(m).padStart(2, "0")}m:` +
        `${String(s).padStart(2, "0")}s`;

      if (s === 0) {
        if (m === 0) {
          if (h > 0) h--;
          m = 59;
        } else {
          m--;
        }
        s = 59;
      } else {
        s--;
      }
    }

    actualizarTiempo();
    const intervalo = setInterval(actualizarTiempo, 1000);
  });
}
