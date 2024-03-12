// import { Outlet } from "react-router";

import Nav from "../sections/nav";
import Profile from "../sections/profile";
// import Login from "../sections/login";

function Layout() {
  return (
    <main className="flex h-screen flex-col">
      <Nav />
      <div className="overflow-scroll no-scrollbar flex flex-1">
        {/* <Outlet /> */}
        {/* <Login /> */}

        <Profile />
      </div>
    </main>
  );
}

export default Layout;
