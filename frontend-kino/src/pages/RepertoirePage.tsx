// src/pages/RepertoirePage.tsx
import { useMemo, useState }
from "react";

import UserMenu
from "../features/user/components/UserMenu";

import {
  useScreenings,
} from "../features/screening/hooks";

import ScreeningCard
from "../features/screening/ScreeningCard";

export default function RepertoirePage() {

  const {
    data: screenings,
    isLoading,
  } = useScreenings();

  //
  // FILTERS
  //

  const [
    selectedHall,
    setSelectedHall,
  ] = useState("");

  const [
    selectedDate,
    setSelectedDate,
  ] = useState("");

  //
  // UNIQUE HALLS
  //

  const uniqueHalls =
    [...new Set(
      screenings?.map(
        (s: any) => s.hall.name
      )
    )];

  //
  // FILTERED
  //

  const filteredScreenings =
    useMemo(() => {

      if (!screenings) {
        return [];
      }

      return screenings.filter(
        (screening: any) => {

          const screeningDate =
            screening.startTime
              .split("T")[0];

          const hallMatch =
            !selectedHall ||
            screening.hall.name ===
            selectedHall;

          const dateMatch =
            !selectedDate ||
            screeningDate ===
            selectedDate;

          return (
            hallMatch &&
            dateMatch
          );
        }
      );

    }, [
      screenings,
      selectedHall,
      selectedDate,
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

        {/* HEADER */}

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

        {/* FILTERS */}

        <div
          className="
            mb-10
            grid
            grid-cols-3
            gap-4
          "
        >

          {/* HALL */}

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

          {/* DATE */}

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
            (screening: any) => (

              <ScreeningCard
                key={screening.id}
                screening={screening}
              />

            )
          )}

        </div>

      </main>

    </div>
  );
}