import { Navigate, Outlet } from "react-router";
import { useUser } from "../conxtexts/userContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated, user } = useUser();
  console.log(isAuthenticated, user, children);
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (user?.roles === "guard") return <Navigate to="guard" />;

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
