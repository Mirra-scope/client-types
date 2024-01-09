import { EntityBase } from "..";
import { GenderEnum } from "./Profile.enum";

export interface ProfileInfo extends EntityBase {
  firstName: string;
  lastName: string;
  contactNumber: string;
  dateOfBirth: number;
  gender: GenderEnum;
  address: string;
  userId: string;
}
