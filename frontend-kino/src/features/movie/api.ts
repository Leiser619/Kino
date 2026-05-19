// src/features/movie/api.ts

import { z } from "zod";

import { api } from "../../shared/api/axios";

import {
  MovieSchema,
  type MovieSchemaType,
} from "./components/MovieSchema";

export const getMovies = async (
  category: string
): Promise<MovieSchemaType[]> => {

  const res = await api.get(
    `/movies/category/${category}`
  );

  return z.array(MovieSchema).parse(
    res.data
  );
};

export const getNowPlayingMovies = async (): Promise<MovieSchemaType[]> => {

  const res = await api.get(
    "/movies/now-playing"
  );

  return z.array(MovieSchema).parse(
    res.data
  );
};

export const getTrendingMovies = async (): Promise<MovieSchemaType[]> => {

  const res = await api.get(
    "/movies/trending"
  );

  return z.array(MovieSchema).parse(
    res.data
  );
};

export const getFamilyMovies = async (): Promise<MovieSchemaType[]> => {

  const res = await api.get(
    "/movies/family"
  );

  return z.array(MovieSchema).parse(
    res.data
  );
};


export const getMovieBySearchKey = async (
  searchKey: string
): Promise<MovieSchemaType> => {

  const res = await api.get(
    `/movies/search/${searchKey}`
  );

  return MovieSchema.parse(
    res.data
  );
};



export const getMovieById = async (
  id: string
): Promise<MovieSchemaType> => {
console.log("Pobieranie filmu o ID:", id);
  const res = await api.get(
    `/movies/tmdb/${id}`
  );

  return MovieSchema.parse(
    res.data
  );
};