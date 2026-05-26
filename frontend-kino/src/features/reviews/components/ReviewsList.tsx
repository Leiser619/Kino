import {
  useMovieReviews,
} from "../hooks";

type Props = {
  tmdbId: string;
};

export default function ReviewsList({
  tmdbId,
}: Props) {

  const {
    data: reviews,
    isLoading,
  } = useMovieReviews(tmdbId);

  if (isLoading) {

    return (
      <div className="mt-8 text-slate-400">
        Ładowanie opinii...
      </div>
    );

  }

  if (!reviews?.length) {

    return (
      <div
        className="
          mt-8
          rounded-3xl
          border
          border-zinc-700
          bg-zinc-900
          p-8
          text-center
          text-zinc-400
        "
      >
        Brak opinii
      </div>
    );

  }

  return (

    <div className="mt-8 space-y-4">

      {reviews.map((review: any) => (

        <div
          key={review.id}
          className="
            rounded-3xl
            border
            border-slate-800
            bg-zinc-900/70
            p-6
          "
        >

          <div
            className="
              mb-4
              flex
              items-center
              justify-between
            "
          >

            <div
              className="
                rounded-full
                bg-red-500/20
                px-4
                py-1
                text-sm
                font-semibold
                text-red-400
              "
            >
              {review.rating}/10
            </div>

            <p
              className="
                text-sm
                text-slate-500
              "
            >
              {new Date(
                review.createdAt
              ).toLocaleDateString()}
            </p>

          </div>

          <p
            className="
              leading-relaxed
              text-slate-300
            "
          >
            {review.content}
          </p>

        </div>

      ))}

    </div>
  );
}