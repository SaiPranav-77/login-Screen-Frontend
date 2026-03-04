import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const key =  e.target.name
    const value = e.target.value
    setForm({ ...form, [key]: value })
  }

  const handleSubmit = async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(form.email)) {
    return alert('Invalid email format');
  }

  try {
    const response = await fetch("http://localhost:5005/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    console.log("Register response:", data);

    alert("User registered successfully");

    navigate("/");

  } catch (error) {
    console.error("Register error:", error);
  }
};

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ width: '30rem' }}>
        <h3 className="text-center mb-4">Register</h3>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-control"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form-control"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <select
          name="gender"
          className="form-select mb-3"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          name="dob"
          className="form-control mb-3"
          value={form.dob}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="form-control mb-3"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-4"
          value={form.password}
          onChange={handleChange}
        />

        <button className="btn btn-success w-100" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  )
}

export default Register