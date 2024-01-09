import { EntityBase, MediaCountriesEnum, MediaLanguagiesEnum } from "..";
import { MediaGenriesEnum, MediaStatusEnum } from "./AddtionalInfo.enum";

export interface AdditionalInfo extends EntityBase {
  originCountry: MediaCountriesEnum;

  originalLanguage: MediaLanguagiesEnum;

  genre: MediaGenriesEnum;

  status: MediaStatusEnum;
}
