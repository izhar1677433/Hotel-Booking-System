import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import NotFound from "./pages/NotFound";
import { Restaurant } from "@mui/icons-material";

import Rooms from "./pages/Rooms";
import Contact from "./pages/contact";
import RestaurantDetail from "./pages/Restaurant";
import About from "./pages/About";
import Login from "./pages/Login";
import AnimatedGallery from "./components/AnimatedGallery ";
import Room from "./components/Room";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  //da d wle cherhale dy?
  {
    path: "/room/:id",
    element: <RoomDetails />,
  },
  {
    path: "/restaurants",
    element: <RestaurantDetail />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pages/Login",
    element: <Login />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/animated",
    element: <AnimatedGallery />,
  },
  

  
  
]);

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />

      <Footer />
    </>
  );
};

export default App;
