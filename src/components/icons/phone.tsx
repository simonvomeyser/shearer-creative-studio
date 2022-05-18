import clsx from "clsx";
import React from 'react';

export type PhoneProps = {
    className?: string;
};

export const Phone: React.FC<PhoneProps> = ({className}) => {

    return (
        <svg className={clsx('', className)} viewBox="0 0 28.921 28.92">
            <path data-name="Icon metro-phone"
                  d="M23.779,21.208c-1.928,1.928-1.928,3.856-3.856,3.856s-3.856-1.928-5.784-3.856-3.856-3.856-3.856-5.784,1.928-1.928,3.856-3.856S10.283,3.856,8.355,3.856,2.571,9.64,2.571,9.64c0,3.856,3.962,11.674,7.712,15.424s11.568,7.712,15.424,7.712c0,0,5.784-3.856,5.784-5.784s-5.784-7.712-7.712-5.784Z"
                  transform="translate(-2.571 -3.856)" fill="currentColor"/>
        </svg>
    )
};

