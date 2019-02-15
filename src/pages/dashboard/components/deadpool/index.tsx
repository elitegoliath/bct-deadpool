import React from 'react';
import './index.scss';
import { tDeadpool, tDeadpoolMark } from '../../../../types/deadpool.types';
import { DeadpoolMark } from '../deadpoolMark';

interface iDeadpoolProps {
    pool?: tDeadpool;
}

export const Deadpool = (_props: iDeadpoolProps) => {
    const {marks} = _props.pool;

    return (
        <div className='deadpool'>
            <div className='deadpool__header'>You are viewing this deadpool.</div>
            {marks ? marks.map((_mark: tDeadpoolMark, _index) => {
                return <DeadpoolMark key={_index} mark={_mark}/>
            }) : null}
        </div>
    );
};