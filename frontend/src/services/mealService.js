import axios from "axios";

export const getMeals = async (category) => {
  const res = await axios.get(`${"http://13.233.193.122:5000"}/meals`, {
    params: { category },
  });
  return res.data;
};

export const addToCart = async (mealId, quantity = 1) => {
  const res = await axios.post(`${"http://13.233.193.122:5000"}/cart/add`, {
    mealId,
    quantity,
  });
  return res.data;
};