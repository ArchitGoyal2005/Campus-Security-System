import { Navigate } from "react-router";
import { iitroorkee } from "../assets";
import LoginForm from "../components/LoginForm";
import { useUser } from "../conxtexts/userContext";

function Login() {
  return (
    <main
      className="bg-[#C6E0E0] flex justify-center items-center py-20"
      id="login"
    >
      <div className="w-[1081px] h-[750px] rounded-[20px] shadow-3xl border-gray-800 flex flex-row items-center">
        <div className="flex justify-center items-start">
          <img
            src={iitroorkee}
            alt=""
            width={591}
            height={689}
            className="px-10 py-10"
          />
        </div>
        <LoginForm />
      </div>
    </main>
  );
}

export default Login;
