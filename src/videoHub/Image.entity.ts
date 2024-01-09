import { EntityBase } from "..";
import { ImageVariantEnum } from "./Image.enum";

export interface Image extends EntityBase {
  variant: ImageVariantEnum;

  url: string;
}
