import { LanguageCode } from "./language";

export interface SkillCategoryObject {
  [skill: string]: {
    icon: string;
    name: string;
  };
}

export interface ProjectInfo {
  title: string;
  description: {
    [code in LanguageCode]: string;
  };
  githubLink: string;
  websiteLink?: string;
  image: string;
}

export interface Repository {
  name: string;
  createdAt: string;
  updatedAt: string;
  language: string;
  html_url: string;
  [field: string]: any;
}
