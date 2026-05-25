import { useScreenings }
from "../../features/admin/hooks";

import ScreeningCard
from "../../features/screening/ScreeningCardAdmin";

import type { Screening }
from "../../features/screening/types";

import AdminMenu from "../../features/admin/components/AdminMenu";

export default function AdminScreeningsPage() {

  const {
    data: screenings,
    isLoading,
  } = useScreenings();

  if (isLoading) {

    return (
      <div className="p-6 text-white">
        Loading screenings...
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
    <div
      className="
        grid
        grid-cols-3
        gap-6
        p-6
      "
    >

      {screenings?.map(
        (screening: Screening) => (

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