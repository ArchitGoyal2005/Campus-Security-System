import { iitroorkee } from "../assets";
import Button from "../components/Button";

function Login() {
  return (
    <section
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
        <div className="flex flex-col justify-center items-center p-24">
          <input
            className="w-full flex items-center gap-5 p-3 rounded-full"
            type="text"
            placeholder="User Id"
          />
          <br />
          <input
            className="w-full flex items-center gap-5 p-3 rounded-full"
            type="text"
            placeholder="Password"
          />
          <div className="py-4">
            <Button label="Login" />
          </div>
          <a className="text-[#82B1C1] py-4" href="/">
            Forgot Password ?
          </a>
          <div className="flex flex-row gap-2">
            <p>New User ?</p>
            <a className="text-[#82B1C1]" href="/">
              Create an Account.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
