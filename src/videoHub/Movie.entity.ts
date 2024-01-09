import { EntityBase } from "..";

export interface Movie extends EntityBase {
  title: string;

  plotSummary: string;

  releaseDate: number;

  priceInDollar: number;

  isFree: boolean;

  userId: string;
}
