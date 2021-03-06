import clsx from "clsx";
import React from 'react';

export type WhatsAppProps = {
    className?: string;
};

export const WhatsApp: React.FC<WhatsAppProps> = ({className}) => {

    return (
        <svg className={clsx('', className)} viewBox="0 0 41 41">
            <path data-name="Icon awesome-whatsapp"
                  d="M34.859,8.208A20.323,20.323,0,0,0,2.883,32.725L0,43.25l10.772-2.828a20.255,20.255,0,0,0,9.71,2.471h.009A20.512,20.512,0,0,0,41,22.576,20.4,20.4,0,0,0,34.859,8.208ZM20.491,39.47a16.857,16.857,0,0,1-8.6-2.352l-.613-.366L4.887,38.427l1.7-6.232-.4-.641a16.919,16.919,0,1,1,31.381-8.978A17.075,17.075,0,0,1,20.491,39.47Zm9.262-12.648c-.5-.256-3-1.483-3.468-1.647s-.805-.256-1.144.256-1.309,1.647-1.611,2-.595.384-1.1.128c-2.983-1.492-4.942-2.663-6.91-6.04-.522-.9.522-.833,1.492-2.773a.941.941,0,0,0-.046-.888c-.128-.256-1.144-2.755-1.565-3.77-.412-.988-.833-.851-1.144-.869-.293-.018-.631-.018-.97-.018a1.881,1.881,0,0,0-1.354.631,5.7,5.7,0,0,0-1.775,4.237,9.945,9.945,0,0,0,2.068,5.253c.256.339,3.578,5.464,8.676,7.669,3.221,1.391,4.484,1.51,6.1,1.272.979-.146,3-1.226,3.423-2.416a4.246,4.246,0,0,0,.293-2.416C30.594,27.2,30.255,27.069,29.752,26.822Z"
                  transform="translate(0 -2.25)" fill="currentColor"/>
        </svg>
    );
};
