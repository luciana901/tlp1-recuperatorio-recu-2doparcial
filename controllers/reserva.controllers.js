// TODO: Crear controladores para cada una de las rutas de reserva.
const Reserva = require("../models/Reserva");

const ctrl = {};

ctrl.renderCrearReserva = (req, res) => {
  res.render("crear-reserva");
};
ctrl.renderActualizarReserva = (req, res) => {
  const reservaId = req.params.id;
  res.render("editar-reserva", { id: reservaId });
};

// ==========================================
//    Controladores para renderizar vistas
// ==========================================

// Obtener todas las reservas
ctrl.ctrl.renderListaReservas = (req, res) => {
  res.render("index");
};
// Formulario para crear una reserva
ctrl.ctrl.renderFormNuevaReserva = (req, res) => {
  res.render("nuevo");
};

// Formulario para editar una reserva
ctrl.ctrl.renderFormEditarReserva = (req, res) => {
  const { id } = req.params;
  res.render("editar", { id });
};

// ==========================================
//     Controladores para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
      where: {
        estado: true,
      },
    });
    return res.render("index", {
      reservas,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener las reservas",
    });
  }
};
// Obtener una reserva
ctrl.obtenerReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findOne({
      where: {
        id: Number(req.params.id),
      },
    });
    return res.json(reserva);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener la reserva",
    });
  }
};

// Crear una reserva
ctrl.crearReserva = async (req, res) => {
  const {
    codigo,
    pelicula_nombre,
    nombre,
    apellido,
    fecha_pelicula,
    entrada_hora,
    salida_hora,
    asiento,
    precio,
  } = req.body;

  try {
    const reserva = await Reserva.create({
      codigo: new Date().getTime(),
      pelicula_nombre,
      nombre,
      apellido,
      fecha_pelicula,
      entrada_hora,
      salida_hora,
      asiento,
      precio,
    });
    return res.json(reserva);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al crear la reserva",
    });
  }
};

// Actualizar una reserva
ctrl.actualizarReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reserva.findByPk(id);
    await reserva.update(req.body);
    return res.json({
      message: "Reserva actualizada",
    });
  } catch (error) {
    console.log("Error al actualizar la reserva", error);
    return res.status(error.status || 500).json({
      message: error.message,
    });
  }
};
// Eliminar una reserva de forma lógica
ctrl.eliminarReserva = async (req, res) => {
  const { estado } = req.body;
  try {
    const reserva = await Reserva.update(
      {
        estado: false,
      },
      {
        where: {
          id: Number(req.params.id),
        },
      }
    );
    return res.json(reserva);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al actualizar la reserva",
    });
  }
};

module.exports = ctrl;
