import clsx from "clsx";
import React from 'react';

export type ChevronProps = {
    className?: string;
};

export const ChevronRight: React.FC<ChevronProps> = ({className}) => {
    return (
        <svg className={clsx('', className)} viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg"
             stroke="currentColor">
            <g clipPath="url(#clip0_115_4)">
                <path d="M16.6768 15.59L-0.000242233 31.18L-0.000242233 0L16.6768 15.59Z" fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_115_4">
                    <rect width="16.677" height="31.179" fill="currentColor"/>
                </clipPath>
            </defs>

        </svg>

    );
};
