import clsx from "clsx";
import {motion} from "framer-motion";
import React from 'react';

export type BurgerProps = {
    className?: string;
    isOpen?: Boolean;
};

export const Burger: React.FC<BurgerProps> = ({className, isOpen}) => {

    return (
        <span className={clsx('h-6 w-9 flex flex-col justify-between items-center pointer-events-none', className)}>
            <motion.span
                animate={{
                    y: isOpen ? '10px' : 0,
                    rotate: isOpen ? 45 : 0,
                    transition: {
                        y: {
                            duration: isOpen ? .2 : .1,
                            delay: isOpen ? 0 : .1,
                        },
                        rotate: {
                            duration: isOpen ? .2 : .1,
                            delay: isOpen ? .1 : 0,
                        }
                    }
                }}
                className="h-1 bg-white inline-block w-full rounded-full"/>
            <motion.span
                animate={{
                    width: isOpen ? 0 : '100%',
                    opacity: isOpen ? 0 : 1,
                    transition: {
                        duration: isOpen ? .4 : .2,
                        delay: isOpen ? 0 : .1,
                    }
                }}
                className="h-1 bg-white inline-block w-full rounded-full "/>
            <motion.span
                animate={{
                    y: isOpen ? '-10px' : 0,
                    rotate: isOpen ? -45 : 0,
                    transition: {
                        duration: isOpen ? .2 : .1,
                        y: {
                            duration: isOpen ? .2 : .1,
                            delay: isOpen ? 0 : .1,
                        },
                        rotate: {
                            duration: isOpen ? .2 : .1,
                            delay: isOpen ? .1 : 0,
                        }
                    }
                }}
                className="h-1 bg-white inline-block w-full rounded-full"/>
        </span>
    );
};
