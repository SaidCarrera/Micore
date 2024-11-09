const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Endpoint para crear un usuario
router.post('/', async (req, res) => {
  
  const { nombre, correo } = req.body;
  try {
    const newUser = new User({ nombre, correo });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

module.exports = router;
