// src/pages/MainPage.tsx

import UserMenu from "../features/user/components/UserMenu";
import UserFooter from "../features/user/components/UserFooter";
import { MovieSlider } from "../features/movie/components/MovieSlider";

export default function MainPage() {

  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
      "
    >

      <UserMenu />
      <section
        className="
          relative
          flex
          h-[75vh]
          items-end
          overflow-hidden
          pt-[120px]
        "
      >

        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"

          alt="Cinema"

          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-40
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/40
            to-transparent
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
            px-8
            pb-20
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
            CineFile D&I
          </p>

          <h1
            className="
              max-w-3xl
              text-5xl
              font-black
              leading-tight

              md:text-7xl
            "
          >
            Odkrywaj najlepsze filmy w kinie
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              text-zinc-300
            "
          >
            Najnowsze premiery, filmy trending
            oraz repertuar dopasowany do
            Ciebie.
          </p>

          <div className="mt-8 flex gap-4">

            <button
              className="
                rounded-2xl
                bg-red-600
                px-8
                py-4
                font-semibold
                text-white
                transition

                hover:bg-red-500
              "
            >
              Kup bilety
            </button>

            <button
              className="
                rounded-2xl
                border
                border-zinc-700
                px-8
                py-4
                font-semibold
                text-white
                transition

                hover:border-red-500
                hover:text-red-500
              "
            >
              Zobacz repertuar
            </button>

          </div>

        </div>
      </section>

      <main
        className="
          mx-auto
          max-w-7xl
          px-6
          py-10
        "
      >

        <MovieSlider
          title="Teraz grane"
          type="now-playing"
        />

        <MovieSlider
          title="Trending"
          type="trending"
        />

        <MovieSlider
          title="Familijne"
          type="family"
        />

      </main>
      <UserFooter />
    </div>
  );
}