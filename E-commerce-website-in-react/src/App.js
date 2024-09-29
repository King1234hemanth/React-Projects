import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import List from "./Pages/List";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
} from "react-router-dom";
import ItemDetails from "./Pages/ItemDetails";
import Error from "./Pages/Error";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!loggedIn) return <Navigate to="/" replace={true} />;

    return children;
  };

  // making routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />,
        },
        // { path: "/list", element: <List /> },
        {
          path: "/contact",
          element: (
            <ProtectedRoute>
              {" "}
              <Contact />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/list",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  <List />{" "}
                </ProtectedRoute>
              ),
            },
            {
              path: ":id",
              element: (
                <ProtectedRoute>
                  {" "}
                  <ItemDetails />
                </ProtectedRoute>
              ),
            },
          ],
        },
      ],
    },
  ]);

  // 2nd way of making it
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />} />
      <Route path="/list" element={<List />} />
      <Route path="/contact" element={<Contact />} />
    </>
  );

  const router1 = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
