import { Outlet } from "react-router";
import Nav from "../sections/nav";

function Layout() {
  return (
    <main className="relative">
      <Nav />
      <Outlet />
    </main>
  );
}

export default Layout;
