import { abcIcon, csharpIcon, cssIcon, cypressIcon, dockerIcon, expressjsIcon, gitIcon, golangIcon, htmlIcon, javaIcon, javascriptIcon, jestIcon, jwtIcon, kubernetesIcon, linuxIcon, mongodbIcon, nextjsIcon, nginxIcon, nodejsIcon, postgresqlIcon, pythonIcon, rabbitmqIcon, reactIcon, redisIcon, reduxIcon, sassIcon, socketioIcon, testingLibraryIcon, typescriptIcon } from "../assets/images";
import { SkillCategoryObject } from "../types/data";

export const frontend: SkillCategoryObject = {
  html: {
    icon: htmlIcon,
    name: 'HTML',
    percentage: 90
  },
  css: {
    icon: cssIcon,
    name: 'CSS',
    percentage: 90
  },
  javascript: {
    icon: javascriptIcon,
    name: 'Javascript',
    percentage: 90
  },
  react: {
    icon: reactIcon,
    name: 'React',
    percentage: 80
  },
  nextjs: {
    icon: nextjsIcon,
    name: 'NextJS',
    percentage: 75
  },
  sass: {
    icon: sassIcon,
    name: 'SASS',
    percentage: 60
  },
  testingLibrary: {
    icon: testingLibraryIcon,
    name: 'Testing library',
    percentage: 50
  },
  cypress: {
    icon: cypressIcon,
    name: 'Cypress',
    percentage: 40
  },
  redux: {
    icon: reduxIcon,
    name: 'Redux',
    percentage: 35
  }
}

export const backend: SkillCategoryObject = {
  nodejs: {
    icon: nodejsIcon,
    name: 'NodeJS',
    percentage: 80
  },
  mongo: {
    icon: mongodbIcon,
    name: 'MongoDB',
    percentage: 80
  },
  expressjs: {
    icon: expressjsIcon,
    name: 'ExpressJS',
    percentage: 65
  },
  docker: {
    icon: dockerIcon,
    name: 'Docker',
    percentage: 65
  },
  rabbitmq: {
    icon: rabbitmqIcon,
    name: 'RabbitMQ',
    percentage: 40
  },
  redis: {
    icon: redisIcon,
    name: 'Redis',
    percentage: 40
  },
  postgres: {
    icon: postgresqlIcon,
    name: 'PostgreSQL',
    percentage: 40
  },
  kubernetes: {
    icon: kubernetesIcon,
    name: 'Kubernetes',
    percentage: 20
  },
  nginx: {
    icon: nginxIcon,
    name: 'Nginx',
    percentage: 20
  }
}

export const general: SkillCategoryObject = {
  english: {
    icon: abcIcon,
    name: 'English',
    percentage: 80
  },
  typescript: {
    icon: typescriptIcon,
    name: 'Typescript',
    percentage: 80
  },
  git: {
    icon: gitIcon,
    name: 'GIT',
    percentage: 75
  },
  go: {
    icon: golangIcon,
    name: "Golang",
    percentage: 50
  },
  python: {
    icon: pythonIcon,
    name: 'Python',
    percentage: 50
  },
  socketio: {
    icon: socketioIcon,
    name: 'Socket.io',
    percentage: 45
  },
  jwt: {
    icon: jwtIcon,
    name: 'Json web token',
    percentage: 45
  },
  linuxCommands: {
    icon: linuxIcon,
    name: 'Linux commands',
    percentage: 45
  },
  jest: {
    icon: jestIcon,
    name: 'Jest',
    percentage: 40
  },
  japanese: {
    icon: abcIcon,
    name: '日本語',
    percentage: 30
  },
  csharp: {
    icon: csharpIcon,
    name: 'C#',
    percentage: 20
  },
  java: {
    icon: javaIcon,
    name: 'Java',
    percentage: 20
  },

}

export default {
  frontend,
  backend,
  general
}