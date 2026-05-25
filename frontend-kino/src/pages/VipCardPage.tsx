// src/pages/VIPCardPage.tsx

import { useState } from "react";
import UserFooter from "../features/user/components/UserFooter";
import VIPCARD from "../assets/VIPCARD.png";
import {
  BadgePercent,
  Calendar,
  Ticket,
  Popcorn,
} from "lucide-react";

import UserMenu
from "../features/user/components/UserMenu";

export default function VIPCardPage() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    plan: "12",
  });
   const benefits = [
    {
      icon: Ticket,
      title: "Nielimitowane wejścia",
      description:
        "Oglądaj filmy bez limitu przez cały miesiąc. Maksymalnie jeden seans dziennie po wcześniejszej rezerwacji.",
    },

    {
      icon: Popcorn,
      title: "30% zniżki na przekąski",
      description:
        "Tańszy popcorn, napoje, nachosy i zestawy premium przy każdym zakupie.",
    },

    {
      icon: Calendar,
      title: "Rezerwacje premium",
      description:
        "Priorytetowy dostęp do premier, maratonów i pokazów specjalnych.",
    },

    {
      icon: BadgePercent,
      title: "Ekskluzywne promocje",
      description:
        "Dedykowane promocje i wcześniejszy dostęp do limitowanych wydarzeń.",
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
            from-zinc-900
            via-black
            to-red-950
            p-14
          "
        >

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Cinema Membership
            </p>

            <h1 className="text-6xl font-black leading-tight">
              Kino bez limitów
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Karta członkowska daje dostęp do nielimitowanych seansów,
              zniżek na przekąski oraz wydarzeń premium.
            </p>
                <div className="mt-10">

                  <img
                    src={VIPCARD}
                    alt="VIP Card"

                    className="
                      w-full
                      max-w-[500px]
                      rounded-3xl
                      border
                      border-zinc-800
                      shadow-2xl
                    "
                  />

                </div>
          </div>

        </section>

        {/* BENEFITS */}
        <section className="mt-20 grid gap-6 md:grid-cols-2">

          {benefits.map((benefit) => {

            const Icon = benefit.icon;

            return (

              <div
                key={benefit.title}
                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-900
                  p-8
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
          </section>

        {/* PRICING */}

        <section className="mt-20">

          <h2 className="text-4xl font-black">
            Pakiety członkowskie
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">

            {[
              {
                title: "1 miesiąc",
                price: "200 zł / miesiąc",
              },
              {
                title: "3 miesiące",
                price: "180 zł / miesiąc",
              },
              {
                title: "6 miesięcy",
                price: "170 zł / miesiąc",
              },
              {
                title: "12 miesięcy",
                price: "150 zł / miesiąc",
              },
            ].map((plan) => (

              <div
                key={plan.title}
                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-900
                  p-8
                "
              >
                <h3 className="text-2xl font-bold">
                  {plan.title}
                </h3>

                <p className="mt-6 text-3xl font-black text-red-500">
                  {plan.price}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* FORM */}

        <section className="mt-20">

          <div
            className="
              rounded-[40px]
              border
              border-zinc-800
              bg-zinc-900
              p-10
            "
          >

            <h2 className="text-4xl font-black">
              Zamów kartę członkowską
            </h2>

            <p className="mt-3 text-zinc-400">
              Wypełnij formularz i aktywuj członkostwo premium.
            </p>

            <form className="mt-10 grid gap-6 lg:grid-cols-2">

              <input
                type="text"
                placeholder="Imię"
                value={form.firstName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    firstName: e.target.value,
                  })
                }
                className="rounded-2xl border border-zinc-700 bg-black px-5 py-4 outline-none"
              />

              <input
                type="text"
                placeholder="Nazwisko"
                value={form.lastName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    lastName: e.target.value,
                  })
                }
                className="rounded-2xl border border-zinc-700 bg-black px-5 py-4 outline-none"
              />
 <input
                type="email"
                placeholder="Adres e-mail"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="rounded-2xl border border-zinc-700 bg-black px-5 py-4 outline-none lg:col-span-2"
              />

              <select
                value={form.plan}
                onChange={(e) =>
                  setForm({
                    ...form,
                    plan: e.target.value,
                  })
                }
                className="rounded-2xl border border-zinc-700 bg-black px-5 py-4 outline-none lg:col-span-2"
              >
                <option value="1">
                  1 miesiąc — 200 zł / miesiąc
                </option>

                <option value="3">
                  3 miesiące — 180 zł / miesiąc
                </option>

                <option value="6">
                  6 miesięcy — 170 zł / miesiąc
                </option>

                <option value="12">
                  12 miesięcy — 150 zł / miesiąc
                </option>
              </select>

              <button
                type="submit"
                className="
                  rounded-2xl
                  bg-red-600
                  px-8
                  py-4
                  text-lg
                  font-bold
                  transition
                  hover:bg-red-500
                  lg:col-span-2
                "
              >
                Zamów kartę VIP
              </button>

            </form>

          </div>

        </section>

      </main>
      <UserFooter />
    </div>
  );
}