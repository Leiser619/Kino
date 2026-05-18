// src/features/admin/api.ts

import { api } from "../../shared/api/axios";

export const getNowPlayingMovies =
  async () => {

    const res = await api.get(
      "/movies/now-playing"
    );

    return res.data;
};



export type CreateHallRequest = {
  name: string;
  rows: number;
  columns: number;
  type: string;
};

export const createHall = async (
  data: CreateHallRequest
) => {

  const res = await api.post(
    "/hall",
    data
  );

  return res.data;
};

export const getHalls = async () => {

  const res = await api.get(
    "/hall"
  );

  return res.data;
};



export type CreateScreeningRequest = {
  tmdbMovieId: number;
  hallId: number;
  startTime: string;
  price: number;
};

export const createScreening =
  async (
    data: CreateScreeningRequest
  ) => {

    const res = await api.post(
      "/screenings",
      data
    );

    return res.data;
};