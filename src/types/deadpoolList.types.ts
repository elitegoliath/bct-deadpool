import { tUser } from "./user.types";

export type tDeadpoolListItem = {
    deadTarget: tDeadpoolTarget;
    backers: tUser[];
}

export type tDeadpoolTarget = {
    name: string;
    odds: number;
}