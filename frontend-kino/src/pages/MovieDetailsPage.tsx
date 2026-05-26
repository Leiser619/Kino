// src/pages/MovieDetailsPage.tsx

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import UserFooter
from "../features/user/components/UserFooter";

import UserMenu
from "../features/user/components/UserMenu";

import MovieHero
from "../features/movie/components/MovieHero";

import MovieInfo
from "../features/movie/components/MovieInfo";

import MovieTrailer
from "../features/movie/components/MovieTrailer";

import {
  useGetMovieById,
} from "../features/movie/hooks";

import MovieReviews
from "../features/reviews/components/MovieReviews";

export default function MovieDetailsPage() {

  const {
    imdbId,
  } = useParams<{
    imdbId: string;
  }>();

  const navigate =
    useNavigate();

  const {
    data: movie,
    isLoading,
    error,
  } = useGetMovieById(
    imdbId || ""
  );

  if (isLoading) {

    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-black
          text-white
        "
      >
        Ładowanie filmu...
      </div>
    );

  }

  if (error || !movie) {

    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-black
          text-white
        "
      >
        Nie znaleziono filmu.
      </div>
    );

  }

  const handleBuyTicket =
    () => {

      navigate(
        `/repertoir?movie=${movie.tmdbId}`
      );

    };

  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
      "
    >

      <UserMenu />

      <MovieHero movie={movie} />

      {/* MAIN CONTENT */}

      <main
        className="
          mx-auto
          grid
          max-w-7xl
          gap-10
          px-6
          py-14
          lg:grid-cols-[1fr_400px]
        "
      >

        {/* LEFT */}

        <div className="space-y-8">

          <MovieInfo movie={movie} />

          <button
            onClick={handleBuyTicket}
            className="
              rounded-2xl
              bg-red-600
              px-8
              py-4
              text-lg
              font-bold
              transition
              hover:bg-red-500
            "
          >
            Kup bilet
          </button>

        </div>

        {/* RIGHT */}

        <MovieTrailer
          trailerUrl={
            movie.trailerUrl
          }
        />

      </main>

      {/* REVIEWS */}

      <section
        className="
          mx-auto
          w-full
          max-w-7xl
          px-6
          pb-24
        "
      >

        <MovieReviews
          tmdbId={
            movie.tmdbId.toString()
          }
        />

      </section>

      <UserFooter />

    </div>
  );
}