import clsx from 'clsx';
import lozad from 'lozad';
import React, { useEffect, useRef } from 'react';

export type WatercolorProps = {
    className?: string;
    blendMode: 'color-burn' | 'color-dodge' | 'screen';
    blendColor?: 'black' | 'white';
};

export const Watercolor: React.FC<WatercolorProps> = ({
                                                          blendColor,
                                                          blendMode,
                                                          className,
                                                      }) => {

    const styles = {
        'maskRepeat': 'no-repeat',
        'WebkitMaskRepeat': 'no-repeat',
        'maskSize': 'contain',
        'WebkitMaskSize': 'contain',
        'backgroundBlendMode': blendMode,
        backgroundColor: blendColor,
    };

    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = lozad('null', {
            loaded(element: HTMLDivElement) {
                element.style['webkitMaskImage'] = 'url(watercolor.png)';
                // @ts-ignore
                element.style['maskImage'] = 'url(watercolor.png)';
            },
        });

        if (elementRef.current) {
            observer.observer.observe(elementRef.current);
        }

        return () => {
            observer.observer.disconnect();
        };
    }, []);


    return (
        <div className={clsx(
            'lozad pointer-events-none absolute inline-block bg-no-repeat bg-contain rotate-[-19deg] transition-all !duration-[4s] z-watercolor',
            className,
        )}
             data-background-image={'watercolor.png'}
             ref={elementRef}
             style={styles}
        />
    );
};
