import {Link} from "gatsby";
import React, {useRef} from 'react';
import {PriceCategoryType} from "../../data/prices";
import {ArrowLinkStyles} from "../ArrowLinkStyles";
import {BraveText} from "../BraveText";
import {Price} from "./Price";

export type PriceCategoryProps = {
    category: PriceCategoryType
};

export const PriceCategory: React.FC<PriceCategoryProps> = ({category}) => {

    const categoryRef = useRef<HTMLDivElement>(null);
    return (
        <div className="flex gap-4 md:gap-8 xl:gap-14 flex-wrap md:flex-nowrap relative" id={category.anchor} ref={categoryRef}>
            <div className="w-full md:w-auto md:flex-1 space-y-2 md:space-y-4">
                <BraveText className="mb-4 sm:!text-[60px] xl:!text-[80px]">
                    {category.title}
                </BraveText>
                {category.description ?
                    <div className="md:text-lg max-w-"
                         dangerouslySetInnerHTML={{__html: category.description}}/>
                    : null}
                <div className="transition duration-500">
                    <Link to="/termin">
                        <ArrowLinkStyles size="sm">
                            Termin buchen
                        </ArrowLinkStyles>
                    </Link>
                </div>

            </div>
            <div
                className="pl-0 xs:pl-4 sm:pl-[25%] pt-0 md:pl-0 md:pt-[65px] xl:pt-[80px]  w-full md:w-auto md:flex-1 space-y-2">
                {category.prices.map((price, priceId) => (
                    <React.Fragment key={`${category.anchor}.${priceId}`}>
                        <Price price={price}/>
                    </React.Fragment>

                ))}
            </div>

        </div>
    );
};
