import axios from "axios";

export const getMeals = async (category) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/meals`, {
    params: { category },
  });
  return res.data;
};

export const addToCart = async (mealId, quantity = 1) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/cart/add`, {
    mealId,
    quantity,
  });
  return res.data;
};