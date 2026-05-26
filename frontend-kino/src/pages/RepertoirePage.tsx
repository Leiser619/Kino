// src/pages/RepertoirePage.tsx

import { useMemo, useState }
from "react";
import UserFooter from "../features/user/components/UserFooter";
import {
  useSearchParams,
} from "react-router-dom";

import UserMenu
from "../features/user/components/UserMenu";

import {
  useScreenings,
} from "../features/screening/hooks";

import type {
  Screening,
} from "../features/screening/types";

import ScreeningCard
from "../features/screening/ScreeningCard";

import {
  useGetNowPlayingMovies,
} from "../features/movie/hooks";

export default function RepertoirePage() {



  const {
    data: screenings,
    isLoading,
  } = useScreenings();



  const {
    data: movies,
  } = useGetNowPlayingMovies();

  const [searchParams] =
    useSearchParams();

  const movieFromUrl =
    searchParams.get("movie") || "";



  const [
    selectedHall,
    setSelectedHall,
  ] = useState("");

  const [
    selectedDate,
    setSelectedDate,
  ] = useState("");

  const [
    selectedMovie,
    setSelectedMovie,
  ] = useState(movieFromUrl);


  const uniqueHalls =
    [...new Set(
      screenings?.map(
        (s: Screening) =>
          s.hall.name
      )
    )];



  const uniqueMovies =
    movies ?? [];



  const filteredScreenings =
    useMemo(() => {

      if (!screenings) {
        return [];
      }

      return screenings.filter(
        (screening: Screening) => {

 

          const screeningDate =
            screening.startTime
              .split("T")[0];


          const movie =
            movies?.find(
              (m) =>
                m.tmdbId ===
                screening.tmdbMovieId
            );



          const hallMatch =
            !selectedHall ||
            screening.hall.name ===
            selectedHall;

          const dateMatch =
            !selectedDate ||
            screeningDate ===
            selectedDate;

          const movieMatch =
            !selectedMovie ||
            String(movie?.tmdbId) ===
            selectedMovie;

          return (
            hallMatch &&
            dateMatch &&
            movieMatch
          );
        }
      );

    }, [
      screenings,
      movies,
      selectedHall,
      selectedDate,
      selectedMovie,
    ]);


  if (isLoading) {

    return (
      <div className="p-10 text-white">
        Loading...
      </div>
    );
  }



  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
      "
    >

      <UserMenu />

      <main
        className="
          mx-auto
          max-w-7xl
          px-6
          py-10
        "
      >



        <div className="mb-10">

          <h1
            className="
              text-5xl
              font-black
            "
          >
            Repertuar
          </h1>

          <p
            className="
              mt-3
              text-zinc-400
            "
          >
            Aktualne pokazy kinowe
          </p>

        </div>



        <div
          className="
            mb-10
            grid
            grid-cols-4
            gap-4
          "
        >



          <select
            value={selectedHall}

            onChange={(e) =>
              setSelectedHall(
                e.target.value
              )
            }

            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              px-4
              py-3
            "
          >

            <option value="">
              Wszystkie sale
            </option>

            {uniqueHalls.map(
              (hall) => (

                <option
                  key={hall}
                  value={hall}
                >
                  {hall}
                </option>

              )
            )}

          </select>

      
          <select
            value={selectedMovie}

            onChange={(e) =>
              setSelectedMovie(
                e.target.value
              )
            }

            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              px-4
              py-3
            "
          >

            <option value="">
              Wszystkie filmy
            </option>

            {uniqueMovies.map(
              (movie) => (

                <option
                  key={movie.tmdbId}
                  value={movie.tmdbId}
                >
                  {movie.title}
                </option>

              )
            )}

          </select>



          <input
            type="date"

            value={selectedDate}

            onChange={(e) =>
              setSelectedDate(
                e.target.value
              )
            }

            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              px-4
              py-3
            "
          />

          {/* RESET */}

          <button
            onClick={() => {

              setSelectedHall("");
              setSelectedDate("");
              setSelectedMovie("");

            }}

            className="
              rounded-2xl
              bg-red-600
              px-6
              py-3
              font-semibold
              hover:bg-red-500
            "
          >
            Reset
          </button>

        </div>

        {/* SCREENINGS */}

        <div className="space-y-5">

          {filteredScreenings.map(
            (screening: Screening) => (

              <ScreeningCard
                key={screening.id}
                screening={screening}
              />

            )
          )}

        </div>

      </main>
      <UserFooter />
    </div>
  );
}