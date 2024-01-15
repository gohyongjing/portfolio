import SocialMediaIcons from "./icon/social-media-icons";

export default function Footer() {
  return (
    <div className="mx-8 sm:mx-16 md:mx-36 flex justify-between items-center dark:text-neutral-300">
      <div className="mt-4 my-6">
        Designed and developed by <br/> Yong Jing
      </div>
      <SocialMediaIcons />
    </div>
  );
}
