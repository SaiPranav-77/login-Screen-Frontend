import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    if (otp !== '1234') {
      setMessage('Invalid OTP');
      return;
    }

    const email = sessionStorage.getItem('resetEmail');

    const response = await fetch('http://localhost:5005/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, newPassword, otp }),
    });

<<<<<<< HEAD
    const result = await response.json();
=======
    const result = response.json();
>>>>>>> 71f43f6fdbd43ea14875313f91053d849e719e04

    if (response.ok) {
      setMessage('Password updated. Redirecting to login...');
      setTimeout(() => navigate('/'), 1500);
    } else {
      setMessage(result.message || 'Error updating password');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h4 className="text-center mb-3">Reset Password</h4>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleReset}>
          <div className="mb-3">
            <label>OTP</label>
            <input
              type="text"
              className="form-control"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP (default: 1234)"
            />
          </div>
          <div className="mb-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>
          <button className="btn btn-success w-100" type="submit">Update Password</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;