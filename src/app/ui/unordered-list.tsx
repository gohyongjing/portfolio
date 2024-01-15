export default function UnorderedList({children}: {children?: React.ReactNode}) {
  return <ul className="ml-8 list-disc list-outside">
    {children}
  </ul>
}