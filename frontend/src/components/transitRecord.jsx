import React from "react";

function TransitTable() {
  const data = React.useRef([
    {
      entryTime: "3:00",
      time: "10:00",
      from: "1",
      to: "3",
    },
    {
      entryTime: "2:00",
      time: "10:00",
      from: "1",
      to: "3",
    },
    {
      entryTime: "1:00",
      time: "10:00",
      from: "4",
      to: "2",
    },
  ]);
  const timeToMilliseconds = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    return parseInt(hours, 10) * 3600000 + parseInt(minutes, 10) * 60000; // 1 hour = 3600000 milliseconds, 1 minute = 60000 milliseconds
  };
  return (
    <div className="flex-grow">
      <h1 className="font-bold flex justify-center mb-10 text-xl">
        Transit History
      </h1>

      <div className="flex flex-1 justify-center items-center flex-col rounded-[20px] overflow-auto shadow-md">
        <table className=" w-full">
          <thead className="bg-[#82B1C1] border-b-2 border-[#82B1C1]">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide ">S.no</th>
              <th className="p-3 text-sm font-semibold tracking-wide ">
                Entry Time
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide">
                Exit Time
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide ">
                Entry Gate
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide ">
                Exit Gate
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide ">
                Duration
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#82B1C1] ">
            {data.current.map((item, index) => (
              <tr key={index}>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-semibold text-center">
                  {index + 1}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-semibold text-center">
                  {item.entryTime}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-semibold text-center">
                  {item.time}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-semibold text-center">
                  {item.from}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-semibold text-center">
                  {item.to}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-semibold text-center ">
                  {Math.floor(
                    (timeToMilliseconds(item.time) -
                      timeToMilliseconds(item.entryTime)) /
                      (1000 * 60 * 60)
                  )}{" "}
                  hrs
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
