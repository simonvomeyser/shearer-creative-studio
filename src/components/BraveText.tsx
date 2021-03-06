import clsx from "clsx";
import React from 'react';

export type BraveProps = {
  className?: string;
  children?: React.ReactNode;
  size?: 'default' | 'small'
};

export const BraveText: React.FC<BraveProps> = ({
  className,
  children,
 size = 'default'
}) => {

  return (
	<div className={clsx('font-roma font-bold !leading-[1] uppercase hyphens-auto md:hyphens-none',
        {
            'text-[30px] xs:text-[40px] md:text-[70px] xl:text-[90px] ' : size === 'default',
            'text-3xl xs:text-4xl md:text-5xl' : size === 'small',
        },
        className)}
    >
        {children}
	</div>
  );
};
