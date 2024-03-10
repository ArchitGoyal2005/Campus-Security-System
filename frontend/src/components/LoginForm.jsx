import { Form, redirect, useActionData } from "react-router-dom";
import Button from "./Button";

import axios from "axios";

import isEmail from "validator/lib/isEmail";

function LoginForm() {
  const data = useActionData();
  return (
    <Form
      method="POST"
      action="/login"
      className="flex flex-col justify-center items-center p-24"
    >
      <input
        className="w-full flex items-center gap-5 p-3 rounded-full"
        type="text"
        placeholder="Email"
        name="email"
      />
      <br />
      <input
        className="w-full flex items-center gap-5 p-3 rounded-full"
        type="password"
        placeholder="Password"
        name="password"
      />
      <div className="py-4">
        <Button label="Login" />
      </div>
      {data && data.error && <p>{data.error}</p>}
    </Form>
  );
}

export default LoginForm;

export const loginAction = async function ({ request }) {
  const formData = await request.formData();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  if (!data.email || !isEmail(data.email))
    return { error: "Please enter a vaild Email" };
  if (!data.password) return { error: "Please enter the password" };

  const res = await axios.post(
    "http://127.0.0.1:8000/api/v1/users/login",
    data
  );

  // const user = await res.json();

  return redirect("/");
};
