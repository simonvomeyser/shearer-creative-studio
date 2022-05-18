import clsx from "clsx";
import React from 'react';

export type IconBubbleLinkProps = {
  className?: string;
  title: string;
  href: string;
  superTitle: string;
  icon: React.ReactNode;
};

export const IconBubbleLink: React.FC<IconBubbleLinkProps> = ({
  className,
    title,
    href,
    superTitle,
    icon
}) => {

  return (
	<a className={clsx('flex w-full group transition duration-500', className)} href={href} target="_blank">
		<span className="border border-white w-16 h-16  2xl:w-24 2xl:h-24 md:w-20 md:h-20  flex justify-center items-center mr-4 md:mr-6 2xl:mr-8 rounded-full transition duration-500 group-hover:border-primary flex-shrink-0">
            <span className="inline-block group-hover:scale-110 transition duration-500 group-hover:text-primary">
                {icon}
            </span>
        </span>
        <span className="flex-1 flex  flex-col justify-center text-lg md:text-xl transition duration-500 group-hover:-translate-x-2">
           <span className="text-primary ">
               {superTitle}
           </span>
            <span className="font-bold font-roma uppercase text-lg xs:text-xl sm:text-2xl md:text-3xl 2xl:text-4xl group-hover:text-primary transition duration-500">
                {title}
            </span>

        </span>
	</a>
  );
};
