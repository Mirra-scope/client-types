import { MediaCountriesEnum, MediaLanguagiesEnum, MediaGenriesEnum, MediaStatusEnum } from "..";

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

  createdAt: number;

  updatedAt: number;
}
