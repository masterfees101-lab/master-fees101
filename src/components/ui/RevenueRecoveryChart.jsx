import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
  Rectangle,
} from "recharts";

const data = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 72 },
  { name: "Apr", value: 0 },
];

export default function RevenueRecoveryChart() {
  return (
    <div className="w-full h-96 rounded-2xl bg-white  pt-7 mt-4">
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            {/* 95% Goal Line */}
            <ReferenceLine
              y={95}
              stroke="#D1D5DB"
              strokeDasharray="4 4"
              label={{ value: "Goal 95%", position: "right", fill: "#6B7280" }}
            />

            {/* 79% Progress Line */}
            <ReferenceLine
              y={79}
              stroke="#064E3B"
              strokeDasharray="6 6"
              label={{ value: "79%", position: "right", fill: "#064E3B" }}
            />

            <YAxis domain={[0, 100]} tick={{ fill: "#6B7280" }} />
            <XAxis dataKey="name" tick={{ fill: "#6B7280" }} />

            <Tooltip cursor={{ fill: "transparent" }} />

            {/* Default bars (light grey) */}
            <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#E5E7EB" />

            {/* Highlight last bar (dark green) */}
            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]}
              fill="#003f39"
              data={data.map((d, i) => ({
                ...d,
                value: i === data.length - 2 ? d.value : null, // highlight March
              }))}
              shape={(props) => {
                if (!props.height) return null;
                return (
                  <Rectangle
                    {...props}
                    radius={[10, 10, 0, 0]}
                    stroke="#003f39"
                    strokeWidth={2}
                  />
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
