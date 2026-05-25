// src/pages/VIPPage.tsx

import {
  Crown,
  Popcorn,
  Sofa,
  Ticket,
  Sparkles,
  Martini,
} from "lucide-react";
import UserFooter from "../../features/user/components/UserFooter";
import UserMenu
from "../../features/user/components/UserMenu";
 export default function VIPPage() {

  const benefits = [
    {
      icon: Sofa,
      title: "Luksusowe fotele",
      description:
        "Rozkładane skórzane fotele VIP z dodatkowymi podłokietnikami i ogromną ilością miejsca.",
    },

    {
      icon: Popcorn,
      title: "Jedzenie w cenie biletu",
      description:
        "Każdy seans VIP obejmuje popcorn, napój oraz wybraną przekąskę bez dodatkowych opłat.",
    },

    {
      icon: Ticket,
      title: "Maratony filmowe",
      description:
        "Ekskluzywne nocne maratony największych premier oraz wydarzenia specjalne tylko dla VIP.",
    }, {
      icon: Sparkles,
      title: "Pierwszeństwo rezerwacji",
      description:
        "Rezerwuj najlepsze miejsca jeszcze przed oficjalnym startem sprzedaży.",
    },

    {
      icon: Martini,
      title: "Specjalna strefa lounge",
      description:
        "Dostęp do strefy relaksu z napojami i wygodnymi kanapami przed seansem.",
    },

    {
      icon: Crown,
      title: "Zniżki premium",
      description:
        "20% zniżki na popcorn bucket, zestawy premium i limitowane przekąski.",
    },
  ];

   return (

    <div className="min-h-screen bg-black text-white">

      <UserMenu />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-44">

        {/* HERO */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-zinc-800
            bg-gradient-to-br
            from-red-700
            via-black
            to-zinc-900
            p-14
          "
        >

            <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Cinema VIP Experience
            </p>

            <h1 className="text-6xl font-black leading-tight">
              Najbardziej luksusowe sale kinowe w mieście
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Odkryj zupełnie nowy poziom oglądania filmów.
              Wygodne fotele, prywatna atmosfera, jedzenie w cenie biletu
              i ekskluzywne wydarzenia stworzone dla najbardziej wymagających widzów.
            </p>

            <button
              className="
                mt-10
                rounded-2xl
                bg-red-600
                px-8
                py-4
                text-lg
                font-bold
                transition
                hover:bg-red-500
              "
            >
              Zarezerwuj seans VIP
            </button>

          </div>
          </section>
          <section className="mt-20">

          <div className="mb-12">

            <h2 className="text-4xl font-black">
              Co obejmuje VIP?
            </h2>

            <p className="mt-3 text-zinc-400">
              Komfort, którego nie znajdziesz w standardowych salach.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {benefits.map((benefit) => {

              const Icon = benefit.icon;

              return (

                <div
                  key={benefit.title}
                  className="
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-900/60
                    p-8
                    transition
                    hover:border-red-500
                  "
                >

                  <div
                    className="
                      mb-6
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-red-600
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {benefit.description}
                  </p>

                </div>
              );
            })}

          </div>

        </section>
      </main>
      <UserFooter />
    </div>
  );
}