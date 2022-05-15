import clsx from "clsx";
import React from 'react';

export type FacebookProps = {
    className?: string;
};

export const Facebook: React.FC<FacebookProps> = ({className}) => {

    return (
        <svg className={clsx('', className)} viewBox="0 0 11.782 21.998">
            <path
                d="M12.619,12.374l.611-3.981H9.41V5.809a1.991,1.991,0,0,1,2.245-2.151h1.737V.269A21.178,21.178,0,0,0,10.309,0c-3.146,0-5.2,1.907-5.2,5.359V8.393h-3.5v3.981h3.5V22h4.3V12.374Z"
                transform="translate(-1.609)" fill="#fff"/>
        </svg>
    );
};
