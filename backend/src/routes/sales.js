const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale');
const User = require('../models/User');

// Obtener ventas por rango de fecha
router.get('/range', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const sales = await Sale.find({
      date: {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      }
    }).populate('userId');
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener top vendedores
router.get('/top-sellers', async (req, res) => {
  try {
    const topSellers = await Sale.aggregate([
      {
        $group: {
          _id: '$userId',
          totalAmount: { $sum: '$amount' },
          totalQuantity: { $sum: '$quantity' }
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $unwind: '$user'
      },
      {
        $project: {
          name: '$user.name',
          totalAmount: 1,
          totalQuantity: 1
        }
      },
      {
        $sort: { totalAmount: -1 }
      }
    ]);
    res.json(topSellers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Crear nueva venta
router.post('/', async (req, res) => {
  try {
    const sale = new Sale(req.body);
    const newSale = await sale.save();
    res.status(201).json(newSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;