import { iitroorkee } from "../assets";

function ProfileCard() {
  return (
    <section className="h-full">
      <div className="h-full">
        <div className="w-96 h-full rounded-[20px] shadow-3xl bg-[#CDE8E8] opacity-80">
          <div className="flex justify-center py-8">
            <img
              className="rounded-full"
              width={125}
              height={125}
              src={iitroorkee}
              alt="logo"
            />
          </div>
          <div className="flex justify-center font-bold text-xl">
            <h1>Indian Institute of Technology Roorkee</h1>
          </div>

          <div className="grid grid-rows-4 text-xl p-10 leading-relaxed">
            <p>Phone Number: 88xxxxxxxx</p>
            <p>Roll No.: xxxxxxxxxx</p>
            <p>Branch: Computer Science</p>
            <p>Hostel: 4</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
