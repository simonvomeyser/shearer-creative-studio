import {globalHistory} from "@reach/router";
import {useEffect, useRef, useState} from "react";

var debounce = require('lodash.debounce');

let oldScrollPosition = 0;
let firstLoad = true;

export function useFoldbackMenu() {
    let [isFixed, setIsFixed] = useState(false);
    let [isVisible, setIsVisible] = useState(false);

    const headerRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {

        // On Navigation
        globalHistory.listen(({action}) => {
            oldScrollPosition = 0;
            setIsVisible(false);
            setIsFixed(false);
        })

        const listener = debounce(() => {
            const scrollPosition = window.scrollY;
            const headerHeight = headerRef.current?.clientHeight;


            if (!headerHeight) {
                return;
            }

            if (!firstLoad) {
                firstLoad = true;
                return
            }

            if (scrollPosition > headerHeight) {
                setIsFixed(true);
            }

            if (oldScrollPosition > scrollPosition) {
                // scrolling up
                setIsVisible(true)
            } else {
                // scrolling down
                setIsVisible(false)
            }


            oldScrollPosition = scrollPosition;
        })

        window.addEventListener('scroll', listener, {passive: true});


        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, [])


    return {headerRef, isFixed, isVisible};
}