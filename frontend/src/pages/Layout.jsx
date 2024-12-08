import { Outlet } from "react-router";
import Nav from "../sections/nav";

function Layout() {
  return (
    <main className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Nav />
      <div className="overflow-scroll no-scrollbar">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
