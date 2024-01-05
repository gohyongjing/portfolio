'use client';

import { Icons } from "@/lib/radix-ui";

export default function SocialMediaIcons() {
  return (
    <div className="flex my-2 ml-16 mr-4 gap-4 animate-fade-in">
      <a target="_blank" href="https://github.com/gohyongjing" rel="noopener noreferrer">
        <Icons.GitHubLogoIcon className=" w-6 h-6 dark:text-neutral-400 hover:text-neutral-50 cursor-pointer"/>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/gohyongjing/" rel="noopener noreferrer">
        <Icons.LinkedInLogoIcon className="w-6 h-6 dark:text-neutral-400 hover:text-neutral-50 cursor-pointer"/>
      </a>
    </div>
  );
}
