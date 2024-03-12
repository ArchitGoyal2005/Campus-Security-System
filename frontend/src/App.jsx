import Layout from "./pages/Layout.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./sections/login.jsx";
import { loginAction } from "./components/LoginForm.jsx";

import VisitorDetails, {
  visitorAction,
  visitorLoader,
} from "./sections/visitorDetails.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} action={visitorAction}>
        <Route
          index
          element={<VisitorDetails />}
          action={visitorAction}
          loader={visitorLoader}
        ></Route>
        <Route path="login" element={<Login />} action={loginAction}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
