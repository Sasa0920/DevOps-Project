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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 max-w-5xl mx-auto">
        {meals.map(meal => (
          <div
            key={meal._id}
            className="bg-gradient-to-b from-[#4A2E1E] to-[#7A4E4E] max-w-sm w-full rounded-3xl shadow-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-[#CE6730] min-h-[500px]"
          >
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-38 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold text-[#f3efe9] text-center">{meal.name}</h3>
            <p className="text-[#f3efe9] text-center mt-2 text-sm">{meal.description}</p>
            <p className="mt-3 font-bold text-black bg-[#D1B7B7] rounded-full px-5 py-1 text-center shadow-md">
              Rs.{meal.price}
            </p>
            <button
              onClick={() =>
                addToCart(meal._id)
                  .then(data => console.log("Added to cart:", data))
                  .catch(console.error)
              }
              className="mt-4 w-3/4 bg-[#D1B7B7] text-[#2C1B1B] font-bold rounded-full py-2 shadow-lg hover:opacity-90 transition-opacity"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
