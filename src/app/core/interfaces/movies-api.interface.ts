export type Genres = "action" | "adventure" | "sci-Fi" | "drama" | "romance" | "biography" | "fantasy" | "anime";


export interface Imovies {
  id: string,
  title: string;
  year: number;
  director: string;
  duration: number;
  poster: string;
  rate: number;
  image?: string;
  genre: Genres[];
  description?:string;
  estreno?: string;
}