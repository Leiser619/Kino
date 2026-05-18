// src/features/movie/components/MovieInfo.tsx

type Props = {
  movie: any;
};

export default function MovieInfo({
  movie,
}: Props) {

  return (

    <div>

      <h2
        className="
          mb-8
          text-3xl
          font-black
        "
      >
        Informacje o filmie
      </h2>

      <div
        className="
          grid
          gap-6

          md:grid-cols-2
        "
      >

        <div
          className="
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900
            p-6
          "
        >

          <p className="text-sm text-zinc-400">
            Reżyser
          </p>

          <p className="mt-2 text-xl font-semibold">
            {movie.director}
          </p>

        </div>

        <div
          className="
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900
            p-6
          "
        >

          <p className="text-sm text-zinc-400">
            Data premiery
          </p>

          <p className="mt-2 text-xl font-semibold">
            {movie.releaseDate}
          </p>

        </div>

        <div
          className="
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900
            p-6
          "
        >

          <p className="text-sm text-zinc-400">
            Gatunek
          </p>

          <p className="mt-2 text-xl font-semibold">
            {movie.genre}
          </p>

        </div>

        <div
          className="
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900
            p-6
          "
        >

          <p className="text-sm text-zinc-400">
            Oryginalny język
          </p>

          <p className="mt-2 text-xl font-semibold">
            {movie.originalLanguage}
          </p>

        </div>

      </div>

    </div>
  );
}