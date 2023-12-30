'use client';

import NavBar from "@/app/ui/nav/nav-bar";
import { Separator, Icons } from "@/lib/radix-ui";
import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="h-screen flex flex-col justify-center align-middle bg-neutral-800 text-neutral-50">
        <div className={sourceCodePro.className}>
          <div className="mx-20 text-xl">Hello! I&apos;m</div>
          <div className="flex ml-12 mt-4 mb-10 text-8xl text-blue-500">
            <b>
              Yong Jing
            </b>
            <span className="text-neutral-700 animate-blink">
              |
            </span>
          </div>
          <Separator.Root
          className="mx-10 my-4 h-px w-100 bg-neutral-600 animate-fade-in"
            decorative
          />
          <div className="flex mx-16 gap-2 animate-fade-in">
            <Icons.GitHubLogoIcon className=" w-6 h-6 text-neutral-400 hover:text-neutral-50 cursor-pointer"/>
            <Icons.LinkedInLogoIcon className="w-6 h-6 text-neutral-400 hover:text-neutral-50 cursor-pointer"/>
          </div>
        </div>
      </div>
    </>
  );
}
