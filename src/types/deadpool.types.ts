import { tUser } from './user.types';

export type tDeadpoolMark = {
    name: string;
    cost: number;
    backers: tUser[];
}

export type tDeadpool = {
    id: string;
    title: string;
    marks: tDeadpoolMark[];
    prizePot: number;
    isValid: boolean;
    isPrivate: boolean;
    isOpen: boolean;
    closureDate?: string;
}

export type tDeadpoolList = {
    pools: tDeadpool[];
}