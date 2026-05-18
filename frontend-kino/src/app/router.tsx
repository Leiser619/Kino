import { createBrowserRouter } from "react-router-dom";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import AdminPage from "../pages/Admin/AdminPage"

const DashboardPage = () => <div>Dashboard</div>;
const GamePage = () => <div>Gra</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/movies",
    element: <DashboardPage />
  },
  {
    path: "/admin",
    element: <AdminPage />
  },
]);