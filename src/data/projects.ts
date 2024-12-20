import {
  fctubePhoto,
  japaneseCountersPhoto,
  noteAppPhoto,
  otakuInfoPhoto,
  pokemonGamePhoto,
  recipeSitePhoto,
  rhythmicityPhoto,
  socialMediaPhoto,
} from "../assets/images";
import { ProjectInfo } from "../types/data";

export const mainProjects: ProjectInfo[] = [
  {
    title: "Rhythmicity",
    description: {
      pt: "Rhythmicity é um app de música que permite aos usuários buscar e escutar faixas, acompanhar letras em tempo real e personalizar a fila de reprodução. O projeto envolve autenticação, armazenamento de dados, administração de microsserviços e integração de APIs e web scraping. Utiliza diversas tecnologias, como Golang, TypeScript, Protocol Buffers, Nginx, Docker, entre outras.",
      en: "Rhythmicity is a music app that allows users to search and listen to tracks, follow lyrics in real-time, and customize the playback queue. The project involves authentication, data storage, microservices management, and integration with APIs and web scraping. It leverages various technologies, such as Golang, TypeScript, Protocol Buffers, Nginx, Docker, among others.",
      ja: "Rhythmicityは、ユーザーが曲を検索して聴き、リアルタイムで歌詞を追いながら、再生キューをカスタマイズできる音楽アプリです。このプロジェクトは、認証、データストレージ、マイクロサービスの管理、APIおよびウェブスクレイピングの統合を含んでいます。Golang、TypeScript、Protocol Buffers、Nginx、Dockerなど、さまざまな技術が使用されています。"
    },
    githubLink: "https://github.com/nichol20/rhythmicity",
    image: rhythmicityPhoto
  },
  {
    title: "FCTUBE",
    description: {
      pt: "O projeto consiste em um MVP de uma plataforma de streaming de vídeos semelhante ao YouTube, desenvolvido com tecnologias  Django, NGINX, Docker, Golang, RabbitMQ, Next.js, entre outras. A aplicação incorpora diversos recursos avançados, incluindo upload de arquivos em chunks, conversão de vídeos de MP4 para MPEG-DASH, simulação de um serviço de armazenamento, sistema de mensageria e muito mais.",
      en: "The project consists of an MVP for a video streaming platform similar to YouTube, developed using technologies such as Django, NGINX, Docker, Golang, RabbitMQ, Next.js, among others. The application incorporates various advanced features, including chunked file uploads, video conversion from MP4 to MPEG-DASH, a simulated storage service, a messaging system, and much more.",
      ja: "プロジェクトは、YouTubeに似た動画ストリーミングプラットフォームのMVP（Minimum Viable Product）で構成されており、Django、NGINX、Docker、Golang、RabbitMQ、Next.jsなどの技術を使用して開発されています。アプリケーションには、チャンクアップロード、MP4からMPEG-DASHへの動画変換、模擬ストレージサービス、メッセージングシステムなど、さまざまな高度な機能が組み込まれています。"
    },
    githubLink: "https://github.com/nichol20/fctube",
    image: fctubePhoto
  },
  {
    title: "Japanese counters",
    description: {
      pt: "Projeto inspirado no jogo counter punch da plataforma de ensino Renshuu. O objetivo é aprender os contadores japoneses de um modo divertido. Site programado utilizando NextJS, Typescript e Sass e implementado na vercel.",
      en: "Project inspired by the game Counter Punch from the Renshuu learning platform. The goal is to learn Japanese counters in a fun way. The website was programmed using Next.js, Typescript, and Sass, and deployed on Vercel.",
      ja: "Renshuu学習プラットフォームのゲーム「Counter Punch」に着想を得たプロジェクトです。楽しく日本語の助数詞を学ぶことを目標としています。このウェブサイトは、Next.js、TypeScript、およびSassを使用してプログラムされ、Vercelにデプロイされました。",
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
      ja: "アニメやマンガに関する情報を表示するウェブサイトです。このアプリケーションは、Next.js、TypeScript、Sassを使用して書かれており、パブリックのKitsu APIを利用しています。",
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
      ja: "他の人の投稿に対して興味を共有し、相互作用を行うためのソーシャルネットワークです。このウェブサイトは、Docker、Next.js、TypeScript、JSON Web Token、MongoDBなどの最新技術を使用して構築されており、Cypress、Jest、React Testing Libraryなどの人気ツールでテストされています。",
    },
    githubLink: "https://github.com/nichol20/social-media",
    image: socialMediaPhoto,
  },
  {
    title: "Pokemon game",
    description: {
      pt: "Um clone básico do famoso jogo Pokémon com sistemas de batalhas e captura dos monstros. Aplicação escrita apenas com HTML, CSS e Javascript, e consome a API pública pokeapi.co.",
      en: "A basic clone of the famous Pokémon game with battle and monster capture systems. The application is written using only HTML, CSS, and JavaScript, and it consumes the public API pokeapi.co.",
      ja: "有名なポケモンゲームの基本的なクローンで、戦闘とモンスター捕獲システムを備えています。このアプリケーションはHTML、CSS、JavaScriptのみを使用して書かれており、公開API pokeapi.co を利用しています。",
    },
    githubLink: "https://github.com/nichol20/pokemon-game",
    image: pokemonGamePhoto,
  },
  {
    title: "Notes app",
    description: {
      pt: "Um app para armazenar notas ou criar tarefas. Aplicação utiliza Next.js, o pré-processador css Sass, PostgreSQL para guardar as informações, Docker e escrito com Typescript.",
      en: "An app for storing notes or creating tasks. The application uses Next.js, the Sass CSS preprocessor, PostgreSQL for data storage, Docker, and is written in TypeScript.",
      ja: "ノートの保存やタスクの作成を行うためのアプリです。このアプリケーションは、Next.js、Sass CSSプリプロセッサ、データの保存にPostgreSQL、Dockerを使用し、TypeScriptで記述されています。",
    },
    githubLink: "https://github.com/nichol20/notes_app",
    image: noteAppPhoto,
  },
  {
    title: "Recipe site",
    description: {
      pt: "Um site para aprender receitas, ou criar uma conta usando Google ou Github e postar as suas próprias e avaliar de outras pessoas. Construído com React no front-end , express para as requisições no back-end e utilizando prisma ORM para armazenar as informações em um banco de dados SQLite.",
      en: "A website for learning recipes, or creating an account using Google or Github to post your own recipes and evaluate others'. Built with React on the front-end, Express for handling requests on the back-end, and using Prisma ORM to store information in a SQLite database.",
      ja: "レシピを学ぶためのウェブサイトで、GoogleやGithubを使用してアカウントを作成し、自分のレシピを投稿したり他の人のレシピを評価したりすることができます。フロントエンドにはReactを使用し、バックエンドのリクエストを処理するためにExpressを使用し、情報をSQLiteデータベースに保存するためにPrisma ORMを使用して構築されています。",
    },
    githubLink: "https://github.com/nichol20/recipe-site",
    image: recipeSitePhoto,
  },
];

export default {
  mainProjects,
};
