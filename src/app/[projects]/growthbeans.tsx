'use client';

import ExternalLinkIcon from "../ui/icon/external-link";
import LinkIcon from "../ui/icon/link-icon";
import Subsection from "../ui/section/subsection";

const id = 'growthbeans';

export default function GrowthBeansSubsection({expanded}: {expanded: string}) {
  return <Subsection
    heading="Web Developer • Growthbeans"
    additionalInfo='May 2023 - Jul 2023'
    subheading='[TypeScript, ReactJS, TailwindCSS, Firebase]'
    content="Collaborated with developers and designers to maintain and improve on the Web App built for Growthbean's support group program for participants' sharing and introspection"
    expanded={expanded == id}
    id={id}
  >
    <div className="my-4 flex flex-col gap-8 leading-8">
      <iframe 
        title="Growthbeans page"
        scrolling="no"
        className="my-8 self-center h-[44rem] w-full pointer-events-none"
        src="https://www.growthbeans.com/growth-circles.html"
      />
      <p>
        This is my very first internship! Growthbeans is a social enterprise that empowers individuals to grow meaningfully. I was tasked to work on the GrowthCircles Web App, which helps facilitators hold support group sessions to improve participant&apos;s mental well-being and people skills. The Web App prompts participants with meaningful questions, facilitates interaction among participants and helps record their reflections.
      </p>
      <p>
        While the GrowthCircles code base is pretty big, it was very neatly organised and I could find my way around relatively well. GrowthCircles is written in TypeScript, ReactJS and supported by Firebase&apos;s Backend-as-a-Service. Some of my tasks include implementing the user&apos;s profile settings page, admin portal to customise different sections of GrowthCircle as well as participants&apos; journal and feedback review page for each session.
      </p>
      <p>
        Growthbeans also set an extremely high bar for welfare, giving us a whopping 4 days of remote work! There was only 1 day of on-site work per week, where the team came together to work in the same room. Surprisingly, this did not affect team building and collaboration negatively, as we had no issues communicating with each other for work related issues digitally while working from home (More companies should do this!!!)
      </p>
      <p>
        It was pretty cool to see how the different roles work together in a software team like a well oiled machine to achieve grand outcomes! Thank you Shamantha, Shane and Dylan, for giving me the opportunity to work at Growthbeans, Kirk and Kent, for the guidance, code reviews and valuable feedback, and all my other friends working alongside me for being so pleasant to work with. Firstly, the only other developer intern, Randall, it was pretty fun coding together. Angeles and Zahid, thanks for providing the UI on figma (I&apos;m bad at design :p). Paaveiy, Ruth, Brenda, Johnny and Lincoln, whos work are separate from the product team but we still ate, talked and laughed with each other during our weekly lunch. My experience at Growthbeans won&apos;t be the same without y&apos;all!
      </p>
      <div className="flex gap-4">
        <LinkIcon
          href='https://www.growthbeans.com/'
          label='Link to GrowthBeans website'
        >
          <ExternalLinkIcon />
          <span className="hidden sm:inline">
            GrowthBeans Website
          </span>
        </LinkIcon>
        <LinkIcon
          href='https://growthcircles.growthbeans.com/'
          label='Link to GrowthCircles website'
        >
          <ExternalLinkIcon />
          <span className="hidden sm:inline">
            GrowthCircles Web App
          </span>
        </LinkIcon>
      </div>
    </div>
  </Subsection>
}
