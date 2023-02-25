import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import RestraurantMenu from "./components/RestraurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(() => import("./components/Instamart")); 
const AboutClass = lazy(() => import("./components/AboutClass"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Mrityunjay",
    email: "Mrityunjay@gmail.com",
  });
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <AboutClass />
          </Suspense>
        ),
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestraurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
