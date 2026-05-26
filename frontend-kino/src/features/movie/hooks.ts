//src/features/movie/hooks.ts
import { useQuery } from "@tanstack/react-query";

import {
  getMovies,
  getNowPlayingMovies,
  getTrendingMovies,
  getFamilyMovies,
  getMovieBySearchKey,
  getMovieById,
  searchMovieByTitle,
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


export const useGetNowPlayingMovies = (
  enabled = true
) => {
  return useQuery({
    queryKey: ["movies", "now-playing"],

    queryFn: getNowPlayingMovies,

    enabled,

    staleTime: 1000 * 60 * 5,
  });
};

export const useGetTrendingMovies = (
  enabled = true
) => {
  return useQuery({
    queryKey: ["movies", "trending"],

    queryFn: getTrendingMovies,

    enabled,

    staleTime: 1000 * 60 * 5,
  });
};

export const useGetFamilyMovies = (
  enabled = true
) => {
  return useQuery({
    queryKey: ["movies", "family"],

    queryFn: getFamilyMovies,

    enabled,

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


export function useGetMovieById(
  id: string
) {

  return useQuery({
    queryKey: ["movie", "id", id],

    queryFn: () =>
      getMovieById(id),

    enabled: !!id,
  });
}


export const useMovieSearch =
  (
    query: string
  ) => {

    return useQuery({
      queryKey: [
        "movie-search",
        query,
      ],

      queryFn: () =>
        searchMovieByTitle(query),

      enabled:
        query.trim().length > 1,
    });

  };