import { tDeadpoolList } from './deadpool.types';
import { tNug } from './currency.types';

export type tUser = {
    id: string;
    username: string;
    myPools: tDeadpoolList;
    myNugs: tNug[];
}