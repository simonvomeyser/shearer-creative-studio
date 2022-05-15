import clsx from "clsx";
import React from 'react';

export type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
  fluid?: boolean;
};

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
    fluid,
}) => {

  return (
	<div className={clsx(' mx-auto w-full z-container relative',
        {
            'max-w-7xl px-[1rem] xs:px-[2rem] md:px-[3rem] ' : !fluid,
        },
        className
    )}>
        {children}
	</div>
  );
};
