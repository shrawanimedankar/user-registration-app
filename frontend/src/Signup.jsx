import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post( "http://localhost:5000/signup", formData);
      alert(res.data.message);
    } 
    catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Signup</button>
      </form>
      <h2>Already have an account? Log in</h2>
    </div>
  );
}

export default Signup;