// src/features/admin/hooks.ts

import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import {
  createHall,
  createScreening,
  getHalls,
  getNowPlayingMovies,
} from "./api";


export const useNowPlayingMovies =
  () => {

    return useQuery({
      queryKey: [
        "movies",
        "now-playing",
      ],

      queryFn:
        getNowPlayingMovies,
    });

  };


export const useHalls = () => {

  return useQuery({
    queryKey: ["halls"],
    queryFn: getHalls,
  });

};

export const useCreateHall =
  () => {

    return useMutation({
      mutationFn: createHall,
    });

  };

export const useCreateScreening =
  () => {

    return useMutation({
      mutationFn:
        createScreening,
    });

  };