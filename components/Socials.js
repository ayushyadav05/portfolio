import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://github.com/ayushyadav07'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/ayush-yadav-617866269/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    {/* <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiDribbbleLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiBehanceLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiPinterestLine />
    </Link> */}
  </div>
  );
};

export default Socials;
