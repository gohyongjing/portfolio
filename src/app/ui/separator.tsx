'use client';

import { Separator as RadixSeparator } from "@/lib/radix-ui";

export default function Separator({marginX = '10'}: {marginX?: string}) {
  return (
    <RadixSeparator.Root
      className={`mx-${marginX} my-4 h-px w-100 bg-neutral-600 animate-fade-in`}
      decorative
    />
  );
}
