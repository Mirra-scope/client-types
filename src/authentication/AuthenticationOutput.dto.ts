export interface AuthTokenOutput {
  token: string;
}

export interface DecodeJwtTokenOutput {
  email: string;
  ID: string;
}

export interface CheckUserExistByEmailOutput {
  isExist: boolean;
}
