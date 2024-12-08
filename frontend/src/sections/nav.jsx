import { headerlogo } from "../assets";
import ProfileDown from "../components/ProfileDown";

function Nav() {
  return (
    <header className="bg-[#82B1C1]  h-20 flex items-center justify-between content-center">
      <div className="flex">
        <img
          src={headerlogo}
          alt="logo"
          width={80}
          height={80}
          className="px-2 py-2  ml-4 "
        />
        <div className="font-bold py-6 px-2">
          <h1>J.C Bose University Of</h1>
          <h1>Science & Technology YMCA</h1>
        </div>
      </div>
      <div className="mr-6">
        <ProfileDown />
      </div>
    </header>
  );
}

export default Nav;
