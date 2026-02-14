import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    try {
      const API = "http://13.233.193.122:5000";

      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("username", username);

        if (onLoginSuccess) onLoginSuccess();
        navigate("/");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
      <div className="bg-gradient-to-br from-[#E3C2C2] to-[#d6a9a9] w-[400px] rounded-2xl shadow-2xl px-8 py-10 relative backdrop-blur-md border border-amber-800/30">
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-4 text-gray-800 font-bold text-lg hover:text-amber-700"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-center text-[#422A2A] mb-6">
          EatZone Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="username"
              placeholder="Username"
              className="outline-none w-full bg-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="outline-none w-full bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" />
            <label
              htmlFor="remember"
              className="text-sm text-gray-700 select-none"
            >
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6B4031] hover:bg-[#4d2c22] text-white font-semibold py-2 rounded-full transition"
          >
            Sign In
          </button>

          <div className="text-center mt-3">
            <Link
              to="/signup"
              className="text-sm text-gray-700 underline hover:text-amber-700"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
