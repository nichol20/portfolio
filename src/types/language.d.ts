export type LanguageCode = "pt" | "en" | "ja";

export interface Language {
  code: LanguageCode;
  name: {
    [code in LanguageCode]: string;
  };
}

export type Languages = Language[];
