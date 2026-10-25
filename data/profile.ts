import type { StaticImageData } from "next/image";
import xLogo from "@/public/icons8-x-50.png";

export type IconName = "arrow" | "code" | "grid" | "github" | "x" | "linkedin";
export type ProfileLink = {
  title: string;
  description: string;
  href: string;
  logo: string | StaticImageData;
};
export const profile = {
  name: "Nikhil Anand",
  role: "Full-stack developer & maker",
  image: "/profile.webp",
  bio: "I build web products, developer tools, and ideas that ship.",
};
export const featuredLinks = [
  {
    title: "Let’s build something great.",
    description: "Your idea. My code. A product that ships.",
    href: "https://www.devkitmarket.com/hire-me",
    logo: "/icons8-resume-64.png",
    label: "WORK WITH ME",
    action: "Hire me",
    variant: "primary",
  },
  {
    title: "DevKit Market",
    description: "Starter kits, templates & tools. Built for builders.",
    href: "https://www.devkitmarket.com/",
    logo: "/logo.png",
    label: "MY LITTLE VENTURE",
    action: "Explore the market",
    variant: "market",
  },
] as const satisfies readonly (ProfileLink & {
  label: string;
  action: string;
  variant: "primary" | "market";
})[];
export const socialLinks = [
  {
    title: "GitHub",
    description: "Code, projects & open source",
    href: "https://github.com/niks-nikhil-anand",
    logo: "/icons8-github-100.png",
  },
  {
    title: "X / Twitter",
    description: "Thoughts, builds & things I’m learning",
    href: "https://x.com/niks_developer",
    logo: xLogo,
  },
  {
    title: "LinkedIn",
    description: "Experience & professional connections",
    href: "https://www.linkedin.com/in/nikhilanand86/",
    logo: "/icons8-linkedin-94.png",
  },
  {
    title: "Reddit",
    description: "Discussions, communities & ideas",
    href: "https://www.reddit.com/user/Defiant_Company_6015/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
    logo: "/icons8-reddit-100.png",
  },
  {
    title: "My portfolio",
    description: "My work, experience & the story behind it",
    href: "https://www.devkitmarket.com/about-me",
    logo: "/icons8-portfolio-100.png",
  },
] as const satisfies readonly ProfileLink[];
