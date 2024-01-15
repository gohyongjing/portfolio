import ExternalLinkIcon from "../ui/icon/external-link";
import GithubIcon from "../ui/icon/github";
import LinkIcon from "../ui/icon/link-icon";
import Subsection from "../ui/section/subsection";
import UnorderedList from "../ui/unordered-list";

const id = 'snail-express';

export default function SnailExpressSubsection({expanded}: {expanded: string}) {
  return <Subsection
    heading="Snail Express"
    subheading='[TypeScript, ReactJS, Firebase]'
    content="An online learning platform for blended learning consisting of forums, live lecture feedback and live quizzes. Developed in response to COVID-19 moving lessons online"
    expanded={expanded == id}
    id={id}
  >
    <div className="my-4 flex flex-col gap-8">
      <p>
        This is my very first web development project! This is a graded project for NUS Orbital to be completed together by me and my friend Nicholas. I started off by learning the basics from The Odin Project, from the command line and git to fundamentals of web development in HTML, CSS and JavaScript, and ending in industry standard frameworks like Express and React. Nicholas and I split up the work to implement the different features and started coding.
      </p>
      <p>
        I got into the flow of building components with the idea that a component is simply a function of its input props and state, which I feel is a really nice way of looking at things.
      </p>
      <p>
        As you might expect, we also faced many challenges on the way:
      </p>
      <UnorderedList>
        <li>
          We accidentally caused an infinite re-render loop by useEffect, eating up all free 50k Firestore daily reads (skill issue). To prevent that from happening again, we abstracted out database access operations into its own hook and put in console logs in all useEffects.
        </li>
        <li>
          Firebase Local Emulator Suite was in beta development, which had limited  features. Debugging was difficult due to incomplete logging features. Accidentally using the wrong environment for test runners (browser instead of node.js) or using incorrect inputs to functions (orderBy(&apos;ASC&apos;) instead of orderBy(&apos;asc&apos;)) both throw the same &apos;internal assertion failed exception&apos;, which wasn&apos;t very helpful. There is no way to prevent this, we simply had to spend more hours debugging.
        </li>
      </UnorderedList>
      <p>
        We managed to fix the bugs in the end! While not fully complete, we managed to complete the project with more than just the minimum viable product, with gamification elements like levels and achievements. More importantly, we learned a lot from this experience.
      </p>
      <div className="flex gap-4">
        <LinkIcon
          href='https://snail-express.firebaseapp.com/'
          label='Link to Snail Express website'
        >
          <ExternalLinkIcon />
          Snail Express
        </LinkIcon>
        <LinkIcon
          href='https://github.com/gohyongjing/snail-express'
          label='Link to Github Repository'
        >
          <GithubIcon />
          Github Repo
        </LinkIcon>
      </div>
    </div>
  </Subsection>
}
