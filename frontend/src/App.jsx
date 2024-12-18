import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Login from "./sections/login.jsx";
import Profile from "./sections/profile.jsx";

import axios from "axios";
import { useEffect } from "react";
import CheckAuth from "./components/CheckAuth.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import { useUser } from "./conxtexts/userContext.jsx";
import Exit from "./sections/Exit.jsx";
import TransitTable from "./sections/transitTable.jsx";
import VisitorDetails from "./sections/visitorDetails.jsx";

function App() {
  const { setUser, setIsAuthenticated } = useUser();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/v1/users/getMe", {
        withCredentials: true,
      });

      if (!data) return;
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
        <Route index element={<Login />}></Route>
        <Route path="redirect" element={<CheckAuth />}></Route>

        <Route path="guard" element={<RequireAuth allowedRoles={["guard"]} />}>
          <Route index element={<VisitorDetails />}></Route>
          <Route path="transitTable" element={<TransitTable />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="exit" element={<Exit />}></Route>
        </Route>

        <Route
          element={
            <RequireAuth allowedRoles={["student", "teacher", "visitor"]} />
          }
        >
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
