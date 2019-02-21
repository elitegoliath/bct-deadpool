import { tDeadpoolList } from './deadpool.types';

export type tUser = {
    id: string;
    username: string;
    profileImgUrl: string;
    myPools?: tDeadpoolList;
    nugs?: number;
}