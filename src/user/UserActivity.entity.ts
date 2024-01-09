import { ActivityActionEnum, ActivityStatusEnum } from "./UserActivity.enum";
import { EntityBase } from "..";

export interface UserActivity extends EntityBase {
  action: ActivityActionEnum;

  status: ActivityStatusEnum;

  contentId: string;

  userId: string;
}
