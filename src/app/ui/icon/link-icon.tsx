'use client';

import { AccessibleIcon } from "@/lib/radix-ui";

type LinkIconProps = {
  href: string | undefined
  label: string
  children?: React.ReactNode
}

export default function LinkIcon({
  href,
  label = '',
  children
}: LinkIconProps) {
  return <AccessibleIcon.Root label={label}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className='flex gap-2 group text-neutral-500 hover:text-neutral-800 hover:underline hover:dark:text-neutral-50'
    >
      {children}
    </a>
  </AccessibleIcon.Root>;
}
