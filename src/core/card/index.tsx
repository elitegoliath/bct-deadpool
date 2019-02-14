import React from 'react';
import './index.scss';

interface iCardProps {
    children?: any;
}

export const AppCard = (_props: iCardProps) => {
    return (
        <div className='app-card'>
            <div className='app-card__body'>
                {_props.children}
            </div>
        </div>
    );
};