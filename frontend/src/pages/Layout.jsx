import { Outlet } from "react-router";
import TransitTable from "../sections/transitTable";
import Nav from "../sections/nav";

function Layout() {
  return (
    <main className="relative">
      <Nav />
      <TransitTable />
    </main>
  );
}

export default Layout;
