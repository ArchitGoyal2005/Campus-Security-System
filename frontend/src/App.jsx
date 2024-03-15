import Layout from "./pages/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "./sections/login.jsx";
import Profile from "./sections/profile.jsx";

import VisitorDetails from "./sections/visitorDetails.jsx";
import { useEffect } from "react";
import axios from "axios";
import { useUser } from "./conxtexts/userContext.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import CheckAuth from "./components/CheckAuth.jsx";
import TransitTable from "./sections/transitTable.jsx";

function App() {
  const { setUser, setIsAuthenticated } = useUser();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/v1/users/getMe"
      );

      if (data.user) {
        setUser(data.user);

        setIsAuthenticated(true);
      }
    })();
  }, [setIsAuthenticated, setUser]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        {/* <Route index element={<Login />}></Route> */}
        <Route path="redirect" element={<CheckAuth />}></Route>

        <Route path="guard" element={<RequireAuth allowedRoles={["guard"]} />}>
          <Route index element={<VisitorDetails />}></Route>
          <Route path="transitTable" element={<TransitTable />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={["student", "teacher"]} />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
