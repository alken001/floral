const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name:        { type: String, required: true, index: true },
  price:       { type: Number, required: true },
  description: { type: String },
  category:    { type: String, index: true },
  stock:       { type: Number, default: 0 },
  images:      [String],
}, { timestamps: true });

// Добавляем текстовый индекс для полнотекстового поиска
ProductSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', ProductSchema);
