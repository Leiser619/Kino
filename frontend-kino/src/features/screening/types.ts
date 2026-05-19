// src/features/screening/types.ts
export interface Hall {
  id: number;
  name: string;
  rows: number;
  columns: number;
  type: string;
}

export interface Screening {
  id: number;

  tmdbMovieId: number;

  hall: Hall;

  startTime: string;

  price: number;
}
export interface ReservedSeat {
  rowNumber: number;
  columnNumber: number;
}
