// src/features/movie/components/MovieSchema.ts

import { z } from "zod";

export const MovieSchema = z.object({
  tmdbId: z.number(),
  imdbId: z.string().nullable().optional(),
  title: z.string(),
  duration: z.number(),
  posterUrl: z.string(),
  trailerUrl: z.string().nullable().optional(),
  description: z.string(),
  releaseDate: z.string(),
  director: z.string(),
  genre: z.string(),
  originalLanguage: z.string(),
  imdbRating: z.string(),
  searchKey: z.string(),
});

export type MovieSchemaType =
  z.infer<typeof MovieSchema>;