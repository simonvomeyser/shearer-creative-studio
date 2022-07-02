import clsx from "clsx";
import {Link} from "gatsby";

import React, {useEffect, useState} from 'react';
import {useSmoothScroll} from "../../../hooks/useSmoothScroll";
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
            if (action === 'PUSH') {
                setIsMobileMenuOpen(false)
                scrollLock.enablePageScroll();
            }
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
            <Link to="/" aria-label="Link zur Startseite">
                <img src="/logo-simple.svg" loading="lazy" alt="Logo von SHEARER Creative Studio" className="translate-y-0.5 w-32"/>
            </Link>
            <button className="z-20 p-4 translate-x-2 translate-y-0.5" onClick={handleBurgerClick} aria-label="Mobiles Menü öffnen">
                <Burger className="z-20" isOpen={isMobileMenuOpen}/>
            </button>
            <MobileMenu className="z-10" isOpen={isMobileMenuOpen}/>
        </div>
    );
};
