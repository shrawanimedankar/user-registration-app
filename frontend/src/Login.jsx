import { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post( "http://localhost:5000/login", formData );
      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?
          <Link to="/"> Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;