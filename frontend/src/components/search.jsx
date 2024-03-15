"use client";

import React, { useState } from "react";
import { words } from "../lib/data";

function Search() {
  const [activeSearch, setActiveSearch] = useState([]);

  function handleSearch(e) {
    if (e.target.value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      words.filter((w) => w.includes(e.target.value)).slice(0, 8)
    );
  }
  return (
    <div className="w-[440px] relative">
      <div className="relative p-4">
        <input
          type="search"
          placeholder="Search"
          className="w-full p-4 rounded-full bg-slate-600"
          onChange={(e) => handleSearch(e)}
        />
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute top-20 p-4 bg-slate-600 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {activeSearch.map((s) => (
            <span>{s}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
