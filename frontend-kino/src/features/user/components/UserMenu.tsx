// src/features/user/components/UserMenu.tsx

import { useNavigate }
from "react-router-dom";
import logo from "../../../assets/logo.png";
import {
  useMovieSearch,
} from "../../movie/hooks";
import {
  Search,
  MapPin,
  Shield,
  LogOut,
} from "lucide-react";

import {
  useLogout,
  useMe,
} from "../../auth/hooks";
import { useState } from "react";

export default function UserMenu() {

  const navigate =
    useNavigate();

  const {
    data: user,
    isLoading,
  } = useMe();
  const [searchValue, setSearchValue] =
  useState("");

  const {
    data: searchedMovie,
  } = useMovieSearch(searchValue);


  const logoutMutation =
    useLogout();


  const navItems = [

    {
      label: "Główna",
      path: "/",
    },

    {
      label: "Repertuar",
      path: "/repertoir",
    },

    {
      label: "Prezenty",
      path: "/gifts",
    },

    {
      label: "VIP",
      path: "/vipPage",
    },

    {
      label: "VIP Card",
      path: "/vipCard",
    },

    {
      label: "Bar",
      path: "/barPage",
    },

  ];


  const handleSearch =
    () => {

    if (!searchedMovie) {
      return;
    }

    navigate(
      `/movie/${searchedMovie.tmdbId}`
    );

    setSearchValue("");
  };
  const handleLogout =
    () => {
      logoutMutation.mutate();
    };


  return (

    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        border-zinc-800
        bg-black/95
        backdrop-blur
      "
    >

      {/* TOP BAR */}

      <div
        className="
          flex
          h-[80px]
          items-center
          justify-between
          px-8
        "
      >

        {/* LEFT */}

        <div
          className="
            flex
            items-center
            gap-8
          "
        >

          <img
            src={logo}
            alt="Logo"

            className="
              h-12
              w-auto
              cursor-pointer
            "

            onClick={() =>
              navigate("/")
            }
          />

          <button
            className="
              flex
              items-center
              gap-2
              text-sm
              text-zinc-300
              transition
              hover:text-red-500
            "
          >

            <MapPin size={16} />

            Wybierz kino

          </button>

        </div>

        {/* CENTER */}

        <div
          className="
            hidden
            w-full
            max-w-xl
            items-center
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-900
            px-4
            py-3
            lg:flex
          "
        >
        <Search
          size={18}

          onClick={handleSearch}

          className="
            cursor-pointer
            text-zinc-500
            transition
            hover:text-red-500
          "
        />
          <input
            type="text"

            value={searchValue}

            onChange={(e) =>
              setSearchValue(
                e.target.value
              )
            }

            onKeyDown={(e) => {

              if (e.key === "Enter") {
                handleSearch();
              }

            }}

            placeholder="Szukaj filmów..."

            className="
              ml-3
              w-full
              bg-transparent
              text-sm
              text-white
              outline-none
              placeholder:text-zinc-500
            "
          />

        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {/* LOADING */}

          {isLoading && (

            <div
              className="
                text-sm
                text-zinc-400
              "
            >
              Ładowanie...
            </div>
          )}

          {/* GUEST */}

          {!isLoading && !user && (
            <>

              <button
                onClick={() =>
                  navigate("/login")
                }

                className="
                  rounded-xl
                  border
                  border-zinc-700
                  px-5
                  py-2
                  text-sm
                  text-white
                  transition
                  hover:border-red-500
                  hover:text-red-500
                "
              >
                Logowanie
              </button>

              <button
                onClick={() =>
                  navigate("/register")
                }

                className="
                  rounded-xl
                  bg-red-600
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-red-500
                "
              >
                Rejestracja
              </button>

            </>
          )}

          {/* USER */}

          {!isLoading && user && (

            <div
              className="
                flex
                items-center
                gap-5
              "
            >

              {/* ADMIN */}

              {user.role === "ADMIN" && (

                <button
                  onClick={() =>
                    navigate("/admin")
                  }

                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-red-600
                    px-4
                    py-2
                    text-sm
                    text-red-500
                    transition
                    hover:bg-red-600
                    hover:text-white
                  "
                >

                  <Shield size={16} />

                  Admin

                </button>
              )}

              {/* PROFILE */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-red-600
                    font-semibold
                    text-white
                  "
                >
                  {user.email?.[0]
                    ?.toUpperCase()}
                </div>

                <div>

                  <p
                    className="
                      text-sm
                      text-white
                    "
                  >
                    {user.email}
                  </p>

                  <button
                    onClick={() =>
                      navigate("/profile")
                    }

                    className="
                      text-xs
                      text-zinc-400
                      hover:text-red-500
                    "
                  >
                    Profil
                  </button>

                </div>

              </div>

              {/* LOGOUT */}

              <button
                onClick={handleLogout}

                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-zinc-700
                  px-4
                  py-2
                  text-sm
                  text-zinc-300
                  transition
                  hover:border-red-500
                  hover:text-red-500
                "
              >

                <LogOut size={16} />

                Wyloguj

              </button>

            </div>
          )}

        </div>

      </div>

      {/* NAVBAR */}

      <div
        className="
          flex
          items-center
          justify-center
          gap-10
          border-t
          border-zinc-800
          px-6
          py-4
        "
      >

        {navItems.map(
          (item) => (

            <button
              key={item.label}

              onClick={() =>
                navigate(item.path)
              }

              className="
                text-sm
                font-medium
                text-zinc-300
                transition
                hover:text-red-500
              "
            >
              {item.label}
            </button>

          )
        )}

      </div>

    </header>
  );
}