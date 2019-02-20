import React from 'react';
import './index.scss';
import { Deadpool } from './components/deadpool';
import { tDeadpool, tDeadpoolList } from '../../types/deadpool.types';
import { DeadpoolList } from './components/deadpoolList';

export const Dashboard = () => {
    const fakeDeadpool: tDeadpool = {
        marks: [
            {
                name: 'Queen of England',
                backers: [
                    {username: 'Bacon Eater'},
                    {username: 'Idiot Fucker'},
                    {username: 'Lord Emo'},
                ],
            },
        ],
    };

    const fakeDeadpoolList: tDeadpoolList = {
        pools: [fakeDeadpool, fakeDeadpool, fakeDeadpool],
    };

    const DashboardDeadpoolList = () => (
        <div className='dashboard__deadpool-list'>
            <DeadpoolList pools={fakeDeadpoolList}/>
        </div>
    );

    const DashboardActiveDeadpool = () => (
        <div className='dashboard__active-deadpool'>
            <Deadpool pool={fakeDeadpool}/>
        </div>
    );

    return (
        <div className='dashboard'>
            <DashboardDeadpoolList/>
            <DashboardActiveDeadpool/>
        </div>
    );
};