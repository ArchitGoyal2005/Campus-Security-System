// import { useContext } from "react";
import { userimg } from "../assets";
import UserLogo from "./UserLogo";
import Menu, { DropdownItem } from "./menu";
import { LogOut, User, Table, Tablet } from "react-feather";
import { Link } from "react-router-dom";
import { useUser } from "../conxtexts/userContext";

function ProfileDown() {
  const { user } = useUser();
  console.log(user);

  if (window.location.pathname === "/login") return;

  // if () return;
  return (
    <>
      <div className="text-black">
        <Menu
          trigger={
            <UserLogo>
              <img src={userimg} alt="x" />
            </UserLogo>
          }
        >
          <Link to={user?.roles === "guard" ? "guard/profile" : "/profile"}>
            <DropdownItem>
              <User size={20} /> Profile
            </DropdownItem>
          </Link>
          {user?.roles === "guard" ? (
            <Link to="guard/transitTable">
              <DropdownItem>
                <Table size={20} /> Transit Record
              </DropdownItem>
            </Link>
          ) : (
            <DropdownItem>
              <Tablet size={20} /> Lost Tag
            </DropdownItem>
          )}
          {user?.roles === "guard" ? (
            <Link to="guard/exit">
              <DropdownItem>Exit Gate Page</DropdownItem>
            </Link>
          ) : (
            ""
          )}
          <DropdownItem>
            <LogOut size={20} /> Logout
          </DropdownItem>
        </Menu>
      </div>
    </>
  );
}

export default ProfileDown;
