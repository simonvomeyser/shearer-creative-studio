import React from 'react';

export type SkipMainLinkProps = {};

export const SkipMainLink: React.FC<SkipMainLinkProps> = () => {

    return (
        <a className="skip-main" href="#main">
            Zum Inhalt springen
        </a>
    );
};
