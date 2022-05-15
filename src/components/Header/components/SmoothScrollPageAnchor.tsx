import clsx from "clsx";
import React from 'react';
import {useSmoothScroll} from "../../../hooks/useSmoothScroll";

export type SmoothScrollPageAnchorProps = {
    className?: string;
    targetId: string;
    title?: string;
    children?: React.ReactNode;
};

export const SmoothScrollPageAnchor: React.FC<SmoothScrollPageAnchorProps> = ({
                                                                                  className,
                                                                                  targetId,
                                                                                  title = "Nach unten scrollen",
                                                                                  children
                                                                              }) => {

    const smoothScroll = useSmoothScroll();

    function handleClick(e: React.MouseEvent) {
        e.preventDefault();
        const element = document.querySelector(`#${targetId}`);
        if (element) {
            smoothScroll?.animateScroll(element);
        }
    }

    return (
        <a href={`#${targetId}`}
           className={clsx('', className)}
           onClick={handleClick}
           title={title}
        >
            {children}
        </a>
    );
};
