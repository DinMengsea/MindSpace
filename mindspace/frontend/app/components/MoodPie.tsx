"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Happy", value: 52 },
  { name: "Calm", value: 25 },
  { name: "Angry", value: 10 },
  { name: "Sad", value: 13 },
];

const colors = [
  "#FACC15", // Yellow
  "#6EE7B7", // Green
  "#F87171", // Red
  "#60A5FA", // Blue
];

export default function MoodPie() {
  return (
    <div className="h-40 w-40 transition-all duration-300">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={55}
            outerRadius={75}
            paddingAngle={3}
            stroke="transparent"
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={colors[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}