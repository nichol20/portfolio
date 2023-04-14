import { japaneseCountersPhoto, noteAppPhoto, otakuInfoPhoto, pokemonGamePhoto, recipeSitePhoto, socialMediaPhoto } from "../assets/images";
import { ProjectInfo } from "../types/data";

export const mainProjects: ProjectInfo[] = [
  {
    title: 'Japanese counters',
    description: 'Projeto inspirado no jogo counter punch da plataforma de ensino Renshuu. O objetivo é aprender os contadores japoneses de um modo divertido. Site programado utilizando NextJS, Typescript e Sass e implementado na vercel.',
    github_link: 'https://github.com/nichol20/japanese-counters',
    website_link: 'https://japanese-counters.vercel.app/',
    image: japaneseCountersPhoto
  },
  {
    title: 'Otaku info',
    description: 'Um website que mostra informações de animes ou mangás. Aplicação escrita utilizando NextJS, Typescript e Sass, e consome a api pública kitsu.',
    github_link: 'https://github.com/nichol20/otaku-info',
    website_link: 'https://otaku-info.vercel.app/',
    image: otakuInfoPhoto
  },
  {
    title: 'Social media',
    description: `Uma rede social para compartilhar seus interesses e interagir com postagens de outras pessoas. Um site utilizando tecnologias modernas como Docker, Nextjs, Typescript, Json web token, MongoDB e testada com ferramentas populares, tais como Cypress, Jest e React testing library.`,
    github_link: 'https://github.com/nichol20/social-media',
    image: socialMediaPhoto,
  },
  {
    title: 'Recipe site',
    description: `Um site para aprender receitas, ou criar uma conta usando Google ou Github e postar as suas próprias e avaliar de outras pessoas. Construído com React no front-end , express para as requisições no back-end e utilizando prisma ORM para armazenar as informações em um banco de dados SQLite.`,
    github_link: 'https://github.com/nichol20/recipe-site',
    image: recipeSitePhoto
  },
  {
    title: 'Pokemon game',
    description: `Um clone básico do famoso jogo Pokémon com sistemas de batalhas e captura dos monstros. Aplicação escrita apenas com HTML, CSS e Javascript, e consome a API pública pokeapi.co.`,
    github_link: 'https://github.com/nichol20/pokemon-game',
    image: pokemonGamePhoto
  },
  {
    title: 'Notes app',
    description: `Um app para armazenar notas ou criar tarefas. Aplicação utiliza Next.js, o pré-processador css Sass, PostgreSQL para guardar as informações, Docker e escrito com Typescript.`,
    github_link: 'https://github.com/nichol20/notes_app',
    image: noteAppPhoto
  }
]

export default {
  mainProjects
}