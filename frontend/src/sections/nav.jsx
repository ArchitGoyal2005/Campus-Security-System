import { headerlogo } from "../assets";

function Nav() {
  return (
    <nav className="bg-[#82B1C1] flex items-start justify-space-between">
      <img
        src={headerlogo}
        alt="logo"
        width={95}
        height={95}
        className="px-2 py-2"
      />
      <div className="font-bold py-6 px-2">
        <h1>भारतीय प्रौद्योगिकी संस्थान रूड़की</h1>
        <h1>Indian Institute of Technology Roorkee</h1>
      </div>
    </nav>
  );
}

export default Nav;
