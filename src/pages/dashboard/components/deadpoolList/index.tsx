import React from 'react';
import './index.scss';
import { tDeadpoolListItem } from "../../../../types/deadpoolList.types";
import { DeadpoolListItem } from "../deadpoolListItem";

interface iDeadpoolListProps {
    deadpoolList?: tDeadpoolListItem[];
}

export const DeadpoolList = (_props: iDeadpoolListProps) => {
    return (
        <div className='deadpool-list'>
            <div className='deadpool-list__header'>This is the header</div>
            {_props.deadpoolList ? _props.deadpoolList.map((_value: tDeadpoolListItem, _index) => {
                return <DeadpoolListItem key={_index} itemProps={_value}/>
            }) : null}
        </div>
    );
};