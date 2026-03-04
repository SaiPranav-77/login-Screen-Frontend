// Home.jsx
<<<<<<< HEAD
import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Shirt", price: "500" },
  { id: 2, name: "Boxers", price: "200" },
  { id: 3, name: "Pants", price: "300" },
  { id: 4, name: "Shoes", price: "1000" },
];

const Home = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("currentUser");

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 sale-title">Summer Sale</h1>
      <h3 className="text-center mb-5 welcome-text">Welcome {user}</h3>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="product-card">
              <h4 className="product-title">{product.name}</h4>

              <p className="product-price">₹{product.price}</p>

              <button className="btn buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/'); // Redirect to login
  };

  // Retrieve user from storage
  const user = localStorage.getItem('currentUser');

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <h2 className="mb-3">Welcome, {user || 'User'}!</h2>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
>>>>>>> 71f43f6fdbd43ea14875313f91053d849e719e04
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 71f43f6fdbd43ea14875313f91053d849e719e04
