import clsx from "clsx";
import React from 'react';

export type ButtonStylesProps = {
  className?: string;
  children?: React.ReactNode;
};

export const ButtonStyles: React.FC<ButtonStylesProps> = ({
  className,
  children
}) => {

  return (
	<span className={clsx('bg-primary py-3 px-6 md:py-4 md:px-8 text-lg md:text-xl rounded-full font-roma inline-block  relative group cursor-pointer drop-shadow-sm hover:drop-shadow-md overflow-hidden safari-rounded-overflow-hidden-fix transition-all', className)}>
        <span className="inline-block absolute left-0 top-0 w-0 h-[100%] bg-mango-400  transition opacity-0 group-hover:opacity-100 group-hover:w-[100%] transition-all duration-500"/>
        <span className="inline-block relative">{children}</span>
	</span>
  );
};
