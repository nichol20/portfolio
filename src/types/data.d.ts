export interface SkillCategoryObject {
  [skill: string]: {
    icon: string
    name: string
    percentage: number
  }
}

export interface ProjectInfo {
  title: string
  description: string
  github_link: string
  image: string
}

export interface Repository {
  name: string
  created_at: string
  updated_at: string
  language: string
  html_url: string
  [field: string]: any
}