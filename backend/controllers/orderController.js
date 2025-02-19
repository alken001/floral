const Order = require('../models/order');

exports.createOrder = async (req, res) => {
  try {
    const { user, products, totalCost } = req.body;
    const order = new Order({ user, products, totalCost });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Дополнительные маршруты можно добавить для получения заказов, обновления статуса и т.д.
