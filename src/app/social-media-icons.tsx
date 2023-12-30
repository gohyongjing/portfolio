'use client';

import { Icons } from "@/lib/radix-ui";

export default function SocialMediaIcons() {
  return (
    <div className="flex mx-16 gap-2 animate-fade-in">
      <Icons.GitHubLogoIcon className=" w-6 h-6 text-neutral-400 hover:text-neutral-50 cursor-pointer"/>
      <Icons.LinkedInLogoIcon className="w-6 h-6 text-neutral-400 hover:text-neutral-50 cursor-pointer"/>
    </div>
  );
}
