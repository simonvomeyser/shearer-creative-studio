import clsx from "clsx";
import React from 'react';
import {Arrow} from "./icons/Arrow";

export type ArrowLinkStylesProps = {
    className?: string;
    children?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg'
};

export const ArrowLinkStyles: React.FC<ArrowLinkStylesProps> = ({className, children, size = 'lg'}) => {
    return (
        <span
            className={clsx('inline-flex text-primary  font-roma uppercase items-center group transition duration-300 hover:text-mango-400', {
                   'text-[24px] xs:text-[36px] md:text-[42px]'  : size === 'lg',
                   'text-[28px] md:text-[36px]'  : size === 'md',
                   'text-[18px] md:text-[24px]'  : size === 'sm',
            } ,className)}>
            <Arrow
                className={clsx('inline-block  transition duration-500 group-hover:text-mango-400 group-hover:translate-x-[.25em]', {
                   'text-[24px] w-4 h-4  xs:w-5 xs:h-5 md:w-6 md:h-6 translate-y-0.5 mr-6'  : size === 'lg',
                   'w-4 h-4 md:w-5 md:h-5 translate-y-0.5 mr-5'  : size === 'md',
                   'w-3 h-3 md:w-4 mr-3 md:h-4 md:translate-y-0.5 md:mr-4'  : size === 'sm',
                })}/>
            {children}
        </span>
    );
};
