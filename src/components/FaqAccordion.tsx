import clsx from "clsx";
import {motion} from "framer-motion";
import {Link} from "gatsby";

import React, {useState} from 'react';
import {shuffleArray} from "../lib/shuffleArray";
import {ArrowLinkStyles} from "./ArrowLinkStyles";
import {faqs} from '../data/faqs';

export type FaqAccordionProps = {
    className?: string;
};

export const FaqAccordion: React.FC<FaqAccordionProps> = ({className}) => {
    const [currentFaqId, setCurrentFaqId] = useState<null | undefined | number>(0)

    function isCurrent(id: number) {
        return id === currentFaqId;
    }

    function handleCategoryClick(id: number) {
        if (isCurrent(id)) {
            setCurrentFaqId(null);
            return;
        }
        setCurrentFaqId(id);
    }

    const categoryMotionVariants = {
        closed: {
            height: 0,
            overflow: 'hidden',
            transition: {
                type: 'ease',
            }
        },
        open: {
            height: 'auto',
            overflow: 'visible',
            transition: {
                type: 'ease',
                staggerChildren: .05,
                delayChildren: .2,
            }
        }

    }

    const priceMotionVariant = {
        closed: {
            opacity: 0,
            y: -5,
            transition: {
                duration: .1,
            }
        },
        open: {
            opacity: 1, y: 0,
        },
    }

    return (
        <div className={clsx(className)}>
            <div className="space-y-5">

                {shuffleArray(faqs).slice(0,5).map((faq, id) => (
                    <div key={id}>
                        <button
                            className='flex leading-none pl-10 md:pl-16 relative transition duration-500 leading-none active:outline-none justify-start text-left text-2xl xs:text-3xl md:text-4xl hover:text-mango-50'
                            onClick={() => handleCategoryClick(id)}>
                            <span
                                className="inline-block absolute left-0 top-[.25em] md:top-[.1em] w-[.5em] h-[.5em] md:w-6 md:h-6">

                                <motion.span animate={{rotate: isCurrent(id) ? 0 : 90, transition: {duration: .35}}}
                                             className="absolute top-1/2 left-0 -translate-y-1/2 inline-block h-[2px] w-full bg-white"/>
                                <motion.span animate={{rotate: isCurrent(id) ? -180 : 0, transition: {duration: .35}}}
                                             className="absolute top-1/2 left-0 -translate-y-1/2 inline-block h-[2px] w-full bg-white"/>
                            </span>
                            <div
                                className="leading-none flex font-roma uppercase">{faq.question}</div>
                        </button>
                        <motion.div variants={categoryMotionVariants}
                                    className="pl-[20px] sm:pl-[40px] md:pl-16"
                                    initial='closed'
                                    animate={isCurrent(id) ? 'open' : 'closed'}>

                            <div className="pt-4 md:py-6">

                                <motion.div
                                    variants={priceMotionVariant}
                                    className="flex-wrap xs:flex-nowrap sm:text-lg md:text-2xl py-2 flex w-full justify-between items-end"
                                >

                                    <div className="w-full xs:w-auto" dangerouslySetInnerHTML={{__html: faq.answer}}/>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-8 ">
                <Link to="/faq">
                    <ArrowLinkStyles size="md">Mehr Fragen?</ArrowLinkStyles>
                </Link>
            </div>
        </div>
    );
};
