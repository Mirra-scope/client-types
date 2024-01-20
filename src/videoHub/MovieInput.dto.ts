import { CreateAdditionalInfoInput, UpdateAdditionalInfoInput } from "./AdditionalInfoInput.dto";
import { UpdateImageInput } from ".";

export interface CreateMovieInput {
  Title: string;
  PlotSummary: string;
  ReleaseDate: number;
  VideoId: string;
  SignedUrlKeyId: string;
  ImageId: string;
  AdditionalInfo: CreateAdditionalInfoInput;
}

export interface ChangeMovieInput {
  VideoId: string;
  SignedUrlKeyId: string;
}

export interface GetManagerMovieForTableInput {
  Page: number;
  PageSize: number;
}

export interface DeleteMovieByIdParams {
  MovieId: string;
}

export interface DeleteMultipleMovieByIdzParams {
  MovieIdz: string[];
}

export interface MovieIdParams {
  MovieId: string;
}

export interface UpdateMovieInput {
  Title?: string;
  PlotSummary?: string;
  ReleaseDate?: number;
  AdditionalInfo?: UpdateAdditionalInfoInput;
  Image?: UpdateImageInput;
}
