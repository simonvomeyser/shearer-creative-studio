import clsx from "clsx";
import React from 'react';
import {PriceTypeType} from "../../data/prices";
import useInView from "../../hooks/useInView";

export type PriceProps = {
    price: PriceTypeType;
};

export const Price: React.FC<PriceProps> = ({price,}) => {

    const [ref, isVisible] = useInView({
        threshold: 0.5,
        unobserveOnEnter: true
    })

    return (
        <div ref={ref} className={clsx('transition duration-1000 ',{
            'opacity-0 translate-y-2' : !isVisible
        })}>
            <div
                className="border-b border-dashed flex-wrap xs:flex-nowrap sm:text-lg md:text-xl py-2 mb-3 flex w-full justify-between items-end">

                <div className="w-full xs:w-auto"
                     dangerouslySetInnerHTML={{__html: price.title}}/>
                <div className="w-full xs:w-auto text-right opacity-90 pl-2 whitespace-nowrap">{price.price}</div>
            </div>
            {price.description ?
                <div className="text-white opacity-60 wrap" dangerouslySetInnerHTML={{__html: price.description}}/>
                : null}
        </div>
    );
};
