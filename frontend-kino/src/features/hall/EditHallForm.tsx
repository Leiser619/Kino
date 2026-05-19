import { useState } from "react";

import type { Hall }
from "../hall/types";

import { useUpdateHall } from "../../features/admin/hooks";

type HallType =
  | "NORMAL"
  | "VIP"
  | "IMAX"
  | "4DX";

type Props = {
  hall: Hall;

  onClose: () => void;
};

export default function EditHallForm({
  hall,
  onClose,
}: Props) {

  const updateHallMutation =
    useUpdateHall();

  const [name, setName] =
    useState(hall.name);

  const [rows, setRows] =
    useState(hall.rows);

  const [columns, setColumns] =
    useState(hall.columns);

  const [type, setType] =
    useState<HallType>(
      hall.type as HallType
    );

  function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    updateHallMutation.mutate(
      {
        hallId: hall.id,

        data: {
          name,
          rows,
          columns,
          type,
        },
      },

      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  }

  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-sm
      "
    >

      <form
        onSubmit={handleSubmit}

        className="
          w-full
          max-w-xl
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-8
        "
      >

        <h2
          className="
            mb-6
            text-2xl
            font-bold
            text-white
          "
        >
          Edytuj salę
        </h2>

        <div className="space-y-5">

          {/* NAME */}

          <input
            value={name}

            onChange={(e) =>
              setName(e.target.value)
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

          {/* TYPE */}

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

          {/* ROWS */}

          <input
            type="number"

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
            "
          />

          {/* COLUMNS */}

          <input
            type="number"

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
            "
          />

        </div>

        {/* BUTTONS */}

        <div className="mt-8 flex gap-4">

          <button
            type="button"

            onClick={onClose}

            className="
              flex-1
              rounded-2xl
              bg-slate-800
              py-3
              text-white
            "
          >
            Cancel
          </button>

          <button
            type="submit"

            className="
              flex-1
              rounded-2xl
              bg-blue-600
              py-3
              text-white
            "
          >
            Save
          </button>

        </div>

      </form>

    </div>
  );
}