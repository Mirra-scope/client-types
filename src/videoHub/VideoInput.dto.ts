
import { VideoMineType } from "./types";
import { MirraScopeMediaEnum } from "../common/enum";


export interface GetUploadVideoSignedUrlInput {
  Width: number;
  Height: number;
  RunTime: number;
  SizeInKb: number;
  Mime: VideoMineType;
  MediaType: MirraScopeMediaEnum;
}
