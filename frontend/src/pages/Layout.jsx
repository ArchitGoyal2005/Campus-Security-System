import { Outlet } from "react-router";

import Nav from "../sections/nav";

import Profile from "../sections/profile";
import Login from "../sections/login";
import VisitorDetails from "../sections/visitorDetails";
import Search from "../components/search";

function Layout() {
  console.log(<Outlet />);
  return (
    <main className="flex h-screen flex-col">
      <Nav />
      <div className="overflow-scroll no-scrollbar flex flex-1">
        {/* <Outlet /> */}
        {/* <Login /> */}
        {/* <Profile /> */}
        <VisitorDetails />
        {/* <Search /> */}
      </div>
    </main>
  );
}

export default Layout;
