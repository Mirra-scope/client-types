import { MediaCountriesEnum, MediaGenriesEnum, MediaLanguagiesEnum, MediaStatusEnum } from "..";
export interface GetManagerMovieForTableOutput {
  movieList: GetManagerTableMovieListOutput[];
  totalRecords: number;
}
export interface GetManagerTableMovieListOutput {
  ID: string;
  status: MediaStatusEnum;
  title: string;
  plotSummary: string;
  releaseDate: number;
  thumbnailUrl: string;
  likeCount: number;
  avarageRating: number;
  uploadDate: number;
}
export interface MovieIdOutput {
  ID: string;
}

export interface GetMovieDataForUpdateFormOutput {
  title: string;
  plotSummary: string;
  releaseDate: number;
  genre: MediaGenriesEnum;
  status: MediaStatusEnum;
  originCountry: MediaCountriesEnum;
  originalLanguage: MediaLanguagiesEnum;
  thumbnailUrl: string;
  videoResourceId: string;
}
