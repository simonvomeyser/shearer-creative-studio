import clsx from "clsx";
import {Link} from "gatsby";
import React from 'react';
import {useFoldbackMenu} from "../../../hooks/useFoldbackMenu";
import {Logo} from "../../Logo";
import {MenuLink} from "./MenuLink";

export type HeaderDesktopProps = {
    className?: string;
};

export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({className}) => {

    const {headerRef, isVisible, isFixed} = useFoldbackMenu();

    return (
        <div className={clsx('bg-gradient-to-t from-transparent to-s-black w-full h-[var(--header-height--desktop)] z-header w-full', {
            'fixed -top-[var(--header-height--desktop)] left-0 transition duration-500' : isFixed,
            'absolute top-0 left-0'  : !isFixed,
            'translate-y-full'  : isVisible && isFixed,
        }, className)} ref={headerRef}>
            <ul className="justify-center items-center h-full text-xl font-regular text-gray-50 flex">
                <MenuLink linkClassName="p-8" href="/salon">Salon</MenuLink>
                <MenuLink linkClassName="p-8" href="/preise">Preise</MenuLink>
                <li className="w-[275px] mx-8">
                    <Link to="/">
                            <Logo className="h-full w-auto transition hover:scale-105 duration-500 "/>
                    </Link>
                </li>
                <MenuLink linkClassName="p-8" href="/diary">Diary</MenuLink>
                <MenuLink linkClassName="p-8" href="/termin">Termin</MenuLink>
            </ul>
        </div>
    );
};
