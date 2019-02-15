import React from 'react';
import './index.scss';
import { tDeadpoolMark } from '../../../../types/deadpool.types';
import { tUser } from '../../../../types/user.types';

interface iDeadpoolMarkProps {
    mark: tDeadpoolMark;
}

export const DeadpoolMark = (_props: iDeadpoolMarkProps) => {
    const {
        name,
        backers,
        odds,
    } = _props.mark;

    return (
        <div className='deadpool-mark'>
            <div className='deadpool-mark__target-name'>{name}</div>
            <div className='deadpool-mark__backer-names'>
                {backers.map((_value: tUser, _index) => {
                    return <div className='backer-name' key={_index}>{_value.name}</div>
                })}
            </div>

        </div>
    );
};