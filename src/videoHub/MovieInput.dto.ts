import { CreateAdditionalInfoInput } from "./AdditionalInfoInput.dto";
import { CreateFinancialInfoInput } from "./FinancialInfoInput.dto";

export interface CreateMovieInput {
  Title: string;

  // have default value

  PlotSummary: string;

  ReleaseDate: number;

  VideoId: string;

  SignedUrlKeyId: string;

  ImageId: string;

  AdditionalInfo: CreateAdditionalInfoInput;
}
