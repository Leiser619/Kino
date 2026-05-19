// src/features/screening/SeatPicker.tsx

import { useState } from "react";

import {
  useReserveSeats,
} from "./hooks";

type Seat = {
  rowNumber: number;
  columnNumber: number;
};

type Props = {
  screening: any;
  reservedSeats: Seat[];
};

export default function SeatPicker({
  screening,
  reservedSeats,
}: Props) {

  const reserveMutation =
    useReserveSeats();

  const [email, setEmail] =
    useState("");

  const [
    selectedSeats,
    setSelectedSeats,
  ] = useState<Seat[]>([]);

  const rows =
    screening.hall.rows;

  const cols =
    screening.hall.columns;

  //
  // RESERVED
  //

  function isReserved(
    row: number,
    col: number
  ) {

    return reservedSeats.some(
      (seat) =>
        seat.rowNumber === row &&
        seat.columnNumber === col
    );
  }

  //
  // SELECTED
  //

  function isSelected(
    row: number,
    col: number
  ) {

    return selectedSeats.some(
      (seat) =>
        seat.rowNumber === row &&
        seat.columnNumber === col
    );
  }

  //
  // TOGGLE
  //

  function toggleSeat(
    row: number,
    col: number
  ) {

    if (isReserved(row, col)) {
      return;
    }

    if (isSelected(row, col)) {

      setSelectedSeats((prev) =>
        prev.filter(
          (seat) =>
            !(
              seat.rowNumber === row &&
              seat.columnNumber === col
            )
        )
      );

      return;
    }

    setSelectedSeats((prev) => [
      ...prev,
      {
        rowNumber: row,
        columnNumber: col,
      },
    ]);
  }

  //
  // RESERVE
  //

  function handleReserve() {

    if (
      !email ||
      selectedSeats.length === 0
    ) {
      return;
    }

    reserveMutation.mutate({
      screeningId: String(
        screening.id
      ),

      ownerEmail: email,

      seats: selectedSeats,
    });
  }

  return (

    <div
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-8
      "
    >

      {/* SCREEN */}

      <div
        className="
          mx-auto
          mb-10
          h-3
          w-2/3
          rounded-full
          bg-gradient-to-r
          from-zinc-700
          via-white
          to-zinc-700
        "
      />

      {/* SEATS */}

      <div className="space-y-2">

        {Array.from({
          length: rows,
        }).map((_, rowIndex) => {

          const rowLetter =
            String.fromCharCode(
              65 + rowIndex
            );

          return (

            <div
              key={rowIndex}
              className="
                flex
                justify-center
                gap-2
              "
            >

              {Array.from({
                length: cols,
              }).map((_, colIndex) => {

                const row =
                  rowIndex + 1;

                const col =
                  colIndex + 1;

                const reserved =
                  isReserved(
                    row,
                    col
                  );

                const selected =
                  isSelected(
                    row,
                    col
                  );

                return (

                  <button
                    key={`${row}-${col}`}

                    type="button"

                    onClick={() =>
                      toggleSeat(
                        row,
                        col
                      )
                    }

                    disabled={reserved}

                    className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-md
                      text-xs
                      font-medium
                      transition

                      ${
                        reserved
                          ? "cursor-not-allowed bg-red-500 text-white"
                          : selected
                          ? "bg-emerald-500 text-white"
                          : "bg-zinc-800 text-zinc-300 hover:bg-blue-500 hover:text-white"
                      }
                    `}
                  >
                    {rowLetter}
                    {col}
                  </button>

                );
              })}

            </div>

          );
        })}

      </div>

      {/* LEGEND */}

      <div
        className="
          mt-8
          flex
          flex-wrap
          gap-6
          text-sm
        "
      >

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-zinc-700" />
          Wolne
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-emerald-500" />
          Wybrane
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-red-500" />
          Zajęte
        </div>

      </div>

      {/* EMAIL */}

      <div className="mt-8">

        <label
          className="
            mb-2
            block
            text-sm
            text-zinc-400
          "
        >
          Email
        </label>

        <input
          type="email"

          value={email}

          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }

          placeholder="twoj@email.com"

          className="
            w-full
            rounded-2xl
            border
            border-zinc-800
            bg-black/40
            px-4
            py-3
            text-white
            outline-none

            focus:border-red-500
          "
        />

      </div>

      {/* SUMMARY */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-zinc-800
          bg-black/40
          p-5
        "
      >

        <p className="text-zinc-400">
          Wybrane miejsca
        </p>

        <p
          className="
            mt-2
            text-2xl
            font-bold
          "
        >
          {selectedSeats.length}
        </p>

        <p className="mt-2 text-zinc-400">
          Suma:
          {" "}
          {(
            selectedSeats.length *
            screening.price
          ).toFixed(2)}
          {" "}
          zł
        </p>

      </div>

      {/* BUTTON */}

      <button
        onClick={handleReserve}

        disabled={
          !email ||
          selectedSeats.length === 0 ||
          reserveMutation.isPending
        }

        className="
          mt-8
          w-full
          rounded-2xl
          bg-red-600
          px-6
          py-4
          font-semibold
          text-white
          transition

          hover:bg-red-500

          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >

        {reserveMutation.isPending
          ? "Rezerwowanie..."
          : "Zarezerwuj miejsca"}

      </button>

      {/* SUCCESS */}

      {reserveMutation.isSuccess && (

        <div
          className="
            mt-6
            rounded-2xl
            border
            border-emerald-500/20
            bg-emerald-500/10
            p-4
            text-emerald-400
          "
        >
          Rezerwacja została utworzona
        </div>

      )}

      {/* ERROR */}

      {reserveMutation.isError && (

        <div
          className="
            mt-6
            rounded-2xl
            border
            border-red-500/20
            bg-red-500/10
            p-4
            text-red-400
          "
        >
          Nie udało się utworzyć rezerwacji
        </div>

      )}

    </div>
  );
}