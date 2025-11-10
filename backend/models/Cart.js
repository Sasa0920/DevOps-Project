import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  meal: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal', required: true },
  quantity: { type: Number, default: 1 }
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema]
});

export default mongoose.model('Cart', cartSchema);
