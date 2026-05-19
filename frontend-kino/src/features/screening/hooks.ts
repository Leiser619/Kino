// src/features/screening/hooks.ts
import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import {
  getReservedSeats,
  getScreeningById,
  getScreenings,
  reserveSeats,
} from "./api";

export const useScreening =
  (id: string) => {

    return useQuery({
      queryKey: [
        "screening",
        id,
      ],

      queryFn: () =>
        getScreeningById(id),

      enabled: !!id,
    });

  };

export const useReservedSeats =
  (id: string) => {

    return useQuery({
      queryKey: [
        "reserved-seats",
        id,
      ],

      queryFn: () =>
        getReservedSeats(id),

      enabled: !!id,
    });

  };

export const useReserveSeats =
  () => {

    return useMutation({
      mutationFn: ({
        screeningId,
        ownerEmail,
        seats,
      }: any) =>
        reserveSeats(
          screeningId,
          ownerEmail,
          seats
        ),
    });

  };

export const useScreenings =
  () => {

    return useQuery({
      queryKey: ["screenings"],

      queryFn: getScreenings,
    });

  };