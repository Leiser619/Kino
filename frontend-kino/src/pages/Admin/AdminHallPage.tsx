// src/pages/admin/AdminHallPage.tsx

import AdminMenu from "../../features/admin/components/AdminMenu";
import { useState } from "react";
import { useHalls } from "../../features/admin/hooks";
import HallPreview from "../../features/hall/HallPreview";
import EditHallForm from "../../features/hall/EditHallForm";
import type { Hall } from "../../features/hall/types";

export default function AdminHallPage() {

  const { data: halls, isLoading } = useHalls();
    const [selectedHall, setSelectedHall] =
    useState<Hall | null>(null);

const [editingHall, setEditingHall] =
  useState<Hall | null>(null);

  if (isLoading) {
    return (
      <div className="p-6 text-white">
        Loading halls...
      </div>
    );
  }

  return (

    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
      "
    >

      <AdminMenu />

      <main
        className="
          ml-[280px]
          min-h-screen
          p-10
        "
      >
<div className="grid grid-cols-3 gap-6 p-6 text-white">

      {/* LISTA SAL */}
      <div className="col-span-1 space-y-3">

        {halls?.map((hall: Hall) => (
          <div
            key={hall.id}
            onMouseEnter={() => setSelectedHall(hall)}
            className="
              cursor-pointer
              rounded-2xl
              border border-slate-800
              bg-slate-900
              p-4
              transition
              hover:border-blue-500
            "
          >

            <p className="font-semibold">
              {hall.name}
            </p>

            <p className="text-sm text-slate-400">
              {hall.rows} × {hall.columns}
            </p>
            <p className="text-sm text-slate-400">
  {hall.rows} × {hall.columns}
                </p>

                <button
                  onClick={() =>
                    setEditingHall(hall)
                  }

                  className="
                    mt-3
                    rounded-xl
                    bg-blue-600
                    px-3
                    py-2
                    text-sm
                    text-white
                    hover:bg-blue-500
                  "
                >
                  Edytuj
                </button>

          </div>
        ))}

      </div>

      {/* PREVIEW */}
      <div className="col-span-2">

        {selectedHall ? (
          <HallPreview hall={selectedHall} />
        ) : (
          <div className="text-slate-500">
            Najedź na salę aby zobaczyć układ
          </div>
        )}
      </div>

    </div>
      

      </main>
        {editingHall && (

          <EditHallForm
            hall={editingHall}

            onClose={() =>
              setEditingHall(null)
            }
          />

        )}
    </div>
  );
}