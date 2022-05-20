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
	<a className={clsx('flex items-center flex-col lg:items-start lg:flex-row lg:items-center w-full group transition duration-500', className)} href={href} target="_blank">
		<span className="border border-white w-16 h-16 xs:w-24 xs:h-24  flex justify-center items-center mb-4 lg:mb-0 lg:mr-6 2xl:mr-8 rounded-full transition duration-500 group-hover:border-primary flex-shrink-0 bg-s-black">
            <span className="inline-block group-hover:scale-110 transition duration-500 group-hover:text-primary">
                {icon}
            </span>
        </span>
        <span className="flex-1 text-center justify-center lg:text-left flex items-center flex-col lg:items-start justify-center text-lg md:text-xl transition duration-500 lg:group-hover:-translate-x-2">
           <span className="text-primary ">
               {superTitle}
           </span>
            <span className="font-bold font-roma uppercase text-lg xs:text-xl sm:text-2xl lg:text-[1.75rem] xl:text-4xl group-hover:text-primary transition duration-500">
                <span dangerouslySetInnerHTML={{__html: title}}/>
            </span>

        </span>
	</a>
  );
};
