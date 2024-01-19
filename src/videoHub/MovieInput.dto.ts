import { CreateAdditionalInfoInput, UpdateAdditionalInfoInput } from "./AdditionalInfoInput.dto";
import { CreateFinancialInfoInput, UpdateFinancialInfoInput, UpdateImageInput } from ".";

export class CreateMovieInput {
  Title!: string;
  PlotSummary!: string;
  ReleaseDate!: number;
  VideoId!: string;
  SignedUrlKeyId!: string;
  ImageId!: string;
  AdditionalInfo!: CreateAdditionalInfoInput;
  FinancialInfo!: CreateFinancialInfoInput;
}

export class GetManagerMovieForTableInput {
  Page!: number;
  PageSize!: number;
}

export class DeleteMovieByIdParams {
  MovieId!: string;
}

export class DeleteMultipleMovieByIdzParams {
  MovieIdz!: string[];
}

export class MovieIdParams {
  MovieId!: string;
}

export class UpdateMovieInput {
  Title!: string;
  PlotSummary!: string;
  ReleaseDate!: number;
  AdditionalInfo!: UpdateAdditionalInfoInput;
  Image!: UpdateImageInput;
  FinancialInfo!: UpdateFinancialInfoInput;
}
