"use client";

import { useEffect, useRef } from "react";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import Entry from "../../public/animations/Entry.json"

interface AnimatedEntryProp{
    count: number;
}

export default function AnimatedEntry({count}:AnimatedEntryProp){
    const lootieRef = useRef<LottieRefCurrentProps>(null);

    let size = "h-8 w-8";
    let speed = 0.7;


    if (count >= 3){
        size = "h-9 w-9";
        speed = 0.9;
    }

    if (count >= 7){
        size = "h-14 w-14";
        speed = 1.4;
    }

    useEffect(() => {
        if(lootieRef.current){
            lootieRef.current.setSpeed(speed);
        }
    }, [count]);


    if (count === 0){
        return(
            <Lottie
                animationData={Entry}
                autoplay={false}
                loop={false}
                className="h-8 w-8 grayscale opacity-40"
            />
        );
    }

    return (
        <Lottie 
        lottieRef={lootieRef} 
        animationData={Entry} 
        loop
        autoplay
        className={size}
        />
    );
}