import clsx from 'clsx';
import React, { useRef } from 'react';

export type SectionProps = {
    className?: string;
    children?: React.ReactNode;
    id?: string;
    headerPaddingTop?: boolean
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ children, id, className , headerPaddingTop},
     ref) => {
        const localRef = useRef(null);
        const actualRef = ref || localRef;

        return (
            <section id={id} ref={actualRef} className={clsx('z-section relative',
                {
                    'pt-[calc(var(--header-height--mobile)+0.25rem)] md:pt-[calc(var(--header-height--desktop)+4rem)]': headerPaddingTop,
                },
                className)}>
                {children}
            </section>
        );
    });

Section.displayName = 'Section';

export { Section };