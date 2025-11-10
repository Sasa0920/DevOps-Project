import express from "express";
import Meal from "../models/Meal.js";

const router = express.Router();

// Add a meal
router.post("/", async (req, res) => {
  try {
    const meal = new Meal(req.body);
    await meal.save();
    res.status(201).json(meal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get meals by category
router.get("/", async (req, res) => {
  const category = req.query.category;
  const filter = category ? { category } : {};
  try {
    const meals = await Meal.find(filter);
    res.json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
