import React, { useEffect, useState } from 'react';
import { getMeals, addToCart } from '../../services/mealService.js';

export default function MenuPage() {
  const [category, setCategory] = useState('BREAKFAST');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals(category)
      .then(data => {
        console.log("Fetched meals:", data);
        setMeals(data);
      })
      .catch(console.error);
  }, [category]);

  return (
    <section className="bg-gradient-to-b from-[#2C1B1B] to-[#3A2323] min-h-screen py-12 px-6">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="italic text-3xl font-bold text-[#DBA825] drop-shadow-md">
          Culinary Delights
        </h2>
        <p className="text-xl text-[#EED8A7] mt-2">Taste in Tune</p>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap gap-12 mb-[110px]">
        {['BREAKFAST', 'LUNCH', 'DINNER', 'DESSERTS', 'DRINKS'].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-8 py-2 text-lg rounded-full font-semibold transition-all duration-300 ${
              category === cat
                ? 'bg-gradient-to-r from-[#CE6730] to-[#6A3A1A] text-white shadow-lg scale-105'
                : 'bg-gradient-to-r from-[#EFD49B] to-[#683418] text-[#2C1B1B] hover:scale-105'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Meals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {meals.map(meal => (
          <div
            key={meal._id}
            className="bg-gradient-to-b from-[#4A2E1E] to-[#7A4E4E] max-w-sm w-[300px] min-h-[400px] rounded-3xl shadow-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-[#CE6730]"
          >
            {/* Meal Image */}
            <img
              src={meal.image}
              alt={meal.name}
              className="w-40 h-40 object-cover rounded-2xl mb-8"
            />

            {/* Name */}
            <h3 className="text-lg font-semibold text-[#f3efe9] text-center truncate w-full">
              {meal.name}
            </h3>

            {/* Description */}
            <p className="text-[#f3efe9] text-center mt-1 text-sm w-full mb-4">
              {meal.description}
            </p>

            {/* Price + Add to Cart button in one row */}
            <div className="mt-4 flex justify-between items-center w-full gap-2">
              <span className="font-bold text-black bg-[#D1B7B7] rounded-full px-4 py-1 text-center shadow-md whitespace-nowrap">
                Rs.{meal.price}
              </span>
              <button
                onClick={() =>
                  addToCart(meal._id)
                    .then(data => console.log("Added to cart:", data))
                    .catch(console.error)
                }
                className="bg-[#D1B7B7] text-[#2C1B1B] font-bold rounded-full px-4 py-1 shadow-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
