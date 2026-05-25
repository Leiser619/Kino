// src/features/admin/hooks.ts

import {
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";

import {
  createHall,
  createScreening,
  getHalls,
  getNowPlayingMovies,
  getScreenings,
  updateHall,  
  addEmployee,
  getEmployees,
  removeEmployee,
  getAdminStats,
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



// ======================
// EMPLOYEES
// ======================

export const useEmployees =
  () => {

    return useQuery({
      queryKey: ["employees"],
      queryFn: getEmployees,
    });

  };

export const useAddEmployee =
  () => {

    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: addEmployee,

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: ["employees"],
        });

      },
    });

  };

export const useRemoveEmployee =
  () => {

    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: removeEmployee,

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: ["employees"],
        });

      },
    });

  };

//STATS

  export const useAdminStats =
  () => {

    return useQuery({
      queryKey: ["admin-stats"],

      queryFn: getAdminStats,

      refetchInterval: 30000,
    });

  };