import express from 'express';
import Cart from '../models/Cart.js';

const router = express.Router();

// Add meal to cart
router.post('/add', async (req, res) => {
  const { mealId, quantity } = req.body;
  let cart = await Cart.findOne();

  if (!cart) cart = new Cart({ items: [] });

  const itemIndex = cart.items.findIndex(item => item.meal.toString() === mealId);

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ meal: mealId, quantity });
  }

  await cart.save();
  res.json(cart);
});

// Get cart
router.get('/', async (req, res) => {
  const cart = await Cart.findOne().populate('items.meal');
  res.json(cart || { items: [] });
});

// Update quantity
router.put('/update', async (req, res) => {
  const { mealId, quantity } = req.body;
  const cart = await Cart.findOne();
  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  const item = cart.items.find(i => i.meal.toString() === mealId);
  if (item) {
    item.quantity = quantity;
  }
  await cart.save();
  res.json(cart);
});

// Delete item
router.delete('/remove/:mealId', async (req, res) => {
  const { mealId } = req.params;
  const cart = await Cart.findOne();
  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  cart.items = cart.items.filter(i => i.meal.toString() !== mealId);
  await cart.save();
  res.json(cart);
});

export default router;
