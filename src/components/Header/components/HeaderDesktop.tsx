import clsx from "clsx";
import {Link} from "gatsby";
import React from 'react';
import {MenuLink} from "./MenuLink";

export type HeaderDesktopProps = {
    className?: string;
};

export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({className}) => {

    return (
        <div className={clsx('', className)}>
            <ul className="justify-center items-center h-full text-xl font-regular text-gray-50 flex">
                <MenuLink linkClassName="p-8" href="/salon">Salon</MenuLink>
                <MenuLink linkClassName="p-8" href="/preise">Preise</MenuLink>
                <li className="w-[275px] mx-8">
                    <Link to="/" aria-label="Link zur Startseite">
                        <img src="/logo.svg" alt="Logo von SHEARER Creative Studio" loading="lazy"
                             className="h-full w-auto transition hover:scale-105 duration-500 "/>
                    </Link>
                </li>
                <MenuLink linkClassName="p-8" href="/diary">Diary</MenuLink>
                <MenuLink linkClassName="p-8" href="/termin">Termin</MenuLink>
            </ul>
        </div>
    );
};
