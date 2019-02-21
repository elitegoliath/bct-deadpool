import React from 'react';
import './index.scss';
import { tDeadpool } from '../../../../types/deadpool.types';
import { AppCard } from '../../../../core/card';
import { tUser } from '../../../../types/user.types';

const UserProfileSection = (_user: { tUser }) => {
    const {username, nugs} = _user.tUser;

    return (
        <div className='deadpool-list__header'>
            {/*TODO: Add Profile Image*/}
            <div>{username}</div>
            <div>{nugs}</div>
        </div>
    )
};

const DeadpoolCardBody = (_pool: { tDeadpool }) => {
    const {marks} = _pool.tDeadpool;

    return (
        <div>
            <div>My Targets Count</div>
            <div>Target Submissions Left</div>
            <div>Is Valid/Active. Maybe Background color change with small status text. If inactive,
                Display winner. If not valid, how many participants are still needed. (minimum of 6)</div>
            <div>Is Open for voting, or closed. Closed means the first round has begun or date of close has
                been reached.</div>
            <div>Is Public/Private</div>
            <div>Prize Pool (Goes up with each Target entry.)</div>
            <div>
                What round out of 3 the pool is in. Prize pool from entries for each round goes as follows:
                First Round: 50% of entire pot, (If pot was 100 nugs, 50 nug payout. 50 nugs left.)
                Second Round: 60%, (If pot is 50 nugs, 30 nug payout. 20 nugs left.)
                Third Round: 90%, (If pot is 20 nugs, 18 nug payout. House keeps the remaining 2 nugs.)
            </div>
        </div>
    );
};

interface iDeadpoolList {
    activeUser?: tUser;
}

export const DeadpoolList = (_props: iDeadpoolList) => {
    const {activeUser} = _props;
    const pools = activeUser ? activeUser.myPools.pools : null;

    return (
        <div className='deadpool-list'>
            <UserProfileSection tUser={activeUser}/>
            {pools ? pools.map((_pool: tDeadpool, _index) => {
                return <AppCard key={_index}>
                    <DeadpoolCardBody tDeadpool={_pool}/>
                </AppCard>;
            }) : <div className='deadpool-list__join-msg'>You've joined no pools. Scrub!!</div>}
        </div>
    );
};