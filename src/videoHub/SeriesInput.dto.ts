import { CreateFinancialInfoInput, UpdateFinancialInfoInput } from ".";
import { CreateAdditionalInfoInput, UpdateAdditionalInfoInput } from "./AdditionalInfoInput.dto";
import { UpdateImageInput } from "./ImageInput.dto";

export interface CreateSeriesInput {
  ImageId: string;
  Title: string;
  PlotSummary: string;
  ReleaseDate: number;
  AdditionalInfo: CreateAdditionalInfoInput;
  FinancialInfo: CreateFinancialInfoInput;
}

export interface GetManagerSeriesForTableInput {
  Page: number;
  PageSize: number;
}

export interface DeleteSeriesByIdParams {
  SeriesId: string;
}

export interface DeleteMultipleSeriesByIdzParams {
  SeriesIdz: string[];
}

export interface UpdateSeriesInput {
  Title?: string;
  PlotSummary?: string;
  ReleaseDate?: number;
  AdditionalInfo?: UpdateAdditionalInfoInput;
  Image?: UpdateImageInput;
  FinancialInfo?: UpdateFinancialInfoInput;
}

export interface SeriesIdParams {
  SeriesId: string;
}
