'use client';

import { useEffect, useState } from "react";

const completeGreeting = 'Hello, I\'m';
const completeName = 'Yong Jing';

const lastStep = completeGreeting.length + completeName.length;
const durations = [100, 70, 140, 210];

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

  const nameIndex = Math.max(step - completeGreeting.length, 0);

  return (
    <>
      <div className="mx-20 text-xl">
        {
          completeGreeting.substring(0, step)
        }
      </div>
        <div className="flex ml-12 mt-4 mb-10 text-8xl text-blue-500">
          <b>
            {
              completeName.substring(0, nameIndex)
            }
          </b>
          <span className="text-neutral-700 animate-blink">
            {
              step == lastStep ? '|' : ''
            }
          </span>
        </div>
    </>
  );
}
