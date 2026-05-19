// src/features/screening/api.ts

import { api }
from "../../shared/api/axios";

export const getScreeningById =
  async (id: string) => {

    const res = await api.get(
      `/screenings/${id}`
    );

    return res.data;
};

export const getReservedSeats =
  async (screeningId: string) => {

    const res = await api.get(
      `/reservations/screening/${screeningId}`
    );

    return res.data;
};
export const reserveSeats =
  async (
    screeningId: string,
    ownerEmail: string,
    seats: {
      rowNumber: number;
      columnNumber: number;
    }[]
  ) => {

    const res = await api.post(
      `/reservations`,
      {
        screeningId,
        ownerEmail,
        seats,
      }
    );

    return res.data;
};

export const getScreenings =
  async () => {

    const res = await api.get(
      "/screenings"
    );

    return res.data;
};

