'use client';

import ExternalLinkIcon from "../ui/icon/external-link";
import LinkIcon from "../ui/icon/link-icon";
import Subsection from "../ui/section/subsection";

const id = 'jlk';

export default function JLKSubsection({expanded}: {expanded: string}) {
  return <Subsection
    heading="Software Developer • JLK Technologies"
    additionalInfo='May 2024 - Dec 2024'
    subheading='[TypeScript, ReactJS, Python, FastAPI, PostgreSQL]'
    content="Collaborated with developers to maintain and improve on JLK's teleconsultation and medical kiosk services"
    expanded={expanded == id}
    id={id}
  >
    <iframe 
      title="JLK Technologies page"
      scrolling="no"
      className="my-4 self-center h-[50rem] w-full pointer-events-none"
      src="https://www.medlyves.com/general-8"
    />
    <h3 className="mb-8 text-neutral-500 dark:text-neutral-400">
      Published: Jun 2025
    </h3>
    <div className="my-4 flex flex-col gap-8 leading-8">
      <p>
        JLK is my second internship, a medical tech company that helps simplify medical processes by providing a platform for tele consultation and kiosks to speed up the process of collecting patient&apos;s vitals.
      </p>
      <p>
        This internship gave me a solid foundation of many different aspects of software engineering, from Javascript frontend, FastAPI backend, end-to-end testing as well as continuous integration and delivery. Besides common tasks like building tables on frontend and API endpoints on the backend, I also got to do other cool stuff like integrating external video call service (100ms) and other business to business API integration. Some of code structure I designed in JLK, such as assigning error codes to each failure point, was so useful and widely applicable that I even brought it to my next internship (I&apos;m writing this way after my internship at JLK ended)
      </p>
      <p>
        To all my friends at JLK - Yappers Yanni and Ariel, Jay, Jonas, Cedric, Gang Wei, Vaishnavi, Ze Ming, Aaron, Caleb, Zoe and David -  Very thankful for all of you for making this a wonderful and memorable experience! Your presence in office, your insights, your yapping and our lunch breaks together provided me a positive experience and made work much more enjoyable! I even look forward to going to office sometimes! Ya&apos;ll made me grow as a person, becoming a better software engineer and more importantly, a better friend (I hope!). I&apos;m grateful to have kept in touch with some of ya&apos;ll and hope I can continue to do so!
      </p>
      <div className="flex gap-4">
        <LinkIcon
          href='https://www.jlk-tech.com/'
          label="Link to JLK Technologies' website"
        >
          <ExternalLinkIcon />
          <span className="hidden sm:inline">
            JLK Technologies Website
          </span>
        </LinkIcon>
        <LinkIcon
          href='https://www.medlyves.com'
          label='Link to MedLyves website'
        >
          <ExternalLinkIcon />
          <span className="hidden sm:inline">
            MedLyves Website
          </span>
        </LinkIcon>
      </div>
    </div>
  </Subsection>
}
