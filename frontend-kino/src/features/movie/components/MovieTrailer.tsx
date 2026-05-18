// src/features/movie/components/MovieTrailer.tsx

type Props = {
  trailerUrl?: string;
};

export default function MovieTrailer({
  trailerUrl,
}: Props) {

  if (!trailerUrl) {
    return null;
  }

  return (

    <aside
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
      "
    >

      <h2
        className="
          mb-6
          text-2xl
          font-black
        "
      >
        Trailer
      </h2>

      <div
        className="
          overflow-hidden
          rounded-2xl
        "
      >

        <iframe
          src={trailerUrl}
          title="Trailer"
          allowFullScreen
          className="
            aspect-video
            w-full
          "
        />

      </div>

    </aside>
  );
}