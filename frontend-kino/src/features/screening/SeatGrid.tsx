type Props = {
  rows: number;

  columns: number;

  reservedSeats: {
    rowNumber: number;
    columnNumber: number;
  }[];

  selectedSeats: {
    rowNumber: number;
    columnNumber: number;
  }[];

  onSelect: (
    row: number,
    col: number
  ) => void;
};

export default function SeatGrid({
  rows,
  columns,
  reservedSeats,
  selectedSeats,
  onSelect,
}: Props) {

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

  return (

    <div>

      {/* SCREEN */}

      <div
        className="
          mx-auto
          mb-10
          h-4
          w-2/3
          rounded-full
          bg-gradient-to-r
          from-zinc-700
          via-white
          to-zinc-700
        "
      />

      <div className="space-y-2">

        {Array.from({
          length: rows,
        }).map((_, rowIndex) => (

          <div
            key={rowIndex}

            className="
              flex
              justify-center
              gap-2
            "
          >

            {Array.from({
              length: columns,
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

              const label =
                `${String.fromCharCode(
                  65 + rowIndex
                )}${col}`;

              return (

                <button
                  key={label}

                  disabled={reserved}

                  onClick={() =>
                    onSelect(
                      row,
                      col
                    )
                  }

                  className={`
                    h-10
                    w-10
                    rounded-lg
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
                  {label}
                </button>

              );
            })}

          </div>

        ))}

      </div>

    </div>
  );
}