import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import AboutClass from "./components/AboutClass";
import RestraurantMenu from "./components/RestraurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";

// Chunking || Code Splitting || Dynamic Bundling || Lazy Loading || On Demand Loading || Dynamic Import
const Instamart = lazy(() => import("./components/Instamart")); // this is promise
// Upon on demand loading -> on reander -> react will suspend loading and throw error

const AppLayout = () => {
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
        element: <AboutClass />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>  
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
