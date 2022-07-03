import clsx from "clsx";
import React from 'react';

export type QuestionMarkProps = {
    className?: string;
};

export const QuestionMark: React.FC<QuestionMarkProps> = ({className}) => {
    return (
        <svg className={clsx('', className)} viewBox="0 0 368 808" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text data-name="?" transform="translate(4 604)" fill="none" stroke="#9eb992"
                  stroke-width="4" font-size="800" font-family="Roma-Bold, Roma" font-weight="700">
                <tspan x="0" y="0">?</tspan>
            </text>
        </svg>
    );
};