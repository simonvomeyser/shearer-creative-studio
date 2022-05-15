import clsx from "clsx";
import {Link} from "gatsby";
import {motion} from "framer-motion";
import React from 'react';
import {Logo} from "../../Logo";
import {MenuLink} from "./MenuLink";

export type HeaderDesktopProps = {
    className?: string;
};

export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({className}) => {

    return (
        <div className={clsx('', className)}>
            <motion.ul
                initial={{opacity: 0, translateY: '-5%'}}
                animate={{opacity: 1, translateY: 0}}
                transition={{delay: 0.5, duration: 0.5}}
                className="justify-center items-center h-full text-xl font-regular text-gray-50 flex">
                <MenuLink linkClassName="p-8" href="/salon">Salon</MenuLink>
                <MenuLink linkClassName="p-8" href="/preise">Preise</MenuLink>
                <li className="w-[275px] mx-8">
                    <Link to="/">
                            <Logo className="h-full w-auto transition hover:scale-105 duration-500 "/>
                    </Link>
                </li>
                <MenuLink linkClassName="p-8" href="/diary">Diary</MenuLink>
                <MenuLink linkClassName="p-8" href="/termin">Termin</MenuLink>
            </motion.ul>
        </div>
    );
};
