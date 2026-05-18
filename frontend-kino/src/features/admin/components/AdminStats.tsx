import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Zajęte", value: 78 },
  { name: "Wolne", value: 22 },
];

export default function AdminStats() {

  return (
    <div className="grid grid-cols-3 gap-6">

      <div
        className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >

        <p className="text-sm text-slate-400">
          Dzisiejsze pokazy
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          24
        </h2>

      </div>

      <div
        className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >

        <p className="text-sm text-slate-400">
          Zajęte miejsca
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          78%
        </h2>

      </div>

      <div
        className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >

        <p className="text-sm text-slate-400">
          Aktywne sale
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          6
        </h2>

      </div>

      <div
        className="
          col-span-2
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >

        <h3 className="mb-6 text-xl font-semibold text-white">
          Obłożenie miejsc
        </h3>

        <div className="h-[300px]">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={data}
                innerRadius={80}
                outerRadius={120}
                paddingAngle={4}
                dataKey="value"
              >

                <Cell fill="#2563eb" />
                <Cell fill="#1e293b" />

              </Pie>

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      <div
        className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >

        <h3 className="mb-4 text-lg font-semibold text-white">
          Zajęte sale
        </h3>

        <div className="space-y-4">

          {[
            "IMAX 1",
            "VIP Gold",
            "Sala 4",
          ].map((hall) => (

            <div
              key={hall}

              className="
                rounded-2xl
                bg-slate-950
                p-4
              "
            >

              <p className="text-white">
                {hall}
              </p>

              <p className="text-sm text-slate-400">
                Trwa pokaz
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}   