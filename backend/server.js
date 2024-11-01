const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Permite manejar JSON en el cuerpo de las solicitudes

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error de conexión:', error));

// Importa las rutas
const salesRoutes = require('./routes/salesRoutes');
const userRoutes = require('./routes/userRoutes'); // Suponiendo que también tienes usuarios

// Configura las rutas
app.use('/api/sales', salesRoutes);
app.use('/api/users', userRoutes); // Asegúrate de que también estén configuradas las rutas de usuarios

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
