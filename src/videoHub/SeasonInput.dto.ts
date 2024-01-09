export interface CreateSeasonInput {
  Number: number;

  SeriesId: string;

  ImageId: string;

  Title: string;

  // have default value

  PlotSummary: string;

  ReleaseDate: number;
}

export interface ChangeSeasonSeriesInput {
  SeasonId: string;

  SeriesId: string;
}

export interface GetSeasonBySeriesIdParams {
  SeriesId: string;
}

export interface GetNextSeasonNumberParams {
  SeriesId: string;
}
