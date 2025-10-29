import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = form;

    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful! Please log in.");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      
    >
      <div className="bg-gradient-to-br from-[#E3C2C2] to-[#d6a9a9] w-[400px] rounded-2xl shadow-2xl px-8 py-10 relative backdrop-blur-md border border-amber-800/30">
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-4 text-gray-800 font-bold text-lg hover:text-amber-700"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-center text-[#422A2A] mb-6">
          EatZone Signup
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="outline-none w-full bg-transparent"
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="outline-none w-full bg-transparent"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="outline-none w-full bg-transparent"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#6B4031] hover:bg-[#4d2c22] text-white font-semibold py-2 rounded-full transition"
          >
            Sign Up
          </button>

          <div className="text-center mt-3">
            <Link
              to="/login"
              className="text-sm text-gray-700 underline hover:text-amber-700"
            >
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
