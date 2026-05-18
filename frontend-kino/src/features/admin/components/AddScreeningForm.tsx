// src/features/admin/components/AddScreeningForm.tsx

import { useState } from "react";

import {
  useCreateScreening,
  useHalls,
  useNowPlayingMovies,
} from "../hooks";

export default function AddScreeningForm() {

  const {
    data: movies,
  } = useNowPlayingMovies();

  const {
    data: halls,
  } = useHalls();

  const createScreening =
    useCreateScreening();

  //
  // STATE
  //

  const [
    tmdbMovieId,
    setTmdbMovieId,
  ] = useState<number>();

  const [hallId, setHallId] =
    useState<number>();

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  const [price, setPrice] =
    useState(29.99);

  //
  // SUBMIT
  //

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    if (
      !tmdbMovieId ||
      !hallId
    ) {
      return;
    }

    const startTime =
      `${date}T${time}:00`;

    createScreening.mutate({
      tmdbMovieId,
      hallId,
      startTime,
      price,
    });
  }

  return (

    <form
      onSubmit={handleSubmit}

      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-8
      "
    >

      <h2 className="mb-8 text-2xl font-bold text-white">
        Dodaj pokaz
      </h2>

      <div className="space-y-6">

        {/* MOVIE */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Film
          </label>

          <select
            value={tmdbMovieId}

            onChange={(e) =>
              setTmdbMovieId(
                Number(
                  e.target.value
                )
              )
            }

            className="
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-950
              px-4
              py-3
              text-white
            "
          >

            <option value="">
              Wybierz film
            </option>

            {movies?.map(
              (movie: any) => (

                <option
                  key={movie.imdbId}
                  value={
                    movie.imdbId
                  }
                >
                  {movie.title}
                </option>

              )
            )}

          </select>

        </div>

        {/* HALL */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Sala
          </label>

          <select
            value={hallId}

            onChange={(e) =>
              setHallId(
                Number(
                  e.target.value
                )
              )
            }

            className="
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-950
              px-4
              py-3
              text-white
            "
          >

            <option value="">
              Wybierz salę
            </option>

            {halls?.map(
              (hall: any) => (

                <option
                  key={hall.id}
                  value={hall.id}
                >
                  {hall.name}
                </option>

              )
            )}

          </select>

        </div>

        {/* DATE */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Data
          </label>

          <input
            type="date"

            value={date}

            onChange={(e) =>
              setDate(
                e.target.value
              )
            }

            className="
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-950
              px-4
              py-3
              text-white
            "
          />

        </div>

        {/* TIME */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Godzina
          </label>

          <input
            type="time"

            value={time}

            onChange={(e) =>
              setTime(
                e.target.value
              )
            }

            className="
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-950
              px-4
              py-3
              text-white
            "
          />

        </div>

        {/* PRICE */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Cena biletu
          </label>

          <input
            type="number"

            value={price}

            onChange={(e) =>
              setPrice(
                Number(
                  e.target.value
                )
              )
            }

            className="
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-950
              px-4
              py-3
              text-white
            "
          />

        </div>

      </div>

      {/* SUCCESS */}

      {createScreening.isSuccess && (

        <div
          className="
            mt-6
            rounded-2xl
            border
            border-emerald-500/20
            bg-emerald-500/10
            p-4
            text-sm
            text-emerald-400
          "
        >
          Pokaz został dodany
        </div>

      )}

      {/* ERROR */}

      {createScreening.isError && (

        <div
          className="
            mt-6
            rounded-2xl
            border
            border-red-500/20
            bg-red-500/10
            p-4
            text-sm
            text-red-400
          "
        >
          Nie udało się dodać pokazu
        </div>

      )}

      {/* BUTTON */}

      <button
        type="submit"

        disabled={
          createScreening.isPending
        }

        className="
          mt-8
          w-full
          rounded-2xl
          bg-blue-600
          px-6
          py-4
          font-medium
          text-white
          transition

          hover:bg-blue-500

          disabled:opacity-50
        "
      >

        {createScreening.isPending
          ? "Dodawanie..."
          : "Dodaj pokaz"}

      </button>

    </form>
  );
}