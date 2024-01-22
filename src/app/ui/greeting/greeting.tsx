'use client';

import { useEffect, useState } from "react";
import StaticGreeting, { lastStep } from "./static-greeting";

const durations = [50, 35, 70, 105];

export default function Greeting() {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    if (step == lastStep) {
      return;
    }
    const duration = durations[step % durations.length];
    const interval = setTimeout(() => setStep(step + 1), duration)

    return () => clearInterval(interval);
  }, [step]);

  return <StaticGreeting step={step} />;
}
