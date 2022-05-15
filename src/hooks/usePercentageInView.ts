import { RefObject, useEffect, useState } from 'react';

const between = (x: number, min: number, max: number) => {
    return x >= min && x <= max;
};

export function usePercentageInView(ref: RefObject<HTMLElement>) {

    let [percentageInView, setPercentageInView] = useState(0);
    // -1: above, 0 inside, 1: under
    let [viewportPosition, setViewportPosition] = useState<-1 | 0 | 1>(0);

    useEffect(() => {


        function calculateAndSet() {
            if (ref.current) {
                const viewportHeight = window.innerHeight;
                const viewportStart = window.scrollY;
                const elementStart = ref.current.offsetTop;
                const elementHeight = ref.current.clientHeight;
                const elementEnd = elementStart + elementHeight;
                const viewportEnd = viewportStart + viewportHeight;
                const normalizedViewportHeight = viewportHeight / 100;

                if (viewportEnd < elementStart) {
                    setViewportPosition(-1);
                    setPercentageInView(0);
                    return;
                }

                if (viewportStart > elementEnd) {
                    setViewportPosition(1);
                    setPercentageInView(0);
                    return;
                }

                if (viewportHeight < elementHeight) {
                    // how much & of the viewport is outside, subtract from 100
                    if (viewportStart < elementStart) {
                        setViewportPosition(-1);
                        setPercentageInView(100 - ((elementStart - viewportStart) / normalizedViewportHeight));
                        return;
                    }
                    if (viewportEnd > elementEnd) {
                        setViewportPosition(1);
                        setPercentageInView(100 - ((viewportEnd - elementEnd) / normalizedViewportHeight));
                        return;
                    }

                    setPercentageInView(0);
                    setPercentageInView(100);


                } else {
                    // How much % of the element is in view
                    if (between(viewportEnd, elementStart, elementEnd)) {
                        setViewportPosition(-1);
                        setPercentageInView(((viewportEnd - elementStart) / elementHeight) * 100);
                        return;
                    }
                    if (between(viewportStart, elementStart, elementEnd)) {
                        setViewportPosition(1);
                        setPercentageInView(((elementEnd - viewportStart) / elementHeight) * 100);
                        return;
                    }

                    setViewportPosition(0);
                    setPercentageInView(100);
                }

            }

        }

        window.addEventListener('scroll', calculateAndSet, { passive: true });

        return () => {
            window.removeEventListener('scroll', calculateAndSet);
        };
    }, [ref]);

    return { percentageInView, viewportPosition };

}
