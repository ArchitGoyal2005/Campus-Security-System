import ProfileCard from "../components/profileCard";
import TransitTable from "../components/transitRecord";

function Profile() {
  return (
    <section className="bg-[url('assets/iit.svg')] bg-cover bg-center bg-no-repeat flex p-12 gap-12 items-start h-full">
      <ProfileCard />
      <TransitTable />
    </section>
  );
}

export default Profile;
