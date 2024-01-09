export interface CreateEpisodeInput {
  Number: number;

  SeasonId: string;

  VideoId: string;

  SignedUrlKeyId: string;

  ImageId: string;

  Title: string;

  PlotSummary: string;

  ReleaseDate: number;
}

export interface ChangeEpisodeSeasonInput {
  SeasonId: string;

  EpisodeId: string;
}

export interface GetNextEpisodeNumberParams {
  SeasonId: string;
}
