import ProfileCard from "../components/profileCard";
import Button from "../components/Button";

function Exit() {
  return (
    <div className="bg-[url('assets/iit.svg')] bg-cover bg-center bg-no-repeat h-screen">
      <div className="flex justify-center pt-10 font-semibold">
        <ProfileCard />
      </div>
      <div className="flex justify-center mt-8 font-semibold ">
        <Button label={"Exit"} />
      </div>
    </div>
  );
}

export default Exit;
