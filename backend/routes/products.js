const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD маршруты
router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

// Маршрут для поиска
router.get('/search', productController.searchProducts);

module.exports = router;
