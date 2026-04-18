'use client';

import ExternalLinkIcon from "../ui/icon/external-link";
import LinkIcon from "../ui/icon/link-icon";
import Subsection from "../ui/section/subsection";

const id = 'cpf';

export default function CpfSubsection({ expanded }: { expanded: string }) {
  return <Subsection
    heading="Software Engineer • CPF Board"
    additionalInfo='Jan 2025 - Jul 2025'
    subheading='[TypeScript, NextJS, FastAPI, Terraform, AWS]'
    content="Designed architecture and built audio recording management platform to collect, transcribe, analyse, review and playback audio and video recordings in customer service centers"
    expanded={expanded == id}
    id={id}
  >
    {/* <iframe 
      title="CPF page"
      scrolling="no"
      className="my-4 self-center h-[44rem] w-full pointer-events-none"
      src="https://www.google.com"
    /> */}
    <h3 className="mb-8 text-neutral-500 dark:text-neutral-400">
      Published: Apr 2026
    </h3>
    <div className="my-4 flex flex-col gap-8 leading-8">
      <p>
        CPF was my very first job experience working for the public sector. The office looks really nice and the environment was very different from my previous internships. Although I expected a lot of ‘red tape’ scenarios due to the restrictive nature of working in a large organisation, especially for the government, things went surprisingly smoothly due to the nature of the team I was working in, which was the frontier team in charge of building new projects and proof-of-concepts.
      </p>
      <p>
        At CPF, I had the opportunity to build the prototype for a platform to analyse and search audio and video recordings from our customer service centers, for ease of review of past conversations, training and audit purposes. I also had the opportunity to build a chatbot to help interview employees with conflicts with their employers regarding CPF contributions, getting the chatbot to ask clarifying questions and generating reports.
      </p>
      <p>
        My projects allowed me to experience NextJs for the first time, a full stack framework showing me an alternative to having separate frontend and backend. It also provided me a very rare opportunity to design the architecture from scratch, making architectural mistakes and then correcting them! It also allowed me to put into practice the terraform knowledge I learnt in school, to configure infrastructure as code, connecting different AWS services together and debugging misconfigured ACL and firewall rules blocking my services.
      </p>
      <p>
        I want to thank my team for making this possible, and giving me this meaningful experience at CPF, from the working style and culture to the interesting conversations at lunch. Firstly to Chee Siang, for giving me the opportunity to work here. Also for Keh and Chang Qing, for guiding me in the project, providing feedback and support whenever needed to complete my tasks. Jian Bing, Shu Yuan and Issac, it was fun working talking to yall and working with you on our project! Learned a lot from our code reviews and discussions, and enjoyed our lunch with yall and your friends and playing Go!
      </p>
      <div className="flex gap-4">
        <LinkIcon
          href='https://www.cpf.gov.sg/member/who-we-are'
          label='Link to CPF Board website'
        >
          <ExternalLinkIcon />
          <span className="hidden sm:inline">
            CPF Board Website
          </span>
        </LinkIcon>
      </div>
    </div>
  </Subsection>
}
