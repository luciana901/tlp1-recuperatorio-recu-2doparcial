// TODO: Crear modelo de datos de Reserva
// TODO: Crear modelo de datos de Reserva
const { Sequelize, DataTypes } = require("../database");

const Reserva = sequelize.define(
  "Reserva",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    pelicula_nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha_pelicula: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    entrada_hora: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    salida_hora: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    asiento: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    precio: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updateAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deleteAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    createAt: true,
    updateAt: true,
    deleteAt: true,
    tableName: "reservas",
  }
);

Reserva.sync({ force: false }).then(() => {
  console.log("Tabla de Reservas creada");
});
module.exports = Reserva;
