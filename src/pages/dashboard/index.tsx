import React from 'react';
import './index.scss';
import { Deadpool } from './components/deadpool';
import { tDeadpool } from '../../types/deadpool.types';
import { DeadpoolList } from './components/deadpoolList';
import { tUser } from '../../types/user.types';

const fakeDeadpool: tDeadpool = {
    marks: [
        {
            name: 'Queen of England',
            backers: [
                {id: 'fjdsskjdbgds', username: 'Bacon Eater', profileImgUrl: ''},
                {id: 'gdfhffefsf', username: 'Idiot Fucker', profileImgUrl: ''},
                {id: '435fdgdgbdffdsae', username: 'Lord Emo', profileImgUrl: ''}
            ],
            cost: 100,
        },
    ],
    id: '545768644dfvdbdff',
    isPrivate: false,
    isValid: true,
    isOpen: true,
    prizePot: 500,
    title: 'Janky-Mank Deadpool',
};

const fakeActiveUser: tUser = {
    id: 'w345hfbvds',
    username: 'Arsenal Lagspike',
    profileImgUrl: '',
    nugs: 4350,
    myPools: {
        pools: [fakeDeadpool, fakeDeadpool, fakeDeadpool],
    },
};

const DashboardDeadpoolList = () => (
    <div className='dashboard__deadpool-list'>
        <DeadpoolList activeUser={fakeActiveUser}/>
    </div>
);

const DashboardActiveDeadpool = () => (
    <div className='dashboard__active-deadpool'>
        <Deadpool pool={fakeDeadpool}/>
    </div>
);

export const Dashboard = () => {
    return (
        <div className='dashboard'>
            <DashboardDeadpoolList/>
            <DashboardActiveDeadpool/>
        </div>
    );
};