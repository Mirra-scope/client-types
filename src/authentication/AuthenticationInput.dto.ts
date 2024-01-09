export interface UserRegisterInput {
  Email: string;
  Password: string;
}

export interface UserSignInInput {
  Email: string;
  Password: string;
}

export interface PromoteUserToManagerInput {
  UserId: string;
}

export interface DecodeJwtTokenInput {
  Token: string;
}

export interface CheckUserExistByEmailInput {
  Email: string;
}
