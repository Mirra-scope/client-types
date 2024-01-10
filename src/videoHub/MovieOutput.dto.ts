import { MediaCountriesEnum, MediaLanguagiesEnum, MediaGenriesEnum, MediaStatusEnum } from "..";
export interface GetManagerMovieForTableOutput {
  movieList: GetManagerTableMovieListOutput[];
  totalRecords: number;
}
export interface GetManagerTableMovieListOutput {
  ID: string;
  originCountry: MediaCountriesEnum;
  originalLanguage: MediaLanguagiesEnum;
  genre: MediaGenriesEnum;
  status: MediaStatusEnum;
  title: string;
  plotSummary: string;
  releaseDate: number;
  imageUrl: string;
  uploadDate: number;
}
export interface MovieIdOutput {
  ID: string;
}
