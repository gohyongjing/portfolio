import SubsectionHeader from "./subsection-header"

type SubsectionProps = {
  heading?: React.ReactNode
  subheading?: React.ReactNode
  additionalInfo?: React.ReactNode
  content?: React.ReactNode
  children?: React.ReactNode
  expanded?: boolean,
  id?: string
}

export default function Subsection({
  heading = '',
  subheading = '',
  additionalInfo = '',
  content = '',
  children,
  expanded = false,
  id = ''
}: SubsectionProps) {
  return (
    <div className="my-8">
      <SubsectionHeader
        heading={heading}
        expandable={Boolean(children)}
        id={id}
      />
      <h3 className="text-neutral-500 dark:text-neutral-400">
        {additionalInfo}
      </h3>
      <p className="my-4">
        {content}
      </p>
      <h3 className="text-blue-600 dark:text-emerald-400">
        {subheading}
      </h3>
      {
        expanded
          ? children
          : <></>
      }
    </div>
  );
}
