import { MediaStatusEnum } from "..";
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
  imageUrl: string;
  likeCount: number;
  ratings: number;
  uploadDate: number;
}
export interface MovieIdOutput {
  ID: string;
}
