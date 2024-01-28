import {
  japaneseCountersPhoto,
  noteAppPhoto,
  otakuInfoPhoto,
  pokemonGamePhoto,
  recipeSitePhoto,
  socialMediaPhoto,
} from "../assets/images";
import { ProjectInfo } from "../types/data";

export const mainProjects: ProjectInfo[] = [
  {
    title: "Japanese counters",
    description: {
      pt: "Projeto inspirado no jogo counter punch da plataforma de ensino Renshuu. O objetivo é aprender os contadores japoneses de um modo divertido. Site programado utilizando NextJS, Typescript e Sass e implementado na vercel.",
      en: "Project inspired by the game Counter Punch from the Renshuu learning platform. The goal is to learn Japanese counters in a fun way. The website was programmed using Next.js, Typescript, and Sass, and deployed on Vercel.",
      ja: "",
    },
    githubLink: "https://github.com/nichol20/japanese-counters",
    websiteLink: "https://japanese-counters.vercel.app/",
    image: japaneseCountersPhoto,
  },
  {
    title: "Otaku info",
    description: {
      pt: "Um website que mostra informações de animes ou mangás. Aplicação escrita utilizando NextJS, Typescript e Sass, e consome a api pública kitsu.",
      en: "A website that displays information about anime or manga. The application is written using Next.js, Typescript, and Sass, and it consumes the public Kitsu API.",
      ja: "",
    },
    githubLink: "https://github.com/nichol20/otaku-info",
    websiteLink: "https://otaku-info.vercel.app/",
    image: otakuInfoPhoto,
  },
  {
    title: "Social media",
    description: {
      pt: "Uma rede social para compartilhar seus interesses e interagir com postagens de outras pessoas. Um site utilizando tecnologias modernas como Docker, Nextjs, Typescript, Json web token, MongoDB e testada com ferramentas populares, tais como Cypress, Jest e React testing library.",
      en: "A social network for sharing your interests and interacting with other people's posts. A website built using modern technologies like Docker, Next.js, Typescript, JSON Web Token, MongoDB, and tested with popular tools such as Cypress, Jest, and React Testing Library.",
      ja: "",
    },
    githubLink: "https://github.com/nichol20/social-media",
    image: socialMediaPhoto,
  },
  {
    title: "Recipe site",
    description: {
      pt: "Um site para aprender receitas, ou criar uma conta usando Google ou Github e postar as suas próprias e avaliar de outras pessoas. Construído com React no front-end , express para as requisições no back-end e utilizando prisma ORM para armazenar as informações em um banco de dados SQLite.",
      en: "A website for learning recipes, or creating an account using Google or Github to post your own recipes and evaluate others'. Built with React on the front-end, Express for handling requests on the back-end, and using Prisma ORM to store information in a SQLite database.",
      ja: "",
    },
    githubLink: "https://github.com/nichol20/recipe-site",
    image: recipeSitePhoto,
  },
  {
    title: "Pokemon game",
    description: {
      pt: "Um clone básico do famoso jogo Pokémon com sistemas de batalhas e captura dos monstros. Aplicação escrita apenas com HTML, CSS e Javascript, e consome a API pública pokeapi.co.",
      en: "A basic clone of the famous Pokémon game with battle and monster capture systems. The application is written using only HTML, CSS, and JavaScript, and it consumes the public API pokeapi.co.",
      ja: "",
    },
    githubLink: "https://github.com/nichol20/pokemon-game",
    image: pokemonGamePhoto,
  },
  {
    title: "Notes app",
    description: {
      pt: "Um app para armazenar notas ou criar tarefas. Aplicação utiliza Next.js, o pré-processador css Sass, PostgreSQL para guardar as informações, Docker e escrito com Typescript.",
      en: "An app for storing notes or creating tasks. The application uses Next.js, the Sass CSS preprocessor, PostgreSQL for data storage, Docker, and is written in TypeScript.",
      ja: "",
    },
    githubLink: "https://github.com/nichol20/notes_app",
    image: noteAppPhoto,
  },
];

export default {
  mainProjects,
};
