type SectionProps = {
  heading: React.ReactNode
  id?: string
  content: React.ReactNode
}

export default function Section({
  heading,
  id,
  content
}: SectionProps) {
  return (
    <div className="mx-4 sm:mx-16 md:mx-36 my-4" id={id}>
      <h1 className="my-2 text-2xl text-blue-500">
        {heading}
      </h1>
      {content}
    </div>
  );
}
