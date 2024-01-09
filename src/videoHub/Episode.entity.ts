import { EntityBase } from "..";

export interface Episode extends EntityBase {
  
  title: string;

  // have default value
  
  plotSummary: string;

  
  releaseDate: number;

  
  number: number;
}
