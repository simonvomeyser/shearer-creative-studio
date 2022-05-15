import clsx from "clsx";
import lozad from 'lozad';
import React, {useEffect, useRef} from 'react';

export type LazyImgProps = {
    className?: string;
    src: string;
    alt?: string;
    onLoad?: () => void;
};

export const LazyImg: React.FC<LazyImgProps> = ({
                                                    className,
                                                    alt,
                                                    src,
                                                    onLoad,
                                                }) => {

    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = lozad('null', {
            loaded() {
                if(onLoad) onLoad()
            }
        });
        if (imageRef.current) {
            observer.observer.observe(imageRef.current);

        }

        return () => {
            observer.observer.disconnect()
        }
    }, [onLoad])


    return (
        <img data-src={src} className={clsx('lozad', className)} ref={imageRef} alt={alt}/>
    );
};
