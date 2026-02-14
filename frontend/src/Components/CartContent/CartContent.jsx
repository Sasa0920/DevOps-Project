import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const CartContent = () => {

  const [cart, setCart] = useState({ items: [] });

  const fetchCart = () => {
    fetch('http://13.233.193.122:5000/cart')
      .then(res => res.json())
      .then(setCart)
      .catch(console.error);
  };

  const updateQuantity = (mealId, quantity) => {
    fetch('http://13.233.193.122:5000/cart/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mealId, quantity })
    }).then(fetchCart);
  };

  const deleteItem = (mealId) => {
    fetch(`http://13.233.193.122:5000/cart/remove/${mealId}`, {
      method: 'DELETE'
    }).then(fetchCart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <main className="bg-gradient-to-b from-[#7C6363] to-[#D4B7B7] flex flex-col items-center py-40 space-y-30 h-200 ">
        <h2 className="mt-10 italic text-5xl font-semibold text-[#DBA825] [text-shadow:_2px_2px_0_black,_0px_0px_0_black] ">Your Cart</h2>
        {cart.items.length === 0 ? (
          <>
            <p className="mt-5 text-lg text-gray-200">Your cart is empty</p>
            <Link to="/menu">
            <button className="mt-7 px-6 py-2 bg-gradient-to-r from-[#CE6730] to-[#683418] rounded-full text-md text-white shadow-md hover:scale-105 transition">
              BROWSE ALL ITEMS
            </button>
            </Link>
          </>
         ) : (
          cart.items.map(({ meal, quantity }) => (
          
          <div key={meal._id} className="mt-8 flex gap-5 items-center bg-gradient-to-r from-[#42291B] to-[#9F7272] border-2 border-[#CE6730] rounded-xl w-full max-w-[800px] min-h-[150px] p-4 mb-4">
              
             
              <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
              </div>

              
              <div className="flex-grow ml-4">
                  <h3 className="text-white font-semibold text-lg">{meal.name}</h3>
                  <p className="text-white mt-1">Rs.{meal.price}</p>
              </div>

             
              <div className="flex items-center gap-4">
                  <div className="flex gap-5 items-center bg-[#42291B] text-white font-semibold px-4 py-1 rounded-full">
                      <button onClick={() => updateQuantity(meal._id, quantity - 1)} disabled={quantity <= 1}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => updateQuantity(meal._id, quantity + 1)}>+</button>
                  </div>
                  
                  <button onClick={() => deleteItem(meal._id)} className="bg-[#42291B] text-white font-semibold px-6 py-1 rounded-full hover:bg-red-900 transition">
                      Delete
                  </button>
              </div>
          </div>
        ))
      )}
      </main>
  )
}

export default CartContent