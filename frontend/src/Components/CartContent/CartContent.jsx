import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const CartContent = () => {

  const [cart, setCart] = useState({ items: [] });

  const fetchCart = () => {
    fetch('http://localhost:5000/cart')
      .then(res => res.json())
      .then(setCart)
      .catch(console.error);
  };

  const updateQuantity = (mealId, quantity) => {
    fetch('http://localhost:5000/cart/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mealId, quantity })
    }).then(fetchCart);
  };

  const deleteItem = (mealId) => {
    fetch(`http://localhost:5000/cart/remove/${mealId}`, {
      method: 'DELETE'
    }).then(fetchCart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <main className="bg-gradient-to-b from-[#7C6363] to-[#D4B7B7] flex flex-col items-center py-40 space-y-30 h-200 ">
        <h2 className="italic text-5xl font-semibold text-[#DBA825] [text-shadow:_2px_2px_0_black,_0px_0px_0_black] ">Your Cart</h2>
        {cart.items.length === 0 ? (
          <>
            <p className="text-lg text-gray-200">Your cart is empty</p>
            <Link to="/menu">
            <button className="mt-3 px-6 py-2 bg-gradient-to-r from-[#CE6730] to-[#683418] rounded-full text-md text-white shadow-md hover:scale-105 transition">
              BROWSE ALL ITEMS
            </button>
            </Link>
          </>
         ) : (
          cart.items.map(({ meal, quantity }) => (
          <div key={meal._id} className="flex gap-5 items-center bg-gradient-to-r from-[#42291B] to-[#9F7272] border-2 border-[#CE6730]  rounded-xl w-260 h-35">
            <img src={meal.image} alt={meal.name} className="w-25 h-25 rounded justify-center ml-25 " />
            <div >
              <h3 className="w-30 ml-10 text-white font-semibold text-lg">{meal.name}</h3>
              <p className=" ml-10 mt-3  text-white ">Rs.{meal.price}</p>
            </div>
            <div className="flex gap-5 ml-70 items-center mt-1 bg-[#42291B] text-white font-semibold px-6 py-1 rounded-full ">
              <button onClick={() => updateQuantity(meal._id, quantity - 1)} disabled={quantity <= 1}>-</button>
              <span>{quantity}</span>
              <button onClick={() => updateQuantity(meal._id, quantity + 1)} >+</button>
            </div>
            
            <button onClick={() => deleteItem(meal._id)} className="ml-10 bg-[#42291B] text-white font-semibold px-7 py-1 rounded-full">
              Delete
            </button>
          </div>
        ))
      )}
      </main>
  )
}

export default CartContent