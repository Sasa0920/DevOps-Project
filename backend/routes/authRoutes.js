import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// ----------------- Signup -----------------
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    console.log("User registered:", newUser.username);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: err.message });
  }
});

// ----------------- Login -----------------
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find user
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("User logged in:", user.username);
    res.json({ token, username: user.username });
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
