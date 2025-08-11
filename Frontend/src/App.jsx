import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// import pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import NotFound from "./pages/NotFound";
import Rooms from "./pages/Rooms";
import Contact from "./pages/contact";
import Restaurant from "./pages/Restaurant";
import About from "./pages/About";
import Login from "./pages/Login";
import AnimatedGallery from "./components/AnimatedGallery ";
import Room from "./components/Room";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Admin from "./components/Admin";
import Adminlogin from "./components/Adminlogin";

// Main Layout component that includes Header and Footer
const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// Auth Layout for login/admin pages (no header/footer)
const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};

// Admin Layout for admin pages
const AdminLayout = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "rooms",
        element: <Rooms />,
      },
      {
        path: "room/:id",
        element: <RoomDetails />,
      },
      {
        path: "restaurants",
        element: <Restaurant />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "animated",
        element: <AnimatedGallery />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "cancel",
        element: <Cancel />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "admin-login",
        element: <Adminlogin />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute requireAdmin={true}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Admin />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
