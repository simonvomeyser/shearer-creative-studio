import clsx from "clsx";
import React from 'react';

export type CopyTextProps = {
  className?: string;
  children?: React.ReactNode;
};

export const CopyText: React.FC<CopyTextProps> = ({
  className,
  children
}) => {

  return (
	<div className={clsx('text-lg xs:text-xl xl:text-2xl max-w-[40ch] !leading-[1.4]', className)}>
        {children}
	</div>
  );
};
