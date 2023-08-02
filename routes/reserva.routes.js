// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require("express").Router();
const {
  renderCrearReserva,
  renderEditarReserva,
  obtenerReservas,
  obtenerReserva,
  crearReserva,
  editarReserva,
  eliminarReserva,
} = require("../controllers/reserva.controllers");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Vista para todas las reservas
router.get("/lista-reservas");

// Formulario para crear una reserva
router.get("/nueva-reserva", renderCrearReserva);

// Formulario para editar una reserva
router.get("/editar-reserva/:id", renderEditarReserva);

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get("/api/reservas", obtenerReservas);

// Crear una reserva
router.post("/api/reservas", crearReserva);

// Actualizar una reserva
router.put("/api/reserva/:id", editarReserva);

// Eliminar una reserva de forma lógica
router.delete("/api/reserva/:id", eliminarReserva);

module.exports = router;
