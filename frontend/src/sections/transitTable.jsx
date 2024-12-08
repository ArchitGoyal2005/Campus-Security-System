import axios from "axios";
import { useState, useEffect } from "react";
import TransitTableForm from "../components/TransitTableForm";

export const transitLoader = async (formData, page, setDataLength, number) => {
  try {
    const data = { ...formData, limit: 5, page };
    const queryParams = Object.entries(data)
      .filter(
        ([key, value]) =>
          value !== undefined && value !== null && value !== "" && value !== 0
      )
      .map(
        ([key, value]) =>
          `${key}=${encodeURIComponent(value.toString().toLowerCase())}`
      )
      .join("&");

    const queryString = queryParams.length > 0 ? `?${queryParams}` : "";

    const link = `/api/v1/transit${queryString}`;

    console.log(link);
    const transitReq = await axios.get(link, {
      withCredentials: true,
    });
    const transitData = transitReq.data.data.doc;
    console.log(transitData);
    setDataLength(transitData.length);

    const JsxElements = transitData.map((transit, i) => {
      const entryTime = new Date(transit.entryTime);
      const exitTime = new Date(transit.exitTime);

      // Format entry time and exit time as time strings
      const entryTimeString = entryTime.toLocaleString();
      const exitTimeString = exitTime.toLocaleString();
      console.log(exitTime);

      let durationString = "In the campus";
      if (exitTime) {
        const durationMillis = exitTime.getTime() - entryTime.getTime();
        const totalMinutes = Math.floor(durationMillis / (60 * 1000)); // Total minutes
        const timeHours = Math.floor(totalMinutes / 60); // Total hours
        const minutesLeft = totalMinutes % 60;

        if (totalMinutes < 60) {
          // If duration is less than an hour, show in minutes
          durationString = `${totalMinutes} mins`;
        } else {
          // If duration is in hours and days
          const daysLeft = Math.floor(timeHours / 24);
          const hoursLeft = timeHours % 24;
          durationString = `${
            daysLeft ? daysLeft + " days " : ""
          }${hoursLeft} hrs`;
        }
      }
      return (
        <div className="grid grid-cols-8 divide-y divide-[#82B1C1]" key={i}>
          <div className="col-span-1 p-3 text-md text-gray-700  font-semibold text-center">
            {number + i}
          </div>
          <div className="col-span-1 p-3 text-md text-gray-700  font-semibold text-center">
            {transit.userName}
          </div>
          <div className="col-span-1 p-3 text-md text-gray-700  font-semibold text-center">
            {transit.tagID}
          </div>
          <div className="col-span-1 p-3 text-md text-gray-700  font-semibold text-center">
            {durationString}
          </div>
          <div className="col-span-1 p-3 text-md text-gray-700  font-semibold text-center">
            {entryTimeString}
          </div>
          <div className="col-span-1 p-3 text-md text-gray-700  font-semibold text-center">
            {!isNaN(exitTime.getTime()) ? exitTimeString : "In the campus"}
          </div>
          <div className="col-span-1 p-3 text-md text-gray-700  font-semibold text-center">
            {transit.entryGate}
          </div>
          <div className="col-span-1 p-3 text-md text-gray-700  font-semibold text-center">
            {transit.exitGate || "In the campus"}
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
  const [formData, setFormData] = useState({
    userRole: "",
    search: "",
    entryGate: 0,
    exitGate: 0,
    entryTime: "",
    exitTime: "",
  });
  const [page, setPage] = useState(1);
  const [dataLength, setDataLength] = useState(0);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    // Fetch transit data
    transitLoader(formData, page, setDataLength, number)
      .then((jsxElements) => {
        setTransitData(jsxElements);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching transit data:", error);
        setLoading(false);
      });
  }, [formData, page, number]);

  return (
    <section className="bg-[url('assets/iit.svg')] bg-cover bg-center bg-no-repeat h-fit flex justify-center items-center ">
      <div className="w-[1025px] h-auto rounded-[20px] shadow-3xl border-gray-800 flex flex-col justify-center bg-[#CDE8E8] opacity-80 py-10 px-5 mt-20 ">
        <div className="flex justify-between  items-center">
          <button
            className=" font-semibold"
            onClick={() => {
              setPage(page - 1);
              setNumber(number - 5);
            }}
          >
            {page > 1 && "⬅️Prev Page"}
          </button>
          <h1 className="  flex justify-center mb-8 text-3xl  font-bold">
            Transit Record
          </h1>
          <button
            className="font-semibold"
            onClick={() => {
              setPage(page + 1);
              setNumber(number + 5);
            }}
          >
            {dataLength < 8 && "Next Page➡️"}
          </button>
        </div>

        <TransitTableForm formData={formData} setFormData={setFormData} />

        {/* Header Table */}
        <div className="grid grid-cols-8 divide-y divide-[#82B1C1]  mx-4 mt-10">
          <div className="col-span-1 bg-[#82B1C1] border-b-2 border-[#82B1C1] rounded-tl-[20px] border  flex justify-center items-center">
            S.No
          </div>
          <div className="col-span-1 bg-[#82B1C1] border-b-2 border-[#82B1C1]  border  flex justify-center items-center">
            Name
          </div>
          <div className="col-span-1 bg-[#82B1C1] border-b-2 border-[#82B1C1] flex justify-center items-center border  ">
            TagID
          </div>
          <div className="col-span-1 bg-[#82B1C1] border-b-2 border-[#82B1C1] flex justify-center items-center border ">
            Duration
          </div>
          <div className="col-span-1 bg-[#82B1C1] border-b-2 border-[#82B1C1] flex justify-center items-center border ">
            Entry Time
          </div>
          <div className="col-span-1 bg-[#82B1C1] border-b-2 border-[#82B1C1] flex justify-center items-center  border ">
            Exit Time
          </div>
          <div className="col-span-1 bg-[#82B1C1] border-b-2 border-[#82B1C1] flex justify-center items-center  border ">
            Entry Gate
          </div>
          <div className="col-span-1 bg-[#82B1C1] border-b-2 border-[#82B1C1] flex justify-center items-center rounded-tr-[20px] border ">
            Exit Gate
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
