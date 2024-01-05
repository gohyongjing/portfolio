import NavBar from "@/app/ui/nav/nav-bar";
import SocialMediaIcons from "./ui/social-media-icons";
import Separator from "./ui/separator";
import Greeting from "./ui/greeting/greeting";
import Section from "./ui/section";
import Subsection from "./ui/subsection";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <div className="bg-neutral-800 text-neutral-50">
      <NavBar />
      <div className="flex flex-col">
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
                subheading='[TypeScript, ReactJS, TailwindCSS, Firebase]'
                additionalInfo='May 2023 - Jul 2023'
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
                <Subsection
                  heading="Snail Express"
                  subheading={
                    <>
                      [TypeScript, ReactJS, Firebase]
                    </>
                  }
                  content="An online learning platform for blended learning consisting of forums, live lecture feedback and live quizzes. Developed in response to COVID-19 moving lessons online"
                />
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
