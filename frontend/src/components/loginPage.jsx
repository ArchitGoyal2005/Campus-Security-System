import { iitroorkee } from "../assets";
import Button from "./Button";

function LoginPage() {
  return (
    <form className="flex flex-row justify-center">
      <div className="flex justify-center items-start">
        <img
          src={iitroorkee}
          alt=""
          width={591}
          height={689}
          className="px-6 py-6"
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
        <a className="text-[#82B1C1] py-2" href="/">
          Forgot Password ?
        </a>
        <div className="flex flex-row gap-4">
          <p>New User ?</p>
          <a className="text-[#82B1C1]" href="/">
            Create an Account.
          </a>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
