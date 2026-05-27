// src/features/admin/components/AdminMenu.tsx

import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Clapperboard,
  Armchair,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

import { useMe } from "../../auth/hooks";

export default function AdminMenu() {

  const navigate = useNavigate();

  const { data: user } = useMe();
  const items = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      label: "Pracownicy",
      icon: Users,
      path: "/admin/employees",
    },
    {
      label: "Pokazy",
      icon: Clapperboard,
      path: "/admin/screenings",
    },
    {
      label: "Sale",
      icon: Armchair,
      path: "/admin/halls",
    },
    {
      label: "Ustawienia",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        flex
        h-screen
        w-[280px]
        flex-col
        border-r
        border-slate-800
        bg-slate-950
        text-white
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
          border-b
          border-slate-800
          px-6
          py-6
        "
      >

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-blue-600
            text-lg
            font-bold
          "
        >
          C
        </div>

        <div>
          <h1 className="text-lg font-semibold">
            Cinema Admin
          </h1>

          <p className="text-sm text-slate-400">
            Management Panel
          </p>
        </div>

      </div>

      <div className="flex-1 px-4 py-6">

        <div className="space-y-2">

          {items.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}

                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-2xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-slate-300
                  transition

                  hover:bg-slate-900
                  hover:text-blue-400
                "
              >

                <Icon size={18} />

                {item.label}

              </button>
            );
          })}

        </div>

      </div>

      <div
        className="
          border-t
          border-slate-800
          p-4
        "
      >

        <div
          className="
            mb-4
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-blue-600
              font-semibold
            "
          >
            {user?.email?.[0]?.toUpperCase()}
          </div>

          <div>
            <p className="text-sm font-medium">
              {user?.email}
            </p>

            <p className="text-xs text-slate-400">
              Administrator
            </p>
          </div>

        </div>

        <button
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-slate-700
            px-4
            py-3
            text-sm
            transition

            hover:border-blue-500
            hover:text-blue-400
          "
        >

          <LogOut size={16} />

          Wyloguj

        </button>

      </div>

    </aside>
  );
}