'use client';

import { AccessibleIcon } from "@/lib/radix-ui";
import GithubIcon from "@/app/ui/icon/github";
import ExternalLinkIcon from "@/app/ui/icon/external-link";

export default function SnailExpressIcons() {
  return <div className="flex gap-4">
    <AccessibleIcon.Root label="Link to Snail Express website">
      <a className='flex gap-2 group hover:underline hover:text-neutral-50 text-neutral-500' target="_blank" href="https://snail-express.firebaseapp.com/" rel="noopener noreferrer">
        <ExternalLinkIcon />
        Snail Express
      </a>
    </AccessibleIcon.Root>
    <AccessibleIcon.Root label="Link to Snail Express Github repository">
      <a className='flex gap-2 group hover:underline hover:text-neutral-50 text-neutral-500' target="_blank" href="https://github.com/gohyongjing/snail-express" rel="noopener noreferrer">
        <GithubIcon />
        Github
      </a>
    </AccessibleIcon.Root>
  </div>;
}
