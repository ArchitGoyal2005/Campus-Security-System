import ProfileCard from "../components/profileCard";
import TransitTable from "../components/transitRecord";

function Profile() {
  return (
    <section className="bg-[url('assets/iit.svg')] bg-cover bg-center bg-no-repeat flex flex-1 h-auto p-12 gap-12 items-start">
      <ProfileCard />
      <TransitTable />
    </section>
  );
}

export default Profile;
