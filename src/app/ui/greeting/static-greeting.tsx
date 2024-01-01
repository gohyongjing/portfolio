const completeGreeting = 'Hello! I\'m';
const completeName = 'Yong Jing';

export const lastStep = completeGreeting.length + completeName.length;

type StaticGreetingProps = {
  step?: number
}

export default function StaticGreeting({step = lastStep}: StaticGreetingProps) {
  const nameIndex = Math.max(step - completeGreeting.length, 0);
  const partialGreeting = step > 0 ? completeGreeting.substring(0, step) : completeGreeting;
  const partialName = step > 0 ? completeName.substring(0, nameIndex) : completeName;
  

  return (
    <div className={step == 0 ? 'animate-fade-in' : ''}>
      <div className="mx-10 sm:mx-20 text-2xl">
        {
          partialGreeting
        }
      </div>
      <div className="flex ml-12 mt-4 mb-10 text-4xl sm:text-8xl text-blue-500">
        <b>
          {
            partialName
          }
        </b>
        <span className="text-neutral-700 animate-blink">
          {
            step == lastStep ? '|' : ''
          }
        </span>
      </div>
    </div>
  );
}
