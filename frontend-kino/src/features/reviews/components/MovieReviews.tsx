import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";

import { useMe } from "../../auth/hooks";

type Props = {
  tmdbId: string;
};

export default function MovieReviews({
  tmdbId,
}: Props) {

  const { data:user } =useMe();

  return (

    <div className="mt-16">

      <div
        className="
          mb-8
          flex
          items-center
          justify-between
        "
      >

        <h2
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Reviews
        </h2>

        {!user && (

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Zaloguj się aby dodać opinię
          </p>

        )}

      </div>

      {user && (
        <ReviewForm tmdbId={tmdbId} />
      )}

      <ReviewsList tmdbId={tmdbId} />

    </div>
  );
}