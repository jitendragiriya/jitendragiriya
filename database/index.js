import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

//projects
import { SiDjango } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export const social = [
  {
    name: "linkedin",
    Icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/jitendragiriya/",
  },
  {
    name: "leetcode",
    Icon: SiLeetcode,
    link: "https://leetcode.com/bjitendragiriya02/",
    special: "150+ problems",
  },
  {
    name: "github",
    Icon: AiFillGithub,
    link: "https://github.com/jitendragiriya",
    special: "5+ projects",
  },
  {
    name: "geeksforgeeks",
    Icon: SiGeeksforgeeks,
    link: "https://auth.geeksforgeeks.org/user/bjitendragiriya02/profile",
    special: "100+ problems",
  },
  {
    name: "codestudio",
    Icon: FiCodesandbox,
    link: "https://www.codingninjas.com/codestudio/profile/8194b133-d469-4c44-a9d0-87bdb816c81a",
    special: "100+ problems",
  },
];

export const projects = [
  {
    name: "every one portfolio",
    tech: "nextjs",
    Icon: FaReact,
    link: "https://portfolioji.herokuapp.com/",
    description:
      "This is fully dynamic django project. in this project we can sell our products.",
  },
  {
    name: "kidswear shop",
    tech: "django",
    Icon: SiDjango,
    link: "https://kidswear.herokuapp.com/",
    description:
      "This is fully dynamic django project. in this project we can sell our products.",
  },
  {
    name: "live chat",
    tech: "mern",
    Icon: TbBrandNextjs,
    link: "https://onetimehelp.herokuapp.com/",
    description:
      "This is fully dynamic django project. in this project we can sell our products.",
  },
  {
    name: "food app",
    tech: "mern",
    Icon: FaReact,
    link: "https://mernecommerceweb.herokuapp.com/",
    description:
      "This is fully dynamic django project. in this project we can sell our products.",
  },
];
