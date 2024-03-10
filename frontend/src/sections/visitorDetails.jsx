import { Form, redirect, useLoaderData, useSubmit } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import SearchByMobile from "../components/SearchByMobile";
import { useState } from "react";

function VisitorDetails() {
  const [user, setUser] = useState(null);
  const [mobile, setMobile] = useState("");

  const tagId = useLoaderData();
  const submit = useSubmit();

  function handleSubmit(e) {
    e.preventDefault();
    submit(e.currentTarget);
    e.currentTarget.reset();
    setMobile("");
    setUser({});
  }

  console.log(document.cookie);

  return (
    <section className="bg-[url('assets/iit.svg')] bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center">
      <div className="w-[1025px] h-[650px] rounded-[20px] shadow-3xl border-gray-800 flex flex-row justify-center bg-[#CDE8E8] opacity-80">
        <Form method="POST" action="/" onSubmit={handleSubmit}>
          <label className="text-3xl font-semibold py-8 flex justify-center items-center">
            Visitor's Details
          </label>
          <div className="grid grid-cols-2 gap-5 rounded-full">
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Tag ID"
              name="tagId"
              defaultValue={tagId}
            />
            <SearchByMobile
              setUser={setUser}
              user={user}
              mobile={mobile}
              setMobile={setMobile}
            />
            <input
              className="hidden"
              type="text"
              name="mobileNumber"
              defaultValue={user?.mobileNumber || mobile}
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="First Name"
              name="firstName"
              defaultValue={
                user ? (user.name ? user.name.split(" ")[0] : "") : ""
              }
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Last Name"
              name="lastName"
              defaultValue={
                user ? (user.name ? user.name.split(" ")[1] || " " : "") : ""
              }
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
              name="purposeOfVisit"
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Email Id"
              name="email"
              defaultValue={user ? (user.email ? user.email : " ") : ""}
            />
            <input
              className="w-full flex items-center gap-5 p-3 rounded-full bg-[#5184B7] placeholder-black"
              type="text"
              placeholder="Place of Visit"
              name="placeOfVisit"
            />

            <div className="flex justify-center items-center">
              <Button label="Generate Token" />
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default VisitorDetails;

export const visitorAction = async function ({ request }) {
  const formData = await request.formData();

  console.log(Object.fromEntries(formData));

  const {
    tagId: tagID,
    mobileNumber,
    firstName,
    lastName,
    placeOfVisit,
    purposeOfVisit,
    email,
  } = Object.fromEntries(formData);

  const userRes = await axios.post(
    "http://127.0.0.1:8000/api/v1/users/signUp",
    { mobileNumber, name: firstName + lastName, email }
  );

  const { id } = userRes.data.data.user;

  await axios.post("http://127.0.0.1:8000/api/v1/tag", {
    tagID,
    placeOfVisit,
    purposeOfVisit,
    user: id,
  });

  return redirect("/");
};

export const visitorLoader = function () {
  const hex = "0123456789ABCDEF";
  let output = "";
  for (let i = 0; i < 8; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return output;
};
