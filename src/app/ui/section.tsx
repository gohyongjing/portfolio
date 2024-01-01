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
    <div className="mx-8 sm:mx-16 md:mx-36" id={id}>
      <div className="h-12">
        {
          /* Empty div to pad the top to allow automatic
          scrolling without being blocked by the nav bar */
        }
      </div>
      <h1 className="my-2 text-2xl text-blue-500">
        {heading}
      </h1>
      {content}
    </div>
  );
}
