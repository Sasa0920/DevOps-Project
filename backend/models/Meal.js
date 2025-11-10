import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  category: { type: String, required: true }, 
});

const Meal = mongoose.model("Meal", MealSchema);

export default Meal;
