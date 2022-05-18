import clsx from "clsx";
import React from 'react';

export type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
  fluid?: boolean;
  size?: 'default'|'xl';
};

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  fluid,
    size = 'default'
}) => {

  return (
	<div className={clsx(' mx-auto w-full z-container relative',
        {
            'px-[1rem] xs:px-[2rem] md:px-[3rem] ' : !fluid,
            'max-w-7xl ' : !fluid && size === 'default',
            'max-w-[1400px] ' : !fluid && size === 'xl',
        },
        className
    )}>
        {children}
	</div>
  );
};
