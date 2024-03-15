import { Navigate } from "react-router";
import { useUser } from "../conxtexts/userContext";

function CheckAuth() {
  const { user } = useUser();
  console.log(user);
  if (user && user.roles) {
    const a = user.roles;
    console.log(a);
    if (a === "guard") {
      console.log("hii");
      return <Navigate to="/guard" />;
    }
    if (a === "teacher") return <Navigate to="/profile" />;
    if (a === "student") return <Navigate to="/profile" />;
    if (a === "visitor") return <Navigate to="/profile" />;
  }
}

export default CheckAuth;
