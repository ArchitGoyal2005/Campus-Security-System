// import { user } from "../assets";

import { user } from "../assets";
import Button from "./user";
import Menu, { DropdownItem } from "./menu";
import { AlertTriangle, LogOut, User } from "react-feather";
// import { Profiler } from "react";

function Dropdown() {
  return (
    <>
      <div className="text-black">
        <Menu
          trigger={
            <Button>
              <img src={user} alt="x" />
            </Button>
          }
        >
          <DropdownItem>
            <User size={20} /> Profile
          </DropdownItem>
          <DropdownItem>
            <AlertTriangle size={20} /> Lost Tag
          </DropdownItem>
          <DropdownItem>
            <LogOut size={20} /> Logout
          </DropdownItem>
        </Menu>
      </div>
    </>
  );
}

export default Dropdown;
