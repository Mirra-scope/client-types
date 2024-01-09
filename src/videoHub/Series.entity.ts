import { EntityBase } from "..";

export interface Series extends EntityBase {
  
  title: string;

  // have default value
  
  plotSummary: string;

  
  releaseDate: number;

  // have default value
  
  priceInDollar: number;

  // have default value
  isFree: boolean;

  
  userId: string;
}
