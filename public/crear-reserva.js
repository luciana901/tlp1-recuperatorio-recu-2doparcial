const formCrearReserva = document.querySelector("#formCrearReserva");

console.log(formCrearReserva);
formCrearReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  const pelicula_nombre = document.querySelector("pelicula_nombre").value;
  const nombre = document.querySelector("nombre").value;
  const apellido = document.querySelector("apellido").value;
  const fecha_pelicula = document.querySelector("#fecha_pelicula").value;
  const entrada_hora = document.querySelector("entrada_hora").value;
  const salida_hora = document.querySelector("salida_hora").value;
  const costo = document.querySelector("asiento").value;
  const telefono = document.querySelector("precio").value;

  const body = {
    codigo: new Date().getTime(),
    pelicula_nombre,
    nombre,
    apellido,
    fecha_pelicula,
    entrada_hora,
    salida_hora,
    asiento,
    precio,
  };

  try {
    fetch(
      "api/reservas",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
      alert("Reserva agregada correctamente")
    );
  } catch (error) {
    console.log(error);
    alert("Error al agregar la reserva");
  }
});
