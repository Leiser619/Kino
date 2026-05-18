// src/pages/admin/AdminPage.tsx

import AdminMenu from "../../features/admin/components/AdminMenu";

import AdminStats from "../../features/admin/components/AdminStats";
import AddHallForm from "../../features/admin/components/AddHallForm";
import AddScreeningForm from "../../features/admin/components/AddScreeningForm";

export default function AdminPage() {

  return (

    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
      "
    >

      <AdminMenu />

      <main
        className="
          ml-[280px]
          min-h-screen
          p-10
        "
      >

        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Zarządzanie kinem i pokazami
          </p>

        </div>

        {/* STATS */}

        <AdminStats />

        {/* FORMS */}

        <div className="mt-10 grid grid-cols-2 gap-8">

          <AddHallForm />

          <AddScreeningForm />

        </div>

      </main>

    </div>
  );
}