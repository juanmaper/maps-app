export interface PlacesResponse {
  type:        string;
  query:       string[];
  features:    Feature[];
  attribution: string;
}

export interface Feature {
  id:            string;
  type:          string;
  place_type:    string[];
  relevance:     number;
  properties:    Properties;
  text_en:       string;
  place_name_en: string;
  text:          string;
  place_name:    string;
  center:        number[];
  geometry:      Geometry;
  context:       Context[];
  language_en?:  Language;
  language?:     Language;
  bbox?:         number[];
}

export interface Context {
  id:           string;
  text_en:      string;
  text:         string;
  wikidata?:    string;
  language_en?: Language;
  language?:    Language;
  short_code?:  string;
}

export enum Language {
  En = "en",
  Es = "es",
}

export interface Geometry {
  type:        string;
  coordinates: number[];
}

export interface Properties {
  accuracy?: string;
  wikidata?: string;
}
