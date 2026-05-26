import { useState } from "react";

import {
  useCreateReview,
} from "../hooks";

type Props = {
  tmdbId: string;
};

export default function ReviewForm({
  tmdbId,
}: Props) {

  const [content, setContent] =
    useState("");

  const [rating, setRating] =
    useState(10);

  const createReviewMutation =
    useCreateReview(tmdbId);

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      await createReviewMutation.mutateAsync({
        tmdbId,
        content,
        rating,
      });

      setContent("");
      setRating(10);

    };

  return (

    <form
      onSubmit={handleSubmit}
      className="
        rounded-3xl
        border
        border-slate-800
        bg-zinc-900/70
        p-6
      "
    >

      <div className="flex gap-4">

        <textarea
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          placeholder="Napisz opinię..."
          className="
            min-h-[120px]
            flex-1
            rounded-2xl
            border
            border-slate-700
            bg-zinc-900
            p-4
            text-white
            outline-none
          "
        />

        <div className="w-[140px]">
        Ocena 1-10
          <input
            type="number"
            min={1}
            max={10}
            value={rating}
            onChange={(e) =>
              setRating(
                Number(e.target.value)
              )
            }
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-zinc-900
              px-4
              text-white
              outline-none
            "
          />

          <button
            type="submit"
            className="
              mt-4
              h-14
              w-full
              rounded-2xl
              bg-red-600
              font-semibold
              text-white
              transition
              hover:bg-red-500
            "
          >
            Dodaj
          </button>

        </div>

      </div>

    </form>
  );
}