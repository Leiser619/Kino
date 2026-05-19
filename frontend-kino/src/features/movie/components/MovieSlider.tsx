// src/features/movie/components/MovieSlider.tsx

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useRef } from "react";

import { Link } from "react-router-dom";

import {
  useGetMovies,
  useGetNowPlayingMovies,
  useGetTrendingMovies,
  useGetFamilyMovies,
} from "../hooks";

type MovieSliderType =
  | "category"
  | "now-playing"
  | "trending"
  | "family";

type MovieSliderProps = {
  title: string;

  category?: string;

  type?: MovieSliderType;
};

export const MovieSlider = ({
  title,
  category,
  type = "category",
}: MovieSliderProps) => {

  const categoryQuery =
    useGetMovies(
      category!,
      type === "category"
    );

  const nowPlayingQuery =
    useGetNowPlayingMovies(
      type === "now-playing"
    );

  const trendingQuery =
    useGetTrendingMovies(
      type === "trending"
    );

  const familyQuery =
    useGetFamilyMovies(
      type === "family"
    );

  const currentQuery =
    type === "now-playing"
      ? nowPlayingQuery
      : type === "trending"
      ? trendingQuery
      : type === "family"
      ? familyQuery
      : categoryQuery;

  const {
    data: movies,
    isLoading,
    error,
  } = currentQuery;

  const sliderRef =
    useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return (
      <div className="py-6 text-white">
        Loading movies...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-6 text-red-500">
        Error loading movies
      </div>
    );
  }

  return (

    <section className="relative w-full py-6">

      {/* HEADER */}
      <div className="mb-5 flex items-center justify-between">

        <h2
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          {title}
        </h2>

        <div className="flex gap-2">

          <button
            onClick={scrollLeft}
            className="
              rounded-full
              bg-zinc-800
              p-2
              text-white
              transition
              hover:bg-zinc-700
            "
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            className="
              rounded-full
              bg-zinc-800
              p-2
              text-white
              transition
              hover:bg-zinc-700
            "
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="
          flex
          gap-5
          overflow-x-hidden
          scroll-smooth
        "
      >

        {movies?.map((movie) => (

          <Link
            key={movie.tmdbId}
            to={`/movie/${movie.tmdbId}`}
            className="
              group
              min-w-full
              overflow-hidden
              rounded-2xl
              bg-zinc-900
              transition
              hover:scale-[1.02]

              sm:min-w-[48%]
              lg:min-w-[23%]
            "
          >

            {/* POSTER */}
            <div className="relative overflow-hidden">

              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="
                  h-[380px]
                  w-full
                  object-cover
                  transition
                  duration-300

                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/20
                  to-transparent
                "
              />

            </div>

            {/* INFO */}
            <div className="p-4">

              <h3
                className="
                  line-clamp-1
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {movie.title}
              </h3>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  justify-between
                "
              >

                <p className="text-sm text-zinc-400">
                  {movie.duration} min
                </p>

                <p className="text-sm text-yellow-400">
                   {movie.imdbRating}
                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
};