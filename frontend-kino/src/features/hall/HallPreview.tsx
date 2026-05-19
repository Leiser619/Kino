// src/features/hall/HallPreview.tsx

import type { Hall } from "./types";

const generateSeats = (
  rows: number,
  cols: number
) => {

  const seats: string[][] = [];

  for (let r = 0; r < rows; r++) {

    const row: string[] = [];

    for (let c = 0; c < cols; c++) {

      const rowLetter =
        String.fromCharCode(65 + r);

      row.push(`${rowLetter}${c + 1}`);
    }

    seats.push(row);
  }

  return seats;
};

export default function HallPreview({
  hall,
}: {
  hall: Hall;
}) {

  const seats =
    generateSeats(
      hall.rows,
      hall.columns
    );

  return (

    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-950
        p-6
      "
    >

      <h3
        className="
          mb-6
          text-xl
          font-bold
          text-white
        "
      >
        {hall.name} — {hall.type}
      </h3>

      {/* SCREEN */}
      <div
        className="
          mx-auto
          mb-8
          h-3
          w-2/3
          rounded-full
          bg-gradient-to-r
          from-slate-700
          via-white
          to-slate-700
          opacity-70
        "
      />

      {/* SEATS */}
      <div className="space-y-2">

        {seats.map((row, rowIndex) => (

          <div
            key={rowIndex}
            className="
              flex
              justify-center
              gap-1
            "
          >

            {row.map((seat) => (

              <div
                key={seat}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-md
                  bg-slate-800
                  text-[10px]
                  text-slate-300
                  transition

                  hover:bg-blue-500
                  hover:text-white
                "
              >
                {seat}
              </div>

            ))}

          </div>

        ))}

      </div>

    </div>
  );
}