import { MediaCountriesEnum, MediaLanguagiesEnum, MediaGenriesEnum, MediaStatusEnum, Series, AdditionalInfo } from "..";

export interface GetManagerSeriesForTableOutput {
  seriesList: GetManagerTableOutputSeriesList[];

  totalRecords: number;
}

export interface GetManagerTableOutputSeriesList {
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

export interface GetManagerSeriesWithImageOutput extends Series {
  imageUrl: string;
}

export interface GetSeriesByIdWithAdditionalInfoOutput extends Series {
  additionalInfo: AdditionalInfo;
}
