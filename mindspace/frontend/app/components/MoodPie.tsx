"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    {name: "Happy", value :52},
    {name: "Calm", value :25},
    {name: "Angry", value :10},
    {name: "Sad", value :13},
];

const colors=[
    "#FACC15", // bg-yellow-400
    "#6EE7B7", // bg-emeral-300
    "#F87171", // bg-red-400
    "#60A5FA", // bg-blue-400
];

export default function MoodPie(){
    return(
        <>
            <div className="h-40 w-40">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            innerRadius={55}
                            outerRadius={75}
                            paddingAngle={3}
                        >{data.map((entry,index)=>(
                            <Cell
                                key={index}
                                fill={colors[index]}
                            />
                        ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                
            </div>
        </>
    );
}