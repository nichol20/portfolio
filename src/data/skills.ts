import {
  abcIcon,
  csharpIcon,
  cssIcon,
  cypressIcon,
  djangoIcon,
  dockerIcon,
  expressjsIcon,
  gitIcon,
  golangIcon,
  htmlIcon,
  javaIcon,
  javascriptIcon,
  jestIcon,
  jwtIcon,
  kafkaIcon,
  kubernetesIcon,
  linuxIcon,
  mongodbIcon,
  nestjsIcon,
  nextjsIcon,
  nginxIcon,
  nodejsIcon,
  postgresqlIcon,
  pythonIcon,
  rabbitmqIcon,
  reactIcon,
  redisIcon,
  reduxIcon,
  sassIcon,
  socketioIcon,
  testingLibraryIcon,
  typescriptIcon,
} from "../assets/images";
import { SkillCategoryObject } from "../types/data";

export const frontend: SkillCategoryObject = {
  html: {
    icon: htmlIcon,
    name: "HTML",
  },
  css: {
    icon: cssIcon,
    name: "CSS",
  },
  javascript: {
    icon: javascriptIcon,
    name: "Javascript",
  },
  react: {
    icon: reactIcon,
    name: "React",
  },
  nextjs: {
    icon: nextjsIcon,
    name: "NextJS",
  },
  sass: {
    icon: sassIcon,
    name: "SASS",
  },
  testingLibrary: {
    icon: testingLibraryIcon,
    name: "Testing library",
  },
  cypress: {
    icon: cypressIcon,
    name: "Cypress",
  },
  redux: {
    icon: reduxIcon,
    name: "Redux",
  },
};

export const backend: SkillCategoryObject = {
  nodejs: {
    icon: nodejsIcon,
    name: "NodeJS",
  },
  mongo: {
    icon: mongodbIcon,
    name: "MongoDB",
  },
  expressjs: {
    icon: expressjsIcon,
    name: "ExpressJS",
  },
  jwt: {
    icon: jwtIcon,
    name: "Json web token",
  },
  docker: {
    icon: dockerIcon,
    name: "Docker",
  },
  rabbitmq: {
    icon: rabbitmqIcon,
    name: "RabbitMQ",
  },
  redis: {
    icon: redisIcon,
    name: "Redis",
  },
  postgres: {
    icon: postgresqlIcon,
    name: "PostgreSQL",
  },
  kubernetes: {
    icon: kubernetesIcon,
    name: "Kubernetes",
  },
  nginx: {
    icon: nginxIcon,
    name: "Nginx",
  },
  nestjs: {
    icon: nestjsIcon,
    name: "NestJS",
  },
  django: {
    icon: djangoIcon,
    name: "Django",
  },
  kafka: {
    icon: kafkaIcon,
    name: "Apache Kafka",
  },
};

export const general: SkillCategoryObject = {
  english: {
    icon: abcIcon,
    name: "English",
  },
  typescript: {
    icon: typescriptIcon,
    name: "Typescript",
  },
  git: {
    icon: gitIcon,
    name: "GIT",
  },
  go: {
    icon: golangIcon,
    name: "Golang",
  },
  python: {
    icon: pythonIcon,
    name: "Python",
  },
  socketio: {
    icon: socketioIcon,
    name: "Socket.io",
  },
  linuxCommands: {
    icon: linuxIcon,
    name: "Linux commands",
  },
  jest: {
    icon: jestIcon,
    name: "Jest",
  },
  japanese: {
    icon: abcIcon,
    name: "日本語",
  },
  csharp: {
    icon: csharpIcon,
    name: "C#",
  },
  java: {
    icon: javaIcon,
    name: "Java",
  },
};

export default {
  frontend,
  backend,
  general,
};
