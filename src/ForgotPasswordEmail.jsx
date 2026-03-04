import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordEmail() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

 const handleSendOTP = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://login-screens-backend.onrender.com/check-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (data.message === "User exists") {
  sessionStorage.setItem("resetEmail", email);
  setMessage("OTP sent to email. Default OTP is 1234");

  setTimeout(() => {
    navigate("/reset-password");
  }, 1500);
} else {
  setMessage("User not found");
}

  } catch (error) {
    console.error(error);
    setMessage("Server error");
  }
};

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h4 className="text-center mb-3">Forgot Password</h4>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSendOTP}>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">Send OTP</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordEmail;