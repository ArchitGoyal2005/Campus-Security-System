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
    const data = await axios.get(
      `http://127.0.0.1:8000/api/v1/users/?search=${mobile}`
    );
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
    <div className="flex flex-col">
      <input
        className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
        type="text"
        placeholder="Search"
        value={mobile}
        onChange={handleChange}
        defaultValue={user?.mobileNumber}
      ></input>
      {data.length > 0 && (
        <ul
          className={`z-10 p-5 border-solid border-2 border-gray-100 bg-gray-100 rounded-lg  overflow-y-scroll  h-1/3 opacity-80 ${
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
