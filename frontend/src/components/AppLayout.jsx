import Login from "../sections/login";
import Nav from "../sections/nav";

function AppLayout() {
  return (
    <section className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Nav />
      <div className="overflow-scroll no-scrollbar">
        <Login />
      </div>
    </section>
  );
}

export default AppLayout;
