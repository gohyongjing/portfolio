'use client';

import { Separator as RadixSeparator } from "@/lib/radix-ui";

export default function Separator() {
  return (
    <RadixSeparator.Root
    className="mx-10 my-4 h-px w-100 bg-neutral-600 animate-fade-in"
      decorative
    />
  );
}
