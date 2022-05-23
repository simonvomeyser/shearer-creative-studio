import clsx from "clsx";
import React from 'react';
import {Container} from "../Container";
import {HeaderDesktop} from "./components/HeaderDesktop";
import {HeaderMobile} from "./components/HeaderMobile";

export type HeaderProps = {
    className?: string;
};

export const Header: React.FC<HeaderProps> = ({className,}) => {

    return (
        <div className={clsx('', className)}>
            <header
                className="absolute left-0 w-full z-header bg-gradient-to-t from-transparent to-s-black font-roma">
                <Container
                    className="md:h-[var(--header-height--desktop)] h-[var(--header-height--mobile)] flex justify-center ">
                    <HeaderDesktop className="hidden md:block"/>
                    <HeaderMobile className="md:hidden"/>
                </Container>
            </header>
        </div>
    );
};
