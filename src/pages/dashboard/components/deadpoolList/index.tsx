import React from 'react';
import './index.scss';
import { tDeadpool, tDeadpoolList } from '../../../../types/deadpool.types';
import { AppCard } from '../../../../core/card';

interface iDeadpoolList {
    pools?: tDeadpoolList;
}

export const DeadpoolList = (_props: iDeadpoolList) => {
    const {pools} = _props.pools;

    return (
        <div className='deadpool-list'>
            <div className='deadpool-list__header'>The list begins!!</div>
            {pools ? pools.map((_pool: tDeadpool, _index) => {
                return <AppCard key={_index}>
                    {_pool.marks.length}
                </AppCard>;
            }) : <div className='deadpool-list__join-msg'>You've joined no pools. Scrub!!</div>}
        </div>
    );
};