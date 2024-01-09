import { EntityBase } from "..";

export interface Season extends EntityBase {
  
  title: string;

  // have default value
  
  plotSummary: string;

  
  releaseDate: number;

  
  number: number;
}
