import clsx from "clsx";
import {Link} from "gatsby";

import React, {useEffect, useState} from 'react';
import {useSmoothScroll} from "../../../hooks/useSmoothScroll";
import {LogoSimple} from "../../LogoSimple";
import {Burger} from "./Burger";
import {MobileMenu} from "./MobileMenu";
import scrollLock from 'scroll-lock';
import {globalHistory} from '@reach/router'

export type HeaderMobileProps = {
    className?: string;
};

export const HeaderMobile: React.FC<HeaderMobileProps> = ({className}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const smoothScroll = useSmoothScroll();

    useEffect(() => {
        return globalHistory.listen(({action}) => {
            if (action === 'PUSH') setIsMobileMenuOpen(false)
        })
    }, [setIsMobileMenuOpen])

    function handleBurgerClick() {
        if (isMobileMenuOpen) {
            scrollLock.enablePageScroll();
            setIsMobileMenuOpen(false);
        } else {
            smoothScroll?.animateScroll(0)
            scrollLock.disablePageScroll();
            setIsMobileMenuOpen(true);
        }
    }

    return (
        <div className={clsx('flex justify-between items-center w-full ', className)}>
            <Link to="/">
                <LogoSimple className="translate-y-0.5 w-32"/>
            </Link>
            <button className="z-20" onClick={handleBurgerClick}>
                <Burger className="z-20" isOpen={isMobileMenuOpen}/>
            </button>
            <MobileMenu className="z-10" isOpen={isMobileMenuOpen}/>
        </div>
    );
};
