import { api } from "../../shared/api/axios";

import type {
  CreateReviewRequest,
} from "./types";



export const getMovieReviews =
  async (
    tmdbId: string
  ) => {

    const res = await api.get(
      `/reviews/${tmdbId}`
    );

    return res.data;
};



export const createReview =
  async (
    data: CreateReviewRequest
  ) => {

    const res = await api.post(
      "/reviews",
      data
    );

    return res.data;
};