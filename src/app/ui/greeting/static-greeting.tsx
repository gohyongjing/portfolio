const completeGreeting = 'Hello! I\'m';
const completeName = 'Yong Jing';

export const lastStep = completeGreeting.length + completeName.length;

type StaticGreetingProps = {
  step?: number
}

export default function StaticGreeting({step = lastStep}: StaticGreetingProps) {
  const nameIndex = Math.max(step - completeGreeting.length, 0);

  return (
    <>
      <div className="mx-10 sm:mx-20 text-2xl">
        {
          completeGreeting.substring(0, step)
        }
      </div>
        <div className="flex ml-12 mt-4 mb-10 text-4xl sm:text-8xl text-blue-500">
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
