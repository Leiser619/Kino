import { createBrowserRouter } from "react-router-dom";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import AdminPage from "../pages/Admin/AdminPage"
import MovieDetailsPage from "../pages/MovieDetailsPage";
import AdminHallPage from "../pages/Admin/AdminHallPage";
import AdminScreeningsPage from "../pages/Admin/AdminScreeningPage";
import ScreeningDetailsPage from "../pages/ScreeningDetailsPage";
import RepertoirePage from "../pages/RepertoirePage";
import VipPage from "../pages/Informations/VipPage";
import VipCardPage from "../pages/VipCardPage";
import BarPage from "../pages/Informations/BarPage";
import AdminEmployeesPage from "../pages/Admin/AdminEmployeesPage";
import GiftPage from "../pages/Informations/GiftPage";
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
    path: "/movie/:imdbId",
    element: <MovieDetailsPage />
  },
  {
    path: "/screening/:id",
    element: <ScreeningDetailsPage />
  },
  {
    path: "/repertoir",
    element: <RepertoirePage />
  },
  {
    path: "/vipPage",
    element: <VipPage />
  },
  {
    path: "/vipCard",
    element: <VipCardPage />
  },
  {
    path: "/barPage",
    element: <BarPage />
  },
  {
    path: "/gifts",
    element: <GiftPage />
  },



  //admin routes
  {
    path: "/admin",
    element: <AdminPage />
  },
  {
    path: "/admin/halls",
    element: <AdminHallPage />
  },
  {
    path: "/admin/screenings",
    element: <AdminScreeningsPage />
  },
  {
    path: "/admin/employees",
    element: <AdminEmployeesPage />
  },
]);