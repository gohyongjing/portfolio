import NavBar from "@/app/ui/nav/nav-bar";
import SocialMediaIcons from "./ui/icon/social-media-icons";
import Separator from "./ui/separator";
import Greeting from "./ui/greeting/greeting";
import Section from "./ui/section/section";
import Subsection from "./ui/section/subsection";
import Footer from "./ui/footer";
import SnailExpressSubsection from "./[projects]/snail-express";
import GrowthBeansSubsection from "./[projects]/growthbeans";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    expanded?: string;
  };
}) {
  const expanded = searchParams?.expanded ?? '';

  return (
    <div className="bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50">
      <NavBar />
      <div className="flex flex-col">
        <div className="md:mx-24 h-[90vh] flex flex-col justify-center">
          <Greeting />
          <Separator />
          <SocialMediaIcons />
        </div>
        <div className="flex flex-col gap-32">
          <Section
            heading={'About Me'}
            id='about'
            content={
              <p className="mx-8">
                Seeking to build simple, elegant solutions to complex problems
                <br />
                <br />
                Year 3 Computer Science student @ NUS
              </p>
            }
          />
          <Section
            heading="Work"
            id='work'
            content={
              <GrowthBeansSubsection expanded={expanded} />
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
                      [TypeScript, ReactJS, Express, socket.io, RabbitMQ, AWS EC2, AWS ELB]
                    </>
                  }
                  content="Real-time collaborative platform that matches users to prepare for interviews by solving programming questions together"
                />
               <Subsection
                  heading="FriendlyLink"
                  subheading={
                    <>
                      [Java, Gradle, JUnit]
                    </>
                  }
                  content="Command based app for administrative staff of voluntary wellfare organisations to easily record personal information of elderly members and volunteers and pair them up"
                />
                <SnailExpressSubsection expanded={expanded} />
              </>
            }
          />
        </div>
      </div>
      <div className="h-40" />
      <Separator />
      <Footer />
    </div>
  );
}
