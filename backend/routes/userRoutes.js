const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Importa el modelo de usuario

// Ruta para obtener la lista de usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const { nombre, correo } = req.body;
    const newUser = new User({ nombre, correo });
    await newUser.save();
    res.status(201).json(newUser); // Responde con el usuario creado
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

module.exports = router;
