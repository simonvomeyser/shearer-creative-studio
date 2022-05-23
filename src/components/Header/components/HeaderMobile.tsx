import clsx from "clsx";
import {Link} from "gatsby";

import React, {useEffect, useState} from 'react';
import {useFoldbackMenu} from "../../../hooks/useFoldbackMenu";
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
    const {headerRef, isVisible, isFixed} = useFoldbackMenu();

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
            // Handle edge case: user scrolled a little passed the (stille absolute) header
            // Scroll to top to avoid weird "half visible burger"
            if (headerRef.current && window.scrollY < headerRef.current.clientHeight) {
                window.scrollTo({top: 0});
            }
            scrollLock.disablePageScroll();
            setIsMobileMenuOpen(true);
        }
    }

    return (
        <div className={clsx('flex justify-between items-center w-full bg-gradient-to-t from-transparent to-s-black z-header h-[var(--header-height--mobile)] px-4 ', {
            'fixed -top-[var(--header-height--mobile)] left-0 transition duration-500' : isFixed,
            'absolute top-0 left-0'  : !isFixed,
            'translate-y-full'  : isVisible && isFixed,
        },className)} ref={headerRef}>
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
