import axios from "axios";
import { useState } from "react";

function SearchByMobile({ setUser, user, mobile, setMobile }) {
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
  }

  return (
    <div className="flex flex-col grid-cols-2">
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
          className={`absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md overdlow-y-auto max-h-40 ${
            data.length > 0 && !user ? "block" : "hidden"
          }`}
        >
          {data.map((entry) => (
            <li
              className="w-full flex items-center flex-col"
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
