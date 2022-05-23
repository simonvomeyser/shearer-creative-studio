import React from 'react';
import {HeaderDesktop} from "./components/HeaderDesktop";
import {HeaderMobile} from "./components/HeaderMobile";

export type HeaderProps = {
    className?: string;
};

export const Header: React.FC<HeaderProps> = ({className,}) => {

    return (
        <header>
            <HeaderDesktop className="hidden md:block"/>
            <HeaderMobile className="md:hidden"/>
        </header>
    );
};
