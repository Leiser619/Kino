import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createReview,
  getMovieReviews,
} from "./api";

// GET

export const useMovieReviews =
  (tmdbId: string) => {

    return useQuery({
      queryKey: [
        "reviews",
        tmdbId,
      ],

      queryFn: () =>
        getMovieReviews(tmdbId),
    });

  };

// CREATE

export const useCreateReview =
  (tmdbId: string) => {

    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: createReview,

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: [
            "reviews",
            tmdbId,
          ],
        });

      },
    });

  };