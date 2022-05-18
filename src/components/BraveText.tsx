import clsx from "clsx";
import React from 'react';

export type BraveProps = {
  className?: string;
  children?: React.ReactNode;
};

export const BraveText: React.FC<BraveProps> = ({
  className,
  children
}) => {

  return (
	<div className={clsx('font-roma font-bold text-[36px] xs:text-[44px] md:text-[80px] xl:text-[100px] !leading-[1] uppercase hyphens-auto', className)}>
        {children}
	</div>
  );
};
