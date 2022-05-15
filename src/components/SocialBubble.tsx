import clsx from "clsx";
import React from 'react';

export type SocialBubbleProps = {
    className?: string;
    href: string;
    children?: React.ReactNode;
};

export const SocialBubble: React.FC<SocialBubbleProps> = ({className, href, children}) => {
    return (
        <a href={href}
           target="_blank"
           className={clsx('w-12 h-12 x:w-14 x:h-14 border border-white rounded-full flex justify-center items-center', className)}
           rel="noreferrer">
            {children}
        </a>
    );
};

