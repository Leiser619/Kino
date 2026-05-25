// src/features/admin/api.ts

import { api } from "../../shared/api/axios";




// MOVIES
export const getNowPlayingMovies =
  async () => {

    const res = await api.get(
      "/movies/now-playing"
    );

    return res.data;
};









// HALLS 

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

export type UpdateHallRequest = {
  name: string;
  rows: number;
  columns: number;
  type: string;
};

export const updateHall = async (
  hallId: number,
  data: UpdateHallRequest
) => {

  const res = await api.put(
    `/hall/${hallId}`,
    data
  );

  return res.data;
};











// SCREENINGS


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

export const getScreenings =
  async () => {

    const res = await api.get(
      "/screenings"
    );

    return res.data;
};


// EMPLOYEES

export const getEmployees =
  async () => {

    const res = await api.get(
      "/auth/employees"
    );

    return res.data;
};

export const addEmployee =
  async (email: string) => {
    console.log("Adding employee with email:", email);
    const res = await api.put(
      "/auth/employees",
      { email }
    );

    return res.data;
};

export const removeEmployee =
  async (id: number) => {

    const res = await api.delete(
      `/auth/employees/${id}`
    );

    return res.data;
};




//STATS
export const getAdminStats =
  async () => {

    const res = await api.get(
      "/admin_panel/stats"
    );
    console.log("Admin stats response:", res.data);
    return res.data;
};