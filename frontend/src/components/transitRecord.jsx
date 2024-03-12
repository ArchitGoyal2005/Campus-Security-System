import React from "react";

function TransitTable() {
  const data = React.useRef([
    {
      date: "01-01-2021",
      time: "10:00",
      from: "IIT Roorkee",
      to: "IIT Bombay",
    },
    {
      date: "01-01-2021",
      time: "10:00",
      from: "IIT Roorkee",
      to: "IIT Bombay",
    },
    {
      date: "01-01-2021",
      time: "10:00",
      from: "IIT Roorkee",
      to: "IIT Bombay",
    },
  ]);
  return (
    <div className="flex-grow">
      <h1 className="font-bold flex justify-center mb-10 text-xl">
        Transit History
      </h1>

      <div className="flex flex-1 justify-center items-center flex-col rounded-[20px] overflow-auto shadow-md">
        <table className=" w-full">
          <thead className="bg-[#82B1C1] border-b-2 border-[#82B1C1]">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Time
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                From
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                To
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#82B1C1] ">
            {data.current.map((item, index) => (
              <tr key={index}>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-semibold">
                  {item.date}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-semibold">
                  {item.time}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-semibold">
                  {item.from}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-semibold">
                  {item.to}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransitTable;
