import { MediaCountriesEnum, MediaLanguagiesEnum, MediaGenriesEnum, MediaStatusEnum } from "./AddtionalInfo.enum";

export interface CreateAdditionalInfoInput {
  OriginCountry?: MediaCountriesEnum;
  OriginalLanguage?: MediaLanguagiesEnum;
  Genre?: MediaGenriesEnum;
  Status?: MediaStatusEnum;
}

export interface UpdateAdditionalInfoInput extends CreateAdditionalInfoInput {}

export interface GetAdditionalInfoByMediaIdParams {
  MediaId: string;
}
