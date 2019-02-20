import { tUser } from './user.types';
import { tNug } from './currency.types';

export type tDeadpoolMark = {
    name: string;
    cost: number;
    backers: tUser[];
}

export type tDeadpool = {
    id: string;
    title: string;
    marks: tDeadpoolMark[];
    prizePot: tNug[];
    isValid: boolean;
    isPrivate: boolean;
}

export type tDeadpoolList = {
    pools: tDeadpool[];
}