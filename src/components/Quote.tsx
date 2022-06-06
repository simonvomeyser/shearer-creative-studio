import clsx from 'clsx';
import {Link} from "gatsby";

import React from 'react';
import {QuoteDataType} from '../data/quotes';
import useInView from "../hooks/useInView";
import {BraveText} from './BraveText';
import {ButtonStyles} from './ButtonStyles';

export type QuoteProps = {
    className?: string;
    quoteData: QuoteDataType
    preventCta?: Boolean
};

export const Quote: React.FC<QuoteProps> = ({className, quoteData, preventCta,}) => {

    const [ref, isVisible] = useInView({
        threshold: 0.5,
        unobserveOnEnter: true
    })

    return (
        <div ref={ref} className={clsx('transition duration-[1.5s] ',
            {
                'opacity-0 -translate-y-5': !isVisible
            }, className
        )}>
            <BraveText className='text-center text-s-gray-500'>
                <blockquote>
                    &bdquo;{quoteData.body}&rdquo;
                </blockquote>
            </BraveText>
            {quoteData.author ? (
                <div
                    className='italic text-right text-lg md:text-2xl py-4 md:py-8 flex justify-end items-center max-w-screen-lg'>
                    <span className="inline-block bg-white h-[1px] w-4 md:w-10 mr-2"/>{quoteData.author}
                </div>
            ) : null}
            {!preventCta && !quoteData.preventCta ? (
                <div className=' mt-4 md:mt-8 flex justify-center'>
                    <Link to='/termin'>
                        <ButtonStyles>
                            Termin buchen
                        </ButtonStyles>
                    </Link>
                </div>
            ) : null}
        </div>
    );
};
