import Button from "./Button";

function LoginForm() {
  return (
    <form className="flex flex-col justify-center items-center p-24">
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
    </form>
  );
}

export default LoginForm;
