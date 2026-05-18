// src/pages/MovieDetailsPage.tsx

import { useParams } from "react-router-dom";

import MovieHero from "../features/movie/components/MovieHero";
import MovieInfo from "../features/movie/components/MovieInfo";
import MovieTrailer from "../features/movie/components/MovieTrailer";

import { useMovieBySearchKey } from "../features/movie/hooks";

export default function MovieDetailsPage() {

  const { searchKey } = useParams();

  const { data: movie, isLoading } =
    useMovieBySearchKey(searchKey || "");

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

  if (!movie) {
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

  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
      "
    >

      <MovieHero movie={movie} />

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

        <MovieInfo movie={movie} />

        <MovieTrailer trailerUrl={movie.trailerUrl} />

      </main>

    </div>
  );
}