const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale'); // Importa el modelo de ventas

// Ruta para obtener ventas por rango de fechas
router.get('/', async (req, res) => {
  const { startDate, endDate } = req.query; // Obtiene fechas de consulta
  try {
    const sales = await Sale.find({
      fecha: { $gte: new Date(startDate), $lte: new Date(endDate) }
    }).populate('usuarioId'); // Llena los datos del usuario correspondiente
    res.json(sales); // Devuelve las ventas
  } catch (error) {
    console.error('Error al obtener las ventas:', error);
    res.status(500).json({ error: 'Error al obtener las ventas' });
  }
});

// Ruta para obtener el resumen de ventas por vendedor
router.get('/summary', async (req, res) => {
  try {
    const summary = await Sale.aggregate([
      {
        $group: {
          _id: "$usuarioId", // Agrupa por ID de usuario
          totalProductos: { $sum: "$cantidadProductos" }, // Suma de productos vendidos
          montoTotal: { $sum: "$montoTotal" } // Suma del monto total
        }
      },
      {
        $lookup: {
          from: "users", // Colección de usuarios
          localField: "_id", // Campo local que se relaciona
          foreignField: "_id", // Campo en la colección de usuarios
          as: "usuario" // Nombre del campo en el resultado
        }
      }
    ]);
    res.json(summary); // Devuelve el resumen de ventas
  } catch (error) {
    console.error('Error al obtener el resumen de ventas:', error);
    res.status(500).json({ error: 'Error al obtener el resumen de ventas' });
  }
});

// Ruta para crear una nueva venta
router.post('/', async (req, res) => {
  try {
    const { usuarioId, cantidadProductos, montoTotal, fecha } = req.body; // Obtiene datos de la solicitud
    const newSale = new Sale({
      usuarioId,
      cantidadProductos,
      montoTotal,
      fecha: fecha ? new Date(fecha) : new Date() // Convierte fecha a Date, si no se proporciona usa la actual
    });
    await newSale.save(); // Guarda la nueva venta
    res.status(201).json(newSale); // Responde con la venta creada
  } catch (error) {
    console.error('Error al crear la venta:', error); // Muestra el error
    res.status(500).json({ error: 'Error al crear la venta' });
  }
});

module.exports = router;
