import { abcIcon, csharpIcon, cssIcon, cypressIcon, dockerIcon, expressjsIcon, gitIcon, htmlIcon, javaIcon, javascriptIcon, jestIcon, jwtIcon, linuxIcon, mongodbIcon, nextjsIcon, nginxIcon, nodejsIcon, postgresqlIcon, pythonIcon, rabbitmqIcon, reactIcon, redisIcon, reduxIcon, sassIcon, socketioIcon, testingLibraryIcon, typescriptIcon } from "../assets/images";
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
  sass: {
    icon: sassIcon,
    name: 'SASS',
    percentage: 45
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
  nginx: {
    icon: nginxIcon,
    name: 'Nginx',
    percentage: 20
  }
}

export const general: SkillCategoryObject = {
  abc: {
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
  csharp: {
    icon: csharpIcon,
    name: 'C#',
    percentage: 30
  },
  java: {
    icon: javaIcon,
    name: 'Java',
    percentage: 20
  },
  python: {
    icon: pythonIcon,
    name: 'Python',
    percentage: 20
  }
}

export default {
  frontend,
  backend,
  general
}