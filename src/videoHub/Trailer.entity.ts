import { EntityBase } from "../common/EntityBase";


export interface Trailer extends EntityBase {
  
  title: string;

  
  plotSummary: string;

  
  releaseDate: number;

  
  userId: number;

  
  contextId: number;
}
