import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import { useUser } from "../conxtexts/userContext";
import Button from "./Button";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { setIsAuthenticated, setUser } = useUser();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    console.log(email, password);

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
        "/api/v1/users/login",
        isEmail(email)
          ? { email, password }
          : { mobileNumber: email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data && data.data.user) {
        setIsAuthenticated(true);
        setUser(data.data.user);
        return navigate("/redirect");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h1 className="w-full text-center text-3xl font-semibold">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center py-12 px-24"
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
        <div className="py-8">
          <Button label="Login" />
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
