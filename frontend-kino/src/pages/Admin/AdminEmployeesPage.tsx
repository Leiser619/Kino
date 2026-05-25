// src/pages/admin/AdminEmployeesPage.tsx

import { useState } from "react";

import AdminMenu from "../../features/admin/components/AdminMenu";

import {
  useAddEmployee,
  useEmployees,
  useRemoveEmployee,
} from "../../features/admin/hooks";

type Employee = {
  id: number;
  email: string;
  role: string;
};

export default function AdminEmployeesPage() {

  const [email, setEmail] =
    useState("");

  const {
    data: employees,
    isLoading,
  } = useEmployees();

  const addEmployeeMutation =
    useAddEmployee();

  const removeEmployeeMutation =
    useRemoveEmployee();

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      if (!email.trim()) {
        return;
      }

      try {

        await addEmployeeMutation.mutateAsync(
          email
        );

        setEmail("");

      } catch (err) {

        console.error(err);

      }

    };

  const handleRemove =
    async (id: number) => {

      try {

        await removeEmployeeMutation.mutateAsync(
          id
        );

      } catch (err) {

        console.error(err);

      }

    };

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

        <div
          className="
            mb-10
            flex
            items-center
            justify-between
          "
        >

          <div>

            <h1
              className="
                text-4xl
                font-bold
              "
            >
              Employees
            </h1>

            <p
              className="
                mt-2
                text-slate-400
              "
            >
              Zarządzanie pracownikami kina
            </p>

          </div>

          <div
            className="
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
              px-6
              py-4
            "
          >

            <p
              className="
                text-sm
                text-slate-400
              "
            >
              Liczba adminów
            </p>

            <p
              className="
                mt-1
                text-3xl
                font-bold
              "
            >
              {employees?.length || 0}
            </p>

          </div>

        </div>

        {/* ADD EMPLOYEE */}

        <div
          className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900
            p-8
          "
        >

          <h2
            className="
              text-2xl
              font-semibold
            "
          >
            Dodaj pracownika
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-slate-400
            "
          >
            Podaj email istniejącego użytkownika,
            aby nadać mu rolę administratora.
          </p>

          <form
            onSubmit={handleSubmit}
            className="
              mt-6
              flex
              gap-4
            "
          >

            <input
              type="email"
              placeholder="Email użytkownika..."
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                h-14
                flex-1
                rounded-2xl
                border
                border-slate-700
                bg-slate-950
                px-5
                text-white
                outline-none
                transition
                focus:border-blue-500
              "
            />

            <button
              type="submit"
              disabled={
                addEmployeeMutation.isPending
              }
              className="
                h-14
                rounded-2xl
                bg-blue-600
                px-8
                font-semibold
                transition
                hover:bg-blue-500
                disabled:opacity-50
              "
            >

              {addEmployeeMutation.isPending
                ? "Dodawanie..."
                : "Dodaj admina"}

            </button>

          </form>

        </div>

        {/* EMPLOYEE LIST */}

        <div className="mt-10">

          <div
            className="
              mb-5
              flex
              items-center
              justify-between
            "
          >

            <h2
              className="
                text-2xl
                font-semibold
              "
            >
              Lista pracowników
            </h2>

            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Aktywni administratorzy systemu
            </p>

          </div>

          {isLoading && (

            <div
              className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900
                p-10
                text-center
                text-slate-400
              "
            >
              Ładowanie pracowników...
            </div>

          )}

          {!isLoading &&
            employees?.length === 0 && (

            <div
              className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900
                p-10
                text-center
                text-slate-400
              "
            >
              Brak administratorów
            </div>

          )}

          <div
            className="
              space-y-4
            "
          >

            {employees?.map(
              (
                employee: Employee
              ) => (

                <div
                  key={employee.id}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900
                    p-6
                    transition
                    hover:border-slate-700
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-5
                    "
                  >

                    {/* AVATAR */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-600/20
                        text-xl
                        font-bold
                        text-blue-400
                      "
                    >

                      {employee.email
                        .charAt(0)
                        .toUpperCase()}

                    </div>

                    {/* INFO */}

                    <div>

                      <p
                        className="
                          text-lg
                          font-semibold
                        "
                      >
                        {employee.email}
                      </p>

                      <div
                        className="
                          mt-2
                          inline-flex
                          rounded-full
                          bg-emerald-500/20
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-emerald-400
                        "
                      >
                        {employee.role}
                      </div>

                    </div>

                  </div>

                  {/* ACTION */}

                  <button
                    onClick={() =>
                      handleRemove(
                        employee.id
                      )
                    }
                    disabled={
                      removeEmployeeMutation.isPending
                    }
                    className="
                      rounded-2xl
                      border
                      border-red-500/30
                      bg-red-500/10
                      px-5
                      py-3
                      font-medium
                      text-red-400
                      transition
                      hover:bg-red-500/20
                      disabled:opacity-50
                    "
                  >
                    Usuń admina
                  </button>

                </div>

              )
            )}

          </div>

        </div>

      </main>

    </div>
  );
}