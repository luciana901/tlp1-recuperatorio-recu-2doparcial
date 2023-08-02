const formReserva = document.querySelector("#formActualizarReserva");
const reservaId = formReserva.dataset.id;

const pelicula_nombre = document.querySelector("#pelicula_nombre");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fecha_pelicula = document.querySelector("#fecha_pelicula");
const entrada_hora = document.querySelector("#entrada_hora");
const salida_hora = document.querySelector("#salida_hora");
const asiento = document.querySelector("#asiento");
const precio = document.querySelector("#precio");

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`/api/reservas/${reservaId}`);
  const data = await response.json();
  console.log(data);
  pelicula_nombre.value = data.pelicula_nombre;
  nombre.value = data.nombre;
  apellido.value = data.apellido;
  fecha_pelicula.value = dayjs(data.fecha_pelicula).format("DD-MM-YYYY HH:mm");
  entrada_hora.value = data.entrada_hora;
  salida_hora.value = data.salida_hora;
  asiento.value = data.asiento;
  precio.value = data.precio;
});

formReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  reservaActualizada = {
    pelicula_nombre: pelicula_nombre.value,
    nombre: nombre.value,
    apellido: apellido.value,
    fecha_pelicula: fecha_pelicula.value,
    entrada_hora: entrada_hora.value,
    salida_hora: salida_hora.value,
    asiento: asiento.value,
    precio: precio.value,
  };

  const response = await fetch(`/api/reservas/${reservaId}`, {
    method: "PUT",
    body: JSON.stringify(reservaEditada),
    headers: {
      "Content-Type": "application/json",
    },
  });

  alert("Reserva Editada");

  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
});
