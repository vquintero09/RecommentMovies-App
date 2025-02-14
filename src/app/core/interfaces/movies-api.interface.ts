// export type Genres = "Accion" | "Aventura" | "Ciencia Ficción" | "Drama" | "Romance" | "biography" | "Fantasía" | "Anime" | "infantil";
export type Plataforms = "Netflix" | "Max" | "Amazon Prime Video" | "Disney+" | "Paramount+" | "Apple TV+" | "Crunchyroll";

export enum Genres  {
  Accion = 'Action',
  Aventura = 'Adventure',
  "Ciencia Ficcion" = 'Sci-Fi',
  Drama = 'Drama',
  Romance = 'Romance',
  Biografia = 'Biografia',
  Fantasia = 'Fantasy',
  Anime = 'Anime',
  Crimen = 'Crime',
  Terror = 'Terror',
  Infantil = 'Infantil',
  Suspenso = 'Suspenso'
}


export interface Imovies {
  id: string,
  title: string;
  year: number | null;
  director: string;
  duration: number | null;
  poster: string;
  rate: number;
  image?: string;
  genre: Genres[];
  description?:string;
  plataforms?: Plataforms[];
};

export type newMovieEntry = Omit<Imovies, "id">;

