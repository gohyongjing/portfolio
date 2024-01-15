'use client';

import GithubIcon from "./github";
import LinkIcon from "./link-icon";
import LinkedInIcon from "./linked-in";

export default function SocialMediaIcons() {
  return (
    <div className="flex my-2 ml-16 mr-4 gap-4 animate-fade-in">
      <LinkIcon
        href='https://github.com/gohyongjing'
        label='Link to Github profile page'
      >
        <GithubIcon />
      </LinkIcon>
      <LinkIcon
        href='https://www.linkedin.com/in/gohyongjing/'
        label='Link to LinkedIn profile page'
      >
        <LinkedInIcon />
      </LinkIcon>
    </div>
  );
}
