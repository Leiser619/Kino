// src/features/movie/components/MovieHero.tsx

type Props = {
  movie: any;
};

export default function MovieHero({
  movie,
}: Props) {

  return (

    <section
      className="
        relative
        flex
        min-h-[85vh]
        items-end
        overflow-hidden
      "
    >

      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          scale-105
          object-cover
          opacity-30
          blur-sm
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/70
          to-black/20
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          gap-12
          px-6
          py-24

          lg:grid-cols-[350px_1fr]
          lg:px-10
        "
      >

        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            shadow-2xl
          "
        >

          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="
              h-full
              w-full
              object-cover
            "
          />

        </div>

        <div
          className="
            flex
            flex-col
            justify-end
          "
        >

          <p
            className="
              mb-4
              text-sm
              uppercase
              tracking-[0.3em]
              text-red-500
            "
          >
            {movie.genre}
          </p>

          <h1
            className="
              max-w-4xl
              text-5xl
              font-black
              leading-tight

              md:text-7xl
            "
          >
            {movie.title}
          </h1>

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-4
            "
          >

            <div
              className="
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/70
                px-5
                py-3
              "
            >

              <p className="text-xs text-zinc-400">
                IMDb
              </p>

              <p className="font-semibold">
                ⭐ {movie.imdbRating}
              </p>

            </div>

            <div
              className="
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/70
                px-5
                py-3
              "
            >

              <p className="text-xs text-zinc-400">
                Czas trwania
              </p>

              <p className="font-semibold">
                {movie.duration} min
              </p>

            </div>

            <div
              className="
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/70
                px-5
                py-3
              "
            >

              <p className="text-xs text-zinc-400">
                Język
              </p>

              <p className="font-semibold">
                {movie.originalLanguage}
              </p>

            </div>

          </div>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-zinc-300
            "
          >
            {movie.description}
          </p>

          <div
            className="
              mt-10
              flex
              gap-4
            "
          >
            <button
              className="
                rounded-2xl
                border
                border-zinc-700
                px-8
                py-4
                font-semibold
                transition

                hover:border-red-500
                hover:text-red-500
              "
            >
              Dodaj do ulubionych
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}