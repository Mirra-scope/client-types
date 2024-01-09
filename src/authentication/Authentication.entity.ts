import { EntityBase } from "../common/EntityBase";
import { UserAccountStatusEnum } from "./Authentication.enum";

export interface User extends EntityBase {
  email: string;
  password: string;
  accountStatus: UserAccountStatusEnum;
  isManager: boolean;
  lastSignIn: number;
}
