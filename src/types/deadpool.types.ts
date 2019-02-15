import { tUser } from "./user.types";

export type tDeadpoolMark = {
    name: string;
    odds: number;
    backers: tUser[];
}

export type tDeadpool = {
    marks: tDeadpoolMark[];
}

export type tDeadpoolList = {
    pools: tDeadpool[];
}