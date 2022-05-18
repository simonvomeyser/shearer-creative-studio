import clsx from "clsx";
import React from 'react';

export type MailProps = {
    className?: string;
};

export const Mail: React.FC<MailProps> = ({className}) => {

    return (
        <svg className={clsx('', className)} viewBox="0 0 32.431 25.945">
            <path data-name="Icon material-mail-outline"
                  d="M32.188,6H6.243A3.239,3.239,0,0,0,3.016,9.243L3,28.7a3.253,3.253,0,0,0,3.243,3.243H32.188A3.253,3.253,0,0,0,35.431,28.7V9.243A3.253,3.253,0,0,0,32.188,6Zm0,22.7H6.243V12.486l12.972,8.108,12.972-8.108ZM19.216,17.351,6.243,9.243H32.188Z"
                  transform="translate(-3 -6)" fill="currentColor"/>
        </svg>
    );
};

