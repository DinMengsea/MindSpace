import { BookOpen, CalendarDays, Flame, Clock3 } from "lucide-react";
import StatCard from "./StatCard";
import AnimatedFlame from "./AnimatedFlame";
import AnimatedEntry from "./AnimatedEntry";
import AnimatedMedal from "./AnimatedMedal";
import AnimatedCalendar from "./AnimatedCalendar";

export default function StatsSection(){
    return(
        <section className="mt-5 grid grid-cols-4 gap-4">
            <StatCard
                icon={<AnimatedEntry count={24}/>} 
                title={"Total Entires"} 
                value={"24"} 
                subtitle={"Keep Going! ✨"}            
                />
           <StatCard
                icon={<AnimatedCalendar count={7}/>}
                title="This Week"
                value="7"
                subtitle="+2 from last week"
                />

            <StatCard
                icon={<AnimatedFlame streak={7} />}
                title="Streak"
                value="7 days"
                subtitle="Amazing consistency! 🔥"
                />

            <StatCard
                icon={<AnimatedMedal count={8432}/>}
                title="Total Words"
                value="8,432"
                subtitle="Your thoughts matter 💜"
                />
        </section>
    );
}