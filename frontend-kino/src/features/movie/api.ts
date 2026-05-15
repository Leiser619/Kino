//src/features/movie/api.ts
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