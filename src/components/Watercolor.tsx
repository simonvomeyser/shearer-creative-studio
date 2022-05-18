import clsx from 'clsx';
import {StaticImage} from "gatsby-plugin-image";
import React from 'react';

export type WatercolorProps = {
    className?: string;
    color?: 'black' | 'white' | 'green' | 'gray';
};

export const Watercolor: React.FC<WatercolorProps> = ({color, className,}) => {

    const defaultClasses = 'pointer-events-none absolute rotate-[-19deg] transition-all !duration-[4s] z-watercolor';

    if (color === 'white') {
        return <StaticImage
            src="../images/watercolor/white.png"
            objectFit="contain"
            alt=''
            role='presentation'
            className={clsx(defaultClasses, className)}
        />
    }

    if (color === 'black') {
        return <StaticImage
            src="../images/watercolor/black.png"
            objectFit="contain"
            alt=''
            role='presentation'
            className={clsx(defaultClasses, className)}
        />
    }

    if (color === 'gray') {
        return <StaticImage
            src="../images/watercolor/gray.png"
            objectFit="contain"
            alt=''
            role='presentation'
            className={clsx(defaultClasses, className)}
        />
    }

    if (color === 'green') {
        return <StaticImage
            src="../images/watercolor/green.png"
            objectFit="contain"
            alt=''
            role='presentation'
            className={clsx(defaultClasses, className)}
        />
    }


    return null;
};
