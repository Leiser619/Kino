import { useState } from "react";

import { useCreateHall } from "../hooks";

type HallType =
  | "NORMAL"
  | "VIP"
  | "IMAX"
  | "4DX";

export default function AddHallForm() {

  const createHallMutation =
    useCreateHall();

  const [name, setName] =
    useState("");

  const [rows, setRows] =
    useState(10);

  const [columns, setColumns] =
    useState(12);

  const [type, setType] =
    useState<HallType>("NORMAL");

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    createHallMutation.mutate(
      {
        name,
        rows,
        columns,
        type,
      },

      {
        onSuccess: () => {

          setName("");

          setRows(10);

          setColumns(12);

          setType("NORMAL");
        },
      }
    );
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

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          Dodaj salę
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Utwórz nową salę kinową
        </p>

      </div>

      <div className="grid grid-cols-2 gap-6">

        {/* NAME */}

        <div className="col-span-2">

          <label className="mb-2 block text-sm text-slate-400">
            Nazwa sali
          </label>

          <input
            type="text"

            value={name}

            onChange={(e) =>
              setName(e.target.value)
            }

            placeholder="Sala IMAX 1"

            required

            className="
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-950
              px-4
              py-3
              text-white
              outline-none
              transition

              focus:border-blue-500
            "
          />

        </div>

        {/* TYPE */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Typ sali
          </label>

          <select
            value={type}

            onChange={(e) =>
              setType(
                e.target.value as HallType
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
              outline-none

              focus:border-blue-500
            "
          >

            <option value="NORMAL">
              Normal
            </option>

            <option value="VIP">
              VIP
            </option>

            <option value="IMAX">
              IMAX
            </option>

            <option value="4DX">
              4DX
            </option>

          </select>

        </div>

        {/* ROWS */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Ilość rzędów
          </label>

          <input
            type="number"

            min={1}

            value={rows}

            onChange={(e) =>
              setRows(
                Number(e.target.value)
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
              outline-none

              focus:border-blue-500
            "
          />

        </div>

        {/* COLUMNS */}

        <div className="col-span-2">

          <label className="mb-2 block text-sm text-slate-400">
            Miejsca w rzędzie
          </label>

          <input
            type="number"

            min={1}

            value={columns}

            onChange={(e) =>
              setColumns(
                Number(e.target.value)
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
              outline-none

              focus:border-blue-500
            "
          />

        </div>

      </div>

      {/* STATS */}

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-slate-800
          bg-slate-950
          p-4
        "
      >

        <p className="text-sm text-slate-400">
          Łączna liczba miejsc
        </p>

        <p className="mt-1 text-3xl font-bold text-white">
          {rows * columns}
        </p>

      </div>

      {/* SUCCESS */}

      {createHallMutation.isSuccess && (

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
          Sala została dodana
        </div>

      )}

      {/* ERROR */}

      {createHallMutation.isError && (

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
          Nie udało się dodać sali
        </div>

      )}

      {/* BUTTON */}

      <button
        type="submit"

        disabled={
          createHallMutation.isPending
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

          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >

        {createHallMutation.isPending
          ? "Dodawanie..."
          : "Dodaj salę"}

      </button>

    </form>
  );
}