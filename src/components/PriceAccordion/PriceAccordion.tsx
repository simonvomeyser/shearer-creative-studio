import clsx from "clsx";
import React, {useState} from 'react';
import {priceCategories} from "../../data/prices";

import {PriceAccordionElement} from "./components/PriceAccordionElement";

export type PriceAccordionProps = {
    className?: string;
    children?: React.ReactNode;
};

export const PriceAccordion: React.FC<PriceAccordionProps> = ({className,}) => {

    const [currentCategoryId, setCurrentCategoryId] = useState<null | undefined | number>(0)

    return (
        <div className={clsx('space-y-2', className)}>
            {priceCategories.map((category, id) => (
                <PriceAccordionElement
                    currentCategoryId={currentCategoryId}
                    setCurrentCategoryId={setCurrentCategoryId}
                    key={id}
                    id={id}

                    category={category}
                />
            ))}
        </div>
    );
};
