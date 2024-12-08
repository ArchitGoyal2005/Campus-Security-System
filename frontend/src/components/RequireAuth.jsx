import { Outlet } from "react-router";
import { useUser } from "../conxtexts/userContext";

function RequireAuth({ allowedRoles }) {
  const { user } = useUser();
  console.log(user);
  if (allowedRoles.includes(user?.roles)) return <Outlet />;
}

export default RequireAuth;
