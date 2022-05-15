import clsx from "clsx";
import React from 'react';

export type TitleImageProps = {
  className?: string;
  children?: React.ReactNode;
};

export const TitleImage: React.FC<TitleImageProps> = ({
  className,
  children
}) => {

  return (
	<div className={clsx('', className)}>
		<div>TitleImage</div>
	</div>
  );
};
