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
  getScreenings,
  updateHall
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









// HALLS

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
export const useUpdateHall =
  () => {

    return useMutation({
      mutationFn: ({
        hallId,
        data,
      }: {
        hallId: number;
        data: any;
      }) =>
        updateHall(hallId, data),
    });

  };










  

//SCREENINGS

  export const useCreateScreening =
  () => {

    return useMutation({
      mutationFn:
        createScreening,
    });

  };


  export const useScreenings =
  () => {

    return useQuery({
      queryKey: ["screenings"],

      queryFn: getScreenings,
    });

  };

