// src/features/user/components/Footer.tsx

import { useNavigate }
from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function Footer() {

  const navigate =
    useNavigate();

  const navigation = [

    {
      label: "Strona główna",
      path: "/",
    },

    {
      label: "Repertuar",
      path: "/repertoire",
    },

    {
      label: "VIP",
      path: "/vipPage",
    },

    {
      label: "VIP Card",
      path: "/vipCard",
    },

    {
      label: "Bar",
      path: "/barPage",
    },

    {
      label: "Prezenty",
      path: "/gifts",
    },

  ];

  return (

    <footer
      className="
        mt-24
        border-t
        border-zinc-800
        bg-zinc-950
        text-white
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-14
          px-6
          py-16
          md:grid-cols-2
          lg:grid-cols-4
        "
      >

        {/* ABOUT */}

        <div>

          <h3
            className="
              text-2xl
              font-black
            "
          >
            CINEFILE
          </h3>

          <p
            className="
              mt-5
              leading-7
              text-zinc-400
            "
          >
            Najnowocześniejsze kino premium
            z salami VIP, największymi premierami
            oraz wyjątkową atmosferą każdego seansu.
          </p>

        </div>

        {/* NAVIGATION */}

        <div>

          <h4
            className="
              text-lg
              font-bold
            "
          >
            Nawigacja
          </h4>

          <div
            className="
              mt-5
              flex
              flex-col
              gap-3
            "
          >

            {navigation.map(
              (item) => (

                <button
                  key={item.label}

                  onClick={() =>
                    navigate(item.path)
                  }

                  className="
                    w-fit
                    text-zinc-400
                    transition
                    hover:text-red-500
                  "
                >
                  {item.label}
                </button>

              )
            )}

          </div>

        </div>

        {/* CONTACT */}

        <div>

          <h4
            className="
              text-lg
              font-bold
            "
          >
            Kontakt
          </h4>

          <div
            className="
              mt-5
              space-y-4
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
                text-zinc-400
              "
            >
              <Mail size={18} />

              <span>
                dawidbrzeski619@gmail.com
              </span>
              
            </div>
                        <div
              className="
                flex
                items-center
                gap-3
                text-zinc-400
              "
            >
              <Mail size={18} />

              <span>
                ikowalczuk03@gmail.com
              </span>
              
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                text-zinc-400
              "
            >
              <Phone size={18} />

              <span>
                +48 730 583 222
              </span>
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                text-zinc-400
              "
            >
              <MapPin size={18} />

              <span>
                Wrocław, Polska
              </span>
            </div>

          </div>

        </div>

        {/* HOURS */}

        <div>

          <h4
            className="
              text-lg
              font-bold
            "
          >
            Godziny otwarcia
          </h4>

          <div
            className="
              mt-5
              space-y-4
              text-zinc-400
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <Clock3 size={18} />

              <span>
                Pon - Czw: 10:00 - 23:00
              </span>
            </div>

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <Clock3 size={18} />

              <span>
                Pt - Nd: 09:00 - 01:00
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div
        className="
          border-t
          border-zinc-800
          px-6
          py-6
          text-center
          text-sm
          text-zinc-500
        "
      >
        © 2026 CINEFILE. Wszystkie prawa zastrzeżone.
      </div>

    </footer>
  );
}