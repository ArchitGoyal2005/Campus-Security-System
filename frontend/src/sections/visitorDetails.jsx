import Button from "../components/Button";
import axios from "axios";
import SearchByMobile from "../components/SearchByMobile";
import { useEffect, useState } from "react";
import { profile } from "../assets";

function VisitorDetails() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    purposeOfVisit: "",
    email: "",
    placeOfVisit: "",
  });
  const [mobile, setMobile] = useState("");
  const [tagId, setTagId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hex = "0123456789ABCDEF";
    let output = "";
    for (let i = 0; i < 8; ++i) {
      output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    setTagId(output);
    setSubmitted(false);
  }, [submitted]);

  // Function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    // Handle form submission here
    try {
      formData.mobileNumber = mobile;
      const {
        firstName,
        lastName,
        placeOfVisit,
        purposeOfVisit,
        email,
        mobileNumber,
        photo,
      } = formData;

      if (!firstName) return setError("Enter the name of the user");

      let id;

      if (user === null) {
        const userRes = await axios.post(
          "/api/v1/users/",
          {
            mobileNumber,
            name: firstName + lastName,
            email,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        id = userRes.data.data.user.id;
      } else {
        id = user;
      }

      const a = await axios.post(
        "/api/v1/tag",
        {
          tagID: tagId,
          placeOfVisit,
          purposeOfVisit,
          user: id,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      setError(error.message);
    }

    window.location.reload();
  }

  return (
    <section className="bg-[url('assets/iit.svg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="w-[1025px] h-[650px] rounded-[20px] shadow-3xl border-gray-800 flex flex-row justify-center bg-[#CDE8E8] opacity-80 mt-20">
        <form onSubmit={handleSubmit}>
          <label className="text-3xl font-semibold py-8 flex justify-center items-center">
            Visitor's Details
          </label>
          <div className="flex justify-center items-center pb-6 gap-1">
            <SearchByMobile
              setUser={setUser}
              user={user}
              mobile={mobile}
              setMobile={setMobile}
              setFormData={setFormData}
            />
          </div>

          <div className="grid grid-cols-2 gap-5 rounded-full">
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Tag ID"
              name="tagId"
              value={tagId}
              onChange={(e) => setTagId(e.target.value)}
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Purpose of Visit"
              name="purposeOfVisit"
              value={formData.purposeOfVisit}
              onChange={(e) =>
                setFormData({ ...formData, purposeOfVisit: e.target.value })
              }
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Email Id"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Place of Visit"
              name="placeOfVisit"
              value={formData.placeOfVisit}
              onChange={(e) =>
                setFormData({ ...formData, placeOfVisit: e.target.value })
              }
            />

            <div className="w-full flex items-center gap-5 p-3 rounded-full  font-bold placeholder-black">
              USER PHOTO
            </div>
            <div className="w-full flex items-center gap-5 p-3 rounded-full  placeholder-black">
              <img src={profile} alt="User" width={100} />
            </div>

            <div className="flex justify-center items-center"></div>
            {error === "" ? "" : <p>{error}</p>}
          </div>
          <div className="flex justify-center items-center pt-6">
            <Button label="Generate Token" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default VisitorDetails;
