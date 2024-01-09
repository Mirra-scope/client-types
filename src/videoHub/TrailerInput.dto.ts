import { TrailerMediaEnum } from "./Trailer.enum";

export interface CreateTrailerInput {
  VideoId: string;
  SignedUrlKeyId: string;
  ImageId: string;
  Title: string;
  PlotSummary: string;
  ReleaseDate: number;
  MediaType: TrailerMediaEnum;
  MediaId: string;
}

export interface ChangeTrailerMediaInput {
  TrailerId: string;
  MediaType: TrailerMediaEnum;
  MediaId: string;
}
