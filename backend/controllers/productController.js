const Product = require('../models/product');

// Получение всех продуктов
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Создание нового продукта
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Обновление продукта
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Удаление продукта
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Продукт удален' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Поиск продуктов (полнотекстовый поиск)
exports.searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    const products = await Product.find({ $text: { $search: query } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
