import { csharpIcon, cssIcon, cypressIcon, dockerIcon, expressjsIcon, gitIcon, htmlIcon, javaIcon, javascriptIcon, jestIcon, jwtIcon, linuxIcon, mongodbIcon, nextjsIcon, nodejsIcon, postgresqlIcon, pythonIcon, rabbitmqIcon, reactIcon, redisIcon, reduxIcon, sassIcon, socketioIcon, testingLibraryIcon, typescriptIcon } from "../assets";
import { SkillCategoryObject } from "../types/data";

export const frontend: SkillCategoryObject = {
  html: {
    icon: htmlIcon,
    name: 'HTML',
    percentage: 85
  },
  css: {
    icon: cssIcon,
    name: 'CSS',
    percentage: 85
  },
  javascript: {
    icon: javascriptIcon,
    name: 'Javascript',
    percentage: 85
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
    percentage: 60
  },
  sass: {
    icon: sassIcon,
    name: 'SASS',
    percentage: 40
  },
  redux: {
    icon: reduxIcon,
    name: 'Redux',
    percentage: 40
  }
}

export const backend: SkillCategoryObject = {
  nodejs: {
    icon: nodejsIcon,
    name: 'NodeJS',
    percentage: 80
  },
  expressjs: {
    icon: expressjsIcon,
    name: 'ExpressJS',
    percentage: 70
  },
  docker: {
    icon: dockerIcon,
    name: 'Docker',
    percentage: 65
  },
  rabbitmq: {
    icon: rabbitmqIcon,
    name: 'RabbitMQ',
    percentage: 50
  },
  redis: {
    icon: redisIcon,
    name: 'Redis',
    percentage: 50
  },
  mongo: {
    icon: mongodbIcon,
    name: 'MongoDB',
    percentage: 80
  },
  postgres: {
    icon: postgresqlIcon,
    name: 'PostgreSQL',
    percentage: 50
  },
  
}

export const general: SkillCategoryObject = {
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
    percentage: 60
  },
  jwt: {
    icon: jwtIcon,
    name: 'Json web token',
    percentage: 50
  },
  linuxCommands: {
    icon: linuxIcon,
    name: 'Linux commands',
    percentage: 50
  },
  jest: {
    icon: jestIcon,
    name: 'Jest',
    percentage: 50
  },
  cypress: {
    icon: cypressIcon,
    name: 'Cypress',
    percentage: 50
  },
  csharp: {
    icon: csharpIcon,
    name: 'C#',
    percentage: 35
  },
  java: {
    icon: javaIcon,
    name: 'Java',
    percentage: 25
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