export type Review = {
  id: number;

  tmdbId: string;

  content: string;

  rating: number;

  createdAt: string;

  ownerId: number;
};

export type CreateReviewRequest = {
  tmdbId: string;

  content: string;

  rating: number;
};