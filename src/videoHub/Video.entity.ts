import { EntityBase } from "..";
import { VideoQualityEnum } from "./Video.enum";


export interface Video extends EntityBase {
  
  userId: string;

  
  quality: VideoQualityEnum;

  
  width: number;

  
  height: number;

  // in mbs
  
  sizeInKb: number;

  // in mbs
  
  mime: string;

  // in milliseconds
  
  runTime: number;

  // in milliseconds
  isUsed: boolean;
}
