export interface GetNextSeasonNumberOutput {
  number: number;
}

export interface GetSeasonBySeriesIdOutput {
  ID: string;
  plotSummary: string;
  title: string;
  releaseDate: number;
  number: number;
  backdropImageUrl: string;
}
