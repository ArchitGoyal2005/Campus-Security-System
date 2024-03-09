import LoginPage from "../components/loginPage";

function Login() {
  return (
    <section
      className="bg-[#C6E0E0] flex justify-center items-center py-20"
      id="login"
    >
      <div className="w-8/12 h-4/5 rounded-[20px] shadow-3xl border-gray-800 flex flex-row items-center">
        <LoginPage />
      </div>
    </section>
  );
}

export default Login;
