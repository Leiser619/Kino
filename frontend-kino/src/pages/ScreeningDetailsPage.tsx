// src/pages/ScreeningDetailsPage.tsx

import { useParams } from "react-router-dom";
import UserFooter from "../features/user/components/UserFooter";
import UserMenu
from "../features/user/components/UserMenu";

import {
  useReservedSeats,
  useScreening,
} from "../features/screening/hooks";

import SeatPicker
from "../features/screening/SeatPicker";

export default function ScreeningDetailsPage() {

  const { id } = useParams();

  const {
    data: screening,
    isLoading,
  } = useScreening(id || "");

  const {
    data: reservedSeats,
  } = useReservedSeats(id || "");

  if (isLoading || !screening) {

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

        <div className="mb-10">

          <h1
            className="
              text-5xl
              font-black
            "
          >
            Wybór miejsc
          </h1>

          <p className="mt-4 text-zinc-400">
            {screening.hall.name}
          </p>

        </div>

        <SeatPicker
          screening={screening}
          reservedSeats={reservedSeats || []}
        />

      </main>
      <UserFooter />
    </div>
  );
}