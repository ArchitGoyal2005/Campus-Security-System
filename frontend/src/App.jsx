import Layout from "./pages/Layout.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./sections/login.jsx";
import VisitorDetails, {
  visitorAction,
  visitorLoader,
} from "./sections/visitorDetails.jsx";
import { useEffect } from "react";
import axios from "axios";
import { useUser } from "./conxtexts/userContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} action={visitorAction}>
        <Route
          path="guard"
          element={<VisitorDetails />}
          action={visitorAction}
          loader={visitorLoader}
        ></Route>
        <Route path="login" element={<Login />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
