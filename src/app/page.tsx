import NavBar from "@/app/ui/nav/nav-bar";
import { Source_Code_Pro } from 'next/font/google'
import SocialMediaIcons from "./social-media-icons";
import Separator from "./ui/separator";
import Greeting from "./ui/greeting/greeting";
import Section from "./ui/section";
import Subsection from "./ui/subsection";

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={sourceCodePro.className}>
        <div className="flex flex-col bg-neutral-800 text-neutral-50">
          <div className="md:mx-24 h-[90vh] flex flex-col justify-center">
            <Greeting />
            <Separator />
            <SocialMediaIcons />
          </div>
          <div className="flex flex-col animate-fade-in">
            <Section
              heading={'About Me'}
              id='about'
              content={
                <>
                  Seeking to build simple, elegant solutions to complex problems
                  <br />
                  <br />
                  Year 3 Computer Science student @ NUS
                </>
              }
            />
            <Section
              heading="Work"
              id='work'
              content={
                <Subsection
                  heading="Web Developer • Growthbeans"
                  subheading={
                    <>
                      [TypeScript, ReactJS, TailwindCSS, Firebase]
                      <br />
                      (May 2023 - Jul 23)
                    </>
                  }
                  content="Collaborated with developers and designers to maintain and improve on the Web App built for Growthbean's support group program for participants' sharing and introspection"
                />
              }
            />
            <Section
              heading="Projects"
              id='projects'
              content={
                <>
                  <Subsection
                    heading="PeerPrep"
                    subheading={
                      <>
                        [TypeScript, ReactJS, Express, socket.io, RabbitMQ, AWS EC2, AWS ELB]                    <br />
                      </>
                    }
                    content="Created website to match users in to prepare for interviews by solve programming questions in a shared real-time collaborative space"
                  />
                  <Subsection
                    heading="Snail Express"
                    subheading={
                      <>
                        [TypeScript, ReactJS, Firebase]
                      </>
                    }
                    content="Developed a online learning platform consisting of forums, live lecture feedback and live quizzes for online classes in a team of 2"
                  />
                </>
                
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
