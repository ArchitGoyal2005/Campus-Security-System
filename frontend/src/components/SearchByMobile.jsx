import axios from "axios";
import { useState } from "react";

function SearchByMobile({ setUser, user, mobile, setMobile, setFormData }) {
  const [data, setData] = useState([]);

  function handleChange(e) {
    setMobile(() => e.target.value);
    getData(e.target.value);
    setUser(null);
  }

  async function getData(mobile) {
    const data = await axios.get(`/api/v1/users/?search=${mobile}`, {
      withCredentials: true,
    });
    setData(data.data.data.doc);
  }

  function handleNumberClick(e, entry) {
    setUser(entry);
    setMobile(entry.mobileNumber);
    setFormData({
      firstName: entry.name.split(" ")[0],
      lastName: entry.name.split(" ")[1] || " ",
      company: " ",
      purposeOfVisit: "",
      email: entry.email || " ",
      placeOfVisit: "",
    });
  }

  return (
    <div className="">
      <input
        className="relative w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={handleChange}
        defaultValue={user?.mobileNumber}
      ></input>
      {data.length > 0 && mobile.length > 0 && (
        <ul
          className={`w-[200px] bg-[#abd2d2] p-5 border-solid border-2 border-[#abd2d2] no-scrollbar absolute rounded-lg  overflow-y-scroll  h-1/3 opacity-80 ${
            user ? "hidden" : ""
          }`}
        >
          {data.map((entry) => (
            <li
              className="w-full flex items-center  flex-col"
              key={entry.mobileNumber}
              onClick={(e) => handleNumberClick(e, entry)}
              value={entry}
            >
              {entry.mobileNumber}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchByMobile;
