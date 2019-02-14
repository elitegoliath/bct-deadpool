import React from 'react';
import { DeadpoolList } from "./components/deadpoolList";
import { tDeadpoolListItem } from "../../types/deadpoolList.types";

export const Dashboard = () => {
    const fakeDeadpoolList: tDeadpoolListItem[] = [
        {
            deadTarget: {name: 'Queen of England', odds: 6},
            backers: [{name: 'Bacon Eater'}, {name: 'Idiot Fucker'}, {name: 'Lord Emo'}],
        },
    ];

    return (
        <div className='dashboard'>
            <DeadpoolList deadpoolList={fakeDeadpoolList}/>
        </div>
    );
};