import React from 'react';
import './index.scss';
import {tDeadpoolListItem} from "../../../../types/deadpoolList.types";
import {tUser} from "../../../../types/user.types";

interface iDeadpoolListItemProps {
    itemProps: tDeadpoolListItem;
}

export const DeadpoolListItem = (_props: iDeadpoolListItemProps) => {
    const {
        deadTarget,
        backers,
    } = _props.itemProps;

    return (
        <div className='deadpool-list-item'>
            <div className='deadpool-list-item__target-name'>{deadTarget.name}</div>
            <div className='deadpool-list-item__backer-names'>
                {backers.map((_value: tUser, _index) => {
                    return <div className='backer-name' key={_index}>{_value.name}</div>
                })}
            </div>

        </div>
    );
};