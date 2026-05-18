//src/features/movie/hooks.ts
import { useQuery } from "@tanstack/react-query";

import {
  getMovies,
  getNowPlayingMovies,
  getTrendingMovies,
  getFamilyMovies,
  getMovieBySearchKey
} from "./api";

export const useGetMovies = (
  category?: string,
  enabled = true
) => {

  return useQuery({
    queryKey: ["movies", category],

    queryFn: () => getMovies(category!),

    enabled,

    staleTime: 1000 * 60 * 5,
  });
};

export const useGetNowPlayingMovies = () => {
  return useQuery({
    queryKey: ["movies", "now-playing"],

    queryFn: getNowPlayingMovies,

    staleTime: 1000 * 60 * 5,
  });
};


export const useGetTrendingMovies = () => {
  return useQuery({
    queryKey: ["movies", "trending"],

    queryFn: getTrendingMovies,

    staleTime: 1000 * 60 * 5,
  });
};

export const useGetFamilyMovies = () => {
  return useQuery({
    queryKey: ["movies", "family"],

    queryFn: getFamilyMovies,

    staleTime: 1000 * 60 * 5,
  });
};


export function useMovieBySearchKey(
  searchKey: string
) {

  return useQuery({
    queryKey: ["movie", searchKey],

    queryFn: () =>
      getMovieBySearchKey(searchKey),

    enabled: !!searchKey,
  });
}