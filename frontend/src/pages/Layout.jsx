import { Outlet } from "react-router";
import Nav from "../sections/nav";

function Layout() {
  console.log(<Outlet />);
  return (
    <main className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Nav />
      <div className="overflow-scroll no-scrollbar">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
