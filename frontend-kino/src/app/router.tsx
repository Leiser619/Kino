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
]);