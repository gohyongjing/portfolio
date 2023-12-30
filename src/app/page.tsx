import NavBar from "@/app/ui/nav/nav-bar";
import { Source_Code_Pro } from 'next/font/google'
import SocialMediaIcons from "./social-media-icons";
import Separator from "./ui/separator";
import Greeting from "./greeting";

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="h-screen flex flex-col justify-center align-middle bg-neutral-800 text-neutral-50">
        <div className={sourceCodePro.className}>
          <Greeting />
          <Separator />
          <SocialMediaIcons />
        </div>
      </div>
    </>
  );
}
