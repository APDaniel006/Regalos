document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("container");
  
  const boton = document.getElementById("miBoton");
  const mensaje = document.getElementById("mensajeEmergente");
  
  boton.addEventListener("click", () => {
      mensaje.style.display = "block";
  });
});

function cerrarMensaje() {
  document.getElementById("mensajeEmergente").style.display = "none";
}
