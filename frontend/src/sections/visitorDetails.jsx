import Button from "../components/Button";

function VisitorDetails() {
  return (
    <section className="bg-[url('assets/iit.svg')] bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center">
      <div className="w-[1025px] h-[650px] rounded-[20px] shadow-3xl border-gray-800 flex flex-row justify-center bg-[#CDE8E8] opacity-80">
        <div>
          <h1 className="text-3xl font-semibold py-8 flex justify-center items-center">
            Visitor's Details
          </h1>
          <div className="grid grid-cols-2 gap-5 rounded-full ">
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="First Name"
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Phone Number"
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Company"
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Purpose of Visit"
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Email Id"
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Visiting to"
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Time Limit of Token"
            />
            <div className="flex justify-center items-center">
              <Button label="Generate Token" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitorDetails;
