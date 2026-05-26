// src/features/screening/ScreeningCard.tsx

import { Link }
from "react-router-dom";

import { useGetMovieById }
from "../movie/hooks";

type Props = {
  screening: any;
};

export default function ScreeningCard({
  screening,
}: Props) {

  const {
    data: movie,
  } = useGetMovieById(
    String(screening.tmdbMovieId)
  );

  if (!movie) {
    return null;
  }

  return (

    <div
      className="
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
      "
    >

      <div className="flex items-center gap-5">

        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="
            h-28
            w-20
            rounded-xl
            object-cover
          "
        />

        <div>

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            {movie.title}
          </h2>

          <p className="mt-2 text-zinc-400">
            {screening.hall.name}
          </p>

        </div>

      </div>

      <div className="text-right">

        <p
          className="
            text-2xl
            font-bold
          "
        >
          {new Date(
            screening.startTime
          ).toLocaleTimeString(
            [],
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          )}
        </p>

        <p className="mt-1 text-zinc-400">
          {screening.price} zł
        </p>

      </div>

      <Link
        to={`/screening/${screening.id}`}

        className="
          rounded-2xl
          bg-red-600
          px-6
          py-4
          font-semibold
          hover:bg-red-500
        "
      >
        Kup bilet
      </Link>

    </div>
  );
}