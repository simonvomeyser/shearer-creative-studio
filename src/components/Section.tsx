import clsx from 'clsx';
import React, { useRef } from 'react';

export type SectionProps = {
    className?: string;
    children?: React.ReactNode;
    id?: string;
    headerPaddingTop?: boolean
    headerMarginTop?: boolean
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ children, id, className , headerPaddingTop, headerMarginTop},
     ref) => {
        const localRef = useRef(null);
        const actualRef = ref || localRef;

        if(headerPaddingTop && typeof headerMarginTop === 'undefined') {
           headerMarginTop = true;
        }

        return (
            <section id={id} ref={actualRef} className={clsx('z-section relative',
                {
                    'pt-[calc(var(--header-height--mobile))] md:pt-[calc(var(--header-height--desktop))]': headerPaddingTop,
                    'mt-[2rem] md:mt-[4rem]' : headerMarginTop
                },
                className)}>
                {children}
            </section>
        );
    });

Section.displayName = 'Section';

export { Section };