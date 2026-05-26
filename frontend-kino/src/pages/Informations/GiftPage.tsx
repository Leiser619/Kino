// src/pages/GiftsPage.tsx

import UserMenu
from "../../features/user/components/UserMenu";

import UserFooter
from "../../features/user/components/UserFooter";

import {
  Gift,
  Popcorn,
  Shirt,
  Candy,
  Ticket,
  Sparkles,
} from "lucide-react";

export default function GiftsPage() {


  const products = [

    {
      icon: Shirt,
      title: "Skarpetki kinowe",
      price: "20 zł",
      description:
        "Limitowane skarpetki inspirowane kultowymi premierami filmowymi.",
    },

    {
      icon: Popcorn,
      title: "Popcorn Bucket",
      price: "100 zł",
      description:
        "Kolekcjonerskie popcorn buckety dostępne przy największych premierach.",
    },

    {
      icon: Gift,
      title: "Smyczki i breloki",
      price: "15 zł",
      description:
        "Filmowe smyczki, otwieracze i breloki z limitowanych kolekcji.",
    },

    {
      icon: Candy,
      title: "Zestawy premium",
      price: "49 zł",
      description:
        "Zestawy gadżetów z kubkami, plakatami i słodyczami kinowymi.",
    },

    {
      icon: Ticket,
      title: "Vouchery prezentowe",
      price: "Od 50 zł",
      description:
        "Idealny prezent dla każdego fana kina i premierowych pokazów.",
    },

    {
      icon: Sparkles,
      title: "Edycje kolekcjonerskie",
      price: "Od 120 zł",
      description:
        "Ekskluzywne figurki, plakaty i gadżety dostępne w limitowanych seriach.",
    },
  ];



  return (

    <div className="min-h-screen bg-black text-white">

      <UserMenu />

      <main
        className="
          mx-auto
          max-w-7xl
          px-6
          pb-20
          pt-44
        "
      >

        {/* HERO */}

        <section
          className="
            rounded-[40px]
            border
            border-zinc-800
            bg-gradient-to-br
            from-zinc-900
            via-black
            to-red-950
            p-14
          "
        >

          <div className="max-w-3xl">

            <p
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-red-400
              "
            >
              Cinema Store
            </p>

            <h1
              className="
                text-6xl
                font-black
                leading-tight
              "
            >
              Gadżety dla fanów kina
            </h1>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-zinc-300
              "
            >
              Kolekcjonerskie akcesoria, limitowane popcorn
              buckety, skarpetki kinowe i filmowe dodatki
              inspirowane największymi premierami.
            </p>

          </div>

        </section>

        {/* PRODUCTS */}

        <section className="mt-20">

          <h2 className="text-4xl font-black">
            Produkty i gadżety
          </h2>

          <div
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {products.map((product) => {

              const Icon = product.icon;

              return (

                <div
                  key={product.title}

                  className="
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-900
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

                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    {product.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-zinc-400
                    "
                  >
                    {product.description}
                  </p>

                  <p
                    className="
                      mt-6
                      text-3xl
                      font-black
                      text-red-500
                    "
                  >
                    {product.price}
                  </p>

                </div>
              );
            })}

          </div>

        </section>

        {/* LIMITED EDITION */}

        <section className="mt-20">

          <div
            className="
              rounded-[40px]
              border
              border-zinc-800
              bg-zinc-900
              p-12
            "
          >

            <div className="max-w-4xl">

              <h2 className="text-5xl font-black">
                Limitowane kolekcje premierowe
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-zinc-400
                "
              >
                Przy największych premierach pojawiają się
                ekskluzywne popcorn buckety, kubki,
                figurki i zestawy kolekcjonerskie dostępne
                wyłącznie przez ograniczony czas.
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
                Sprawdź aktualne kolekcje
              </button>

            </div>

          </div>

        </section>

      </main>

      <UserFooter />

    </div>
  );
}