import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import Registration from "./views/Registration";
import Dashboard from "./views/Dashboard";
import Notices from "./views/Notices";

// You can add your routes here
// Add a baselayout too if needed

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },

  {
    path: "/login",
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/registration",
    children: [
      {
        index: true,
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/notices",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Notices />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      {/* if you have any context which should include in everywhere of the application you can wrap this RouterProvider with that context */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
