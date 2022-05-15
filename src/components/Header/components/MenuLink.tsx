import clsx from "clsx";
import {Link} from "gatsby";
import React from 'react';

export type DesktopLinkProps = {
    className?: string;
    children?: React.ReactNode;
    href: string;
    linkClassName?: string,
};

export const MenuLink: React.FC<DesktopLinkProps> = ({className, children, href, linkClassName}) => {

    return (
        <li className={clsx('', className)}>
            <Link to={href}
                  activeStyle={{color: 'var(--primary)'}}
                  className={clsx('transition duration-500 hover:text-secondary inline-block', linkClassName)}
            >
                {children}
            </Link>
        </li>
    );
};
