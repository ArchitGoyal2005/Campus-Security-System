import { headerlogo } from "../assets";
// import Button from "../components/user";
import Dropdown from "../components/dropdown";
function Nav() {
  return (
    <header className="bg-[#82B1C1] h-20 flex items-center justify-between content-center">
      <div className="flex">
        <img
          src={headerlogo}
          alt="logo"
          width={80}
          height={80}
          className="px-2 py-2 mr-4 ml-2"
        />

        <div className="font-bold py-6 px-2">
          <h1>भारतीय प्रौद्योगिकी संस्थान रूड़की</h1>
          <h1>Indian Institute of Technology Roorkee</h1>
        </div>
      </div>
      <div className="flex justify-end items-end mr-4">
        <Dropdown />
      </div>
    </header>
  );
}

export default Nav;
