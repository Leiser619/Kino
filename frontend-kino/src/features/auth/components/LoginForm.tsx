// src/features/auth/components/LoginForm.tsx

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { registerSchema } from "./registerSchema";
import type { RegisterFormData } from "./registerSchema";

import { useLogin } from "../hooks";

export default function LoginForm() {
  const {
    mutate,
    isPending,
    isError,
    error,
  } = useLogin();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (
    data: RegisterFormData
  ) => {

    mutate(data, {
      onSuccess: () => {
        navigate("/profile");
      },
    });
  };

  return (
    <div
      className="
        flex
        min-h-full
        items-center
        justify-center
        bg-black
        px-4
      "
    >

      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-950/90
          p-8
          shadow-2xl
          backdrop-blur
        "
      >

        <div className="mb-8 text-center">

          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              text-white
            "
          >
            Zaloguj się
          </h1>

          <p
            className="
              mt-2
              text-sm
              text-zinc-400
            "
          >
          </p>

        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <div>

            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-zinc-300
              "
            >
              Email
            </label>

            <input
              type="email"
              placeholder="mail"

              {...register("email")}

              className="
                w-full
                rounded-xl
                border
                border-zinc-700
                bg-zinc-900
                px-4
                py-3
                text-white
                outline-none
                transition

                placeholder:text-zinc-500

                focus:border-red-500
                focus:ring-2
                focus:ring-red-500/20
              "
            />

            {errors.email && (
              <p
                className="
                  mt-2
                  text-sm
                  text-red-500
                "
              >
                {errors.email.message}
              </p>
            )}

          </div>


          <div>

            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-zinc-300
              "
            >
              Hasło
            </label>

            <input
              type="password"
              placeholder="haslo"

              {...register("password")}

              className="
                w-full
                rounded-xl
                border
                border-zinc-700
                bg-zinc-900
                px-4
                py-3
                text-white
                outline-none
                transition

                placeholder:text-zinc-500

                focus:border-red-500
                focus:ring-2
                focus:ring-red-500/20
              "
            />

            {errors.password && (
              <p
                className="
                  mt-2
                  text-sm
                  text-red-500
                "
              >
                {errors.password.message}
              </p>
            )}

          </div>

          {isError && (
            <div
              className="
                rounded-xl
                border
                border-red-500/20
                bg-red-500/10
                p-3
                text-sm
                text-red-400
              "
            >
              {(error as any)?.response?.data
                ?.message ||
                "Cos poszlo nie tak"}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}

            className="
              w-full
              rounded-xl
              bg-red-600
              py-3
              font-semibold
              text-white
              transition

              hover:bg-red-500

              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {isPending
              ? "Logowanie..."
              : "Zaloguj się"}
          </button>

        </form>

        <div
          className="
            mt-6
            text-center
          "
        >

          <p
            className="
              text-sm
              text-zinc-400
            "
          >
            Nie masz konta?
          </p>

          <button
            onClick={() =>
              navigate("/register")
            }

            className="
              mt-2
              text-sm
              font-medium
              text-red-500
              transition
              hover:text-red-400
            "
          >
            Zarejestruj się
          </button>

        </div>

      </div>
    </div>
  );
}