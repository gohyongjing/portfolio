type SubsectionProps = {
  heading: React.ReactNode
  subheading?: React.ReactNode
  additionalInfo?: React.ReactNode
  content: React.ReactNode
}

export default function Subsection({
  heading,
  subheading = '',
  additionalInfo = '',
  content
}: SubsectionProps) {
  return (
    <div className="my-8">
      <h2 className="my-1 text-2xl">
        {heading}
      </h2>
      <h3 className="text-neutral-500 dark:text-neutral-400">
        {additionalInfo}
      </h3>
      <p className="my-4">
        {content}
      </p>
      <h3 className="text-blue-600 dark:text-emerald-400">
        {subheading}
      </h3>
    </div>
  );
}
