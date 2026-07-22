"use client";

import { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import flameAnimation from "../../public/animations/flameAnimation.json";

interface AnimatedFlameProps {
  streak: number;
}

export default function AnimatedFlame({ streak }: AnimatedFlameProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  let size = "h-8 w-8";
  let speed = 0.7;

  if (streak >= 3) {
    size = "h-9 w-9";
    speed = 0.9;
  }

  if (streak >= 7) {
    size = "h-14 w-14";
    speed = 1.4;
  }

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  if (streak === 0) {
    return (
      <Lottie
        animationData={flameAnimation}
        autoplay={false}
        loop={false}
        className="h-8 w-8 grayscale opacity-40"
      />
    );
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={flameAnimation}
      loop
      autoplay
      className={size}
    />
  );
}