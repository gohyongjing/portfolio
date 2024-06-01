import Separator from "../separator"
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
    <div>
      <SubsectionHeader
        heading={heading}
        expandable={Boolean(children)}
        id={id}
      />
      <div className="mb-8 mx-8">
        <h3 className="text-neutral-500 dark:text-neutral-400">
          {additionalInfo}
        </h3>
        <h3 className="text-blue-600 dark:text-emerald-400">
          {subheading}
        </h3>
        <p className="my-6">
          {content}
        </p>
        {
          expanded
            ? children
            : <></>
        }
      </div>
    </div>
  );
}
