const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cantidadProductos: { type: Number, required: true },
  montoTotal: { type: Number, required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sale', SaleSchema);
