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
    <div className="ml-2 sm:mx-16 md:mx-36" id={id}>
      <div className="h-12">
        {
          /* Empty div to pad the top to allow automatic
          scrolling without being blocked by the nav bar */
        }
      </div>
      <h1 className="mx-8 my-3 text-3xl text-blue-600 dark:text-emerald-400">
        {heading}
      </h1>
      {content}
    </div>
  );
}
