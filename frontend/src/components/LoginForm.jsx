import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import Button from "./Button";
import { useUser } from "../conxtexts/userContext";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { setIsAuthenticated, setUser } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Please enter both email/mobile and password");
      return;
    }

    if (!isEmail(email) && !/^[0-9]{10}$/.test(email)) {
      setError("Please enter a valid email or mobile number");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/login",
        isEmail(email) ? { email, password } : { mobileNumber: email, password }
      );

      console.log(data);
      if (data && data.data.user) {
        setIsAuthenticated(true);
        setUser(data);
        navigate("/");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center p-24"
    >
      <input
        className="w-full flex items-center gap-5 p-3 rounded-full"
        type="text"
        placeholder="Email Id / Mobile"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input
        className="w-full flex items-center gap-5 p-3 rounded-full"
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <div className="py-4">
        <Button label="Login" />
      </div>
      {error && <p>{error}</p>}
    </Form>
  );
}

export default LoginForm;
