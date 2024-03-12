import { Form } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const transitLoader = async () => {
  try {
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWI2YTc1YjY3NDNmM2ZhNGE0NzhlMyIsImlhdCI6MTcxMDE3NDg3NywiZXhwIjoxNzE3OTUwODc3fQ.k8Y5POtioYA9Gy8tgnSUtgqHLSzLUIenkwOjkd3mFRg";
    const transitReq = await axios.get(
      "http://127.0.0.1:8000/api/v1/transit/",
      {
        headers: {
          Authorization: `Bearer ${authToken}`, // Assuming you're using a Bearer token
        },
      }
    );
    const transitData = transitReq.data.data.doc;
    console.log(transitData);
    const JsxElements = transitData.map((transit, i) => {
      const entryTime = new Date(transit.entryTime);
      const exitTime = new Date(transit.exitTime);

      // Format entry time and exit time as time strings
      const entryTimeString = entryTime.toLocaleString();
      const exitTimeString = exitTime.toLocaleString();

      const timeHours =
        (exitTime.getTime() - entryTime.getTime()) / (60 * 60 * 1000);
      const hoursLeft = timeHours % 24;
      const daysLeft = timeHours / 24;
      return (
        <div className="grid grid-cols-6 mt-0" key={i}>
          <div className="col-span-1 border border-gray-500">{i + 1}</div>
          <div className="col-span-2 border border-gray-500">{transit.tag}</div>
          <div className="col-span-1 border border-gray-500">
            {daysLeft}days {hoursLeft}hrs
          </div>
          <div className="col-span-1 border border-gray-500">
            {entryTimeString}
          </div>
          <div className="col-span-1 border border-gray-500">
            {exitTimeString}
          </div>
        </div>
      );
    });
    return JsxElements;
  } catch (error) {
    console.error("Error fetching transit data:", error);
  }
};
function TransitTable() {
  const [transitData, setTransitData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch transit data
    transitLoader()
      .then((jsxElements) => {
        setTransitData(jsxElements);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching transit data:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <section className="bg-[url('assets/iit.svg')] bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center">
      <div className="w-[1025px] h-[650px] rounded-[20px] shadow-3xl border-gray-800 flex flex-col justify-center bg-[#CDE8E8] opacity-80">
        {/* Form */}
        <Form className="flex justify-between items-start mt-0">
          <select className="w-full flex items-center gap-5s p-3 placeholder-black row-s">
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Visitor">Visitor</option>
            <option value="BlackList">BlackList</option>
          </select>
          <label className="text-3xl font-semibold flex justify-center items-center">
            Transit Record
          </label>
          <input
            type="search"
            placeholder="search"
            className="w-full flex items-center gap-5 p-3  placeholder-black ml-auto"
          ></input>
        </Form>

        {/* Header Table */}
        <div className="grid grid-cols-6 mt-0">
          <div className="col-span-1 bg-[#808080] rounded-tl-[20px] border border-gray-500 flex justify-center items-center">
            S.No
          </div>
          <div className="col-span-2 bg-[#808080] flex justify-center items-center border border-gray-500 ">
            TagID
          </div>
          <div className="col-span-1 bg-[#808080] flex justify-center items-center border border-gray-500">
            Time-limit
          </div>
          <div className="col-span-1 bg-[#808080] flex justify-center items-center border border-gray-500">
            Entry Time
          </div>
          <div className="col-span-1 bg-[#808080] flex justify-center items-center rounded-tr-[20px] border border-gray-500">
            Exit Time
          </div>
        </div>

        {/* Render loading indicator while data is being fetched */}
        {loading && <p>Loading...</p>}

        {/* Render transit data once it's fetched */}
        {!loading && transitData}
      </div>
    </section>
  );
}

export default TransitTable;
