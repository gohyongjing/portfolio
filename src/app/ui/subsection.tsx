type SubsectionProps = {
  heading: React.ReactNode
  subheading?: React.ReactNode
  content: React.ReactNode
}

export default function Subsection({
  heading,
  subheading = '',
  content
}: SubsectionProps) {
  return (
    <div className="my-4">
      <h2 className="my-1 text-xl text-emerald-400">
        {heading}
      </h2>
      <h3 className="text-emerald-400">
        {subheading}
      </h3>
      <br />
      {content}
    </div>
  );
}
