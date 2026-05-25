// src/pages/BarPage.tsx

import {
  Popcorn,
  CupSoda,
  Candy,
  Beef,
  Pizza,
  Croissant,
} from "lucide-react";
import UserFooter from "../../features/user/components/UserFooter";
import UserMenu
from "../../features/user/components/UserMenu";

export default function BarPage() {  
    const sections = [
    {
      title: "Nachosy",
      icon: Pizza,
      items: [
        "Nachosy serowe",
        "Nachosy klasyczne",
      ],
    },   
     {
      title: "Popcorn",
      icon: Popcorn,
      items: [
        "Popcorn maślany",
        "Popcorn klasyczny",
        "Popcorn karmelowy",
      ],
    },


    {
      title: "Chipsy Chipsofile",
      icon: Croissant,
      items: [
        "Cebulka",
        "Papryka",
      ],
    },

    {
      title: "Napoje",
      icon: CupSoda,
      items: [
        "Coca-Cola",
        "Lipton Ice Tea",
        "Woda gazowana",
        "Woda niegazowana",
        "Sprite",
        "Fanta",
      ],
    },

    {
      title: "Słodycze",
      icon: Candy,
      items: [
        "Żelki owocowe",
        "Cukierki karmelowe",
        "Batony czekoladowe",
        "M&M's",
      ],
    },

    {
      title: "Sosy do nachosów",
      icon: Beef,
      items: [
        "Sos serowy",
        "Sos salsa",
        "Sos jalapeno",
      ],
    },
  ];

  return (

    <div className="min-h-screen bg-black text-white">

      <UserMenu />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-44">

        {/* HERO */}
        <section
          className="
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
              Cinema Buffet
            </p>

            <h1 className="text-6xl font-black leading-tight">
              Kino smakuje lepiej z przekąskami
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Klasyczny popcorn, chrupiące nachosy,
              słodycze i zimne napoje przygotowane specjalnie
              na idealny wieczór filmowy.
            </p>

          </div>

          </section>

        {/* MENU */}

        <section className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {sections.map((section) => {

            const Icon = section.icon;

            return (

              <div
                key={section.title}
                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-900
                  p-8
                "
              >

                <div className="mb-6 flex items-center gap-4">
                    <div
                    className="
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

                  <h2 className="text-3xl font-black text-red-500">
                    {section.title}
                  </h2>

                </div>

                <div className="mt-8 space-y-4">

                  {section.items.map((item) => (
                     <div
                      key={item}
                      className="
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-black
                        px-5
                        py-4
                      "
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>
            );
          })}

        </section>
        </main>
      <UserFooter />
    </div>
  );
}