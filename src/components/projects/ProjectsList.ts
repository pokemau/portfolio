import yahalloImg from "../../images/chatapp.webp";
import flashcardoImg from "../../images/flaschardo1.webp";
import lolChampaImg from "../../images/lolchamps.webp";
import sergdleImg from "../../images/sergdle.webp";
import ghLogo from "../../images/githubLogo.png";
import redirectIcon from "../../images/go-to-icon.png";

import { StaticImageData } from "next/image";

export type ProjectType = {
  id: string;
  name: string;
  desc: string;
  site: string;
  techUsed: string[];
  links: { site: string; icon: StaticImageData }[];
  img: StaticImageData;
};

export const ProjectsList: ProjectType[] = [
  {
    id: "yahallo-chat-app",
    name: "Yahallo",
    desc: "A real-time chat app with user authentication throught Firebase's Google Authentication.",
    site: "https://yahallo.vercel.app/",
    techUsed: ["NEXTJS", "FIREBASE", "TAILWIND"],
    links: [
      {
        site: "https://github.com/pokemau/Chat-App",
        icon: ghLogo,
      },
      {
        site: "https://yahallo.vercel.app/",
        icon: redirectIcon,
      },
    ],
    img: yahalloImg,
  },

  {
    id: "flashcardo",
    name: "Flashcardo",
    site: "https://flashcardo.vercel.app/",
    desc: "A website for making flashcards to help the user study for an upcoming quiz or exam. It uses the browser's local storage to store the flashcard sets which can be deleted by the user.",
    techUsed: ["NEXTJS", "TAILWIND", "HTML"],
    links: [
      {
        site: "https://github.com/pokemau/Flashcardo-2",
        icon: ghLogo,
      },
      {
        site: "https://flashcardo.vercel.app/",
        icon: redirectIcon,
      },
    ],
    img: flashcardoImg,
  },

  {
    id: "lol-champs",
    name: "LOL Champa",
    site: "https://lolchamps-dusky.vercel.app/",
    techUsed: ["REACTJS", "HTML", "CSS"],
    desc: "A web app made with ReactJS which shows the basic information of a champion in the famous MOBA game League of Legends. The champion data is fetched from Riot Games's Data Dragon API.",
    links: [
      {
        site: "https://github.com/pokemau/React-LOL-Champs",
        icon: ghLogo,
      },
      {
        site: "https://lolchamps-dusky.vercel.app/",
        icon: redirectIcon,
      },
    ],
    img: lolChampaImg,
  },

  {
    id: "sergdle",
    name: "Sergdle",
    site: "https://sergdle.vercel.app/",
    techUsed: ["TYPESCRIPT", "TAILWIND"],
    desc: "Sergdle is a Wordle clone, where the player has to guess the hidden word within 6 guesses to win the game.",
    links: [
      {
        site: "https://github.com/pokemau/sergdle",
        icon: ghLogo,
      },
      {
        site: "https://sergdle.vercel.app/",
        icon: redirectIcon,
      },
    ],
    img: sergdleImg,
  },
  // {
  //   id: "lawfirm-site",
  //   name: "Law Firm Website",
  //   site: "https://lepitenbojos.org/",
  //   techUsed: ["WORDPRESS"],
  //   desc: "This is a mobile responsive website for a law firm located in Cebu City. I made this website with WordPress when I was an intern for them.",
  //   links: [{ site: "https://lepitenbojos.org/", icon: FiExternalLink }],
  // },
  // {
  //   id: "insta-clone",
  //   name: "Instagram Clone",
  //   site: "/",
  //   techUsed: ["HTML", "CSS"],
  //   desc: "A simple site made with plain CSS and HTML to apply my skills on following a given template or design for a website.",
  //   links: [
  //     {
  //       site: "https://github.com/pokemau/Instagram-Clone",
  //       icon: AiFillGithub,
  //     },
  //     {
  //       site: "https://pokemau.github.io/instagram-clone/",
  //       icon: FiExternalLink,
  //     },
  //   ],
  // },
];
