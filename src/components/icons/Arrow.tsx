import clsx from "clsx";
import React from 'react';

export type ArrowProps = {
    className?: string;
    direction?: 'right' | 'left' | 'top' | 'down'
};

export const Arrow: React.FC<ArrowProps> = ({className, direction= 'right'}) => {

    return (
        <svg className={clsx('',
        {
            'rotate-90' : direction === 'down',
            'rotate-180' : direction === 'left',
            '-rotate-90' : direction === 'top',
        }, className
        )} viewBox="0 0 24.815 24.96">
            <g id="arrow" transform="translate(-359.075 -2534.09)">
                <path id="Path_52" data-name="Path 52" d="M359.075,12623.378h23.047" transform="translate(0 -10076.808)"
                      fill="none" stroke="currentColor" strokeWidth="2.5"/>
                <path id="Path_53" data-name="Path 53" d="M378.543,12612.185l11.6,11.6-11.6,11.6"
                      transform="translate(-8.018 -10077.211)" fill="none" stroke="currentColor" strokeWidth="2.5"/>
            </g>
        </svg>

    );
};
