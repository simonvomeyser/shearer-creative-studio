import clsx from "clsx";
import {motion} from "framer-motion";
import {Link} from "gatsby";
import React, {useState} from 'react';
import {priceCategories} from "../../data/prices";
import {ArrowLinkStyles} from "../ArrowLinkStyles";
import {BraveText} from "../BraveText";
import {ChevronRight} from "../icons/CevronRight";

export type PriceAccordionProps = {
    className?: string;
    children?: React.ReactNode;
};

export const PriceAccordion: React.FC<PriceAccordionProps> = ({className,}) => {

    const [currentCategoryId, setCurrentCategoryId] = useState<null | undefined | number>(0)

    function isCurrent(id: number) {
        return id === currentCategoryId;
    }

    function handleCategoryClick(id: number) {
        if (isCurrent(id)) {
            setCurrentCategoryId(null);
            return;
        }
        setCurrentCategoryId(id);
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
    const readMoreMotionVariant = {
        closed: {
            opacity: 0,
            x: -10,
            transition: {
                duration: .1,
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .4,
            }
        },
    }


    return (
        <div className={clsx('space-y-2', className)}>
            {priceCategories.map((category, id) => (
                <div key={id}>
                    <button
                        className={clsx('flex leading-none pl-8 md:pl-12 relative transition duration-500 leading-none active:outline-none', {
                            'text-primary': isCurrent(id),
                            'hover:text-mango-200': !isCurrent(id),
                        })} onClick={() => handleCategoryClick(id)}>
                        <span
                            className="inline-block absolute left-0 top-1/2 -translate-y-1/2">

                            <motion.span animate={{rotate: isCurrent(id) ? 90 : 0}} className="inline-block">
                                <ChevronRight className="translate-y-0.5 w-6 h-6 md:translate-y-0 md:h-8 md:w-8"/>
                            </motion.span>
                        </span>
                        <BraveText className="leading-none flex">{category.title}</BraveText>
                    </button>
                    <motion.div variants={categoryMotionVariants}
                                className="md:pl-14"
                                initial='closed'
                                animate={isCurrent(id) ? 'open' : 'closed'}>
                        <div className="py-6 space-y-2 ">

                            <motion.div className="mb-4 max-w-[50ch]" variants={readMoreMotionVariant} >
                                Unsere Preise werden fair und transparent berechnet - und vielleicht anders, als du es kennst!  <Link to="/preise" className="underline">Erfahre mehr</Link></motion.div>

                            {category.prices.map((price, priceId) => (
                                <motion.div key={`${id}.${priceId}`}
                                            variants={priceMotionVariant}
                                            className="border-b border-dashed flex-wrap xs:flex-nowrap sm:text-lg md:text-2xl py-3 flex w-full justify-between items-end"
                                >

                                    <div className="w-full xs:w-auto" dangerouslySetInnerHTML={{__html: price.title}}/>
                                    <div className="w-full xs:w-auto text-right opacity-75">{price.price}</div>
                                </motion.div>
                            ))}
                            <motion.div variants={readMoreMotionVariant} className="flex w-full justify-end pt-4">
                                <a href={`/preise#${category.anchor}`}>
                                        <ArrowLinkStyles size="sm">
                                            Details zu "{category.title}"-Preisen
                                        </ArrowLinkStyles>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};
