import { EntityBase } from "..";

export interface VideoResource extends EntityBase {
  s3ObjectKey: string;

  s3ObjectUrl: string;
}
