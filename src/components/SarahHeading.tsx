import clsx from "clsx";
import React, {CSSProperties} from 'react';

export type SarahHeadingProps = {
    className?: string;
    style?: CSSProperties,
};

export const SarahHeading: React.FC<SarahHeadingProps> = ({className, style}) => {

    return (
        <svg className={clsx('', className)} style={style} viewBox="0 0 1266.527 456.767">
            <title>Sarah</title>
            <path
                d="M330.411-148.938q0,63.624-46.995,109.535T170.628,6.507q-65.793,0-112.788-45.549t-47-109.9q0-48.441,28.559-88.206a159.152,159.152,0,0,1,74.108-57.117l2.892,6.507a150.8,150.8,0,0,0-71.938,53.863,140.2,140.2,0,0,0-27.836,84.952q0,60.732,46.634,104.835T170.628,0q52.056,0,89.652-43.742t37.6-105.2q0-60.009-33.62-99.412t-86.4-45.188q-36.873-4.338-58.563-26.028t-20.244-53.5q1.446-29.643,21.69-50.61t49.887-20.967q29.643,0,50.61,20.967t20.967,50.61a68.516,68.516,0,0,1-8.676,33.258l-3.615-1.446a63.5,63.5,0,0,0,7.953-31.089q0-27.474-19.521-47.357t-46.995-19.882q-18.075,0-30.727,15.906T127.971-380.3q0,53.5,52.779,58.563,64.347,6.507,107,57.117T330.411-148.938ZM662.268,0H630.456V-50.61q-46.272,60.732-122.91,60.732-63.624,0-109.173-45.549T352.824-144.6q0-64.347,45.549-109.535t109.173-45.187q64.347,0,109.535,45.187T662.268-144.6ZM631.179-144.6q0-61.455-36.15-104.835t-87.483-43.38q-50.61,0-86.76,43.38T384.636-144.6q0,61.455,36.15,104.835t86.76,43.38q51.333,0,87.483-43.38T631.179-144.6ZM769.995-277.632q0,18.8-19.521,18.8t-19.521-18.8q0-5.784,4.338-11.568-14.46,5.784-18.075,23.859V0H686.127V-289.2h31.089v7.23q10.845-15.183,33.258-15.183Q769.995-297.153,769.995-277.632ZM1101.129,0h-31.812V-50.61q-46.272,60.732-122.91,60.732-63.624,0-109.173-45.549T791.685-144.6q0-64.347,45.549-109.535t109.173-45.187q64.347,0,109.535,45.187T1101.129-144.6ZM1070.04-144.6q0-61.455-36.15-104.835t-87.483-43.38q-50.61,0-86.76,43.38T823.5-144.6q0,61.455,36.15,104.835t86.76,43.38q51.333,0,87.483-43.38T1070.04-144.6ZM1275.372,0h-30.366V-234.975q0-23.859-9.76-40.488t-22.052-16.629q-21.69,0-37.6,13.737t-19.521,35.427V0h-31.089V-439.584h31.089v176.412q18.075-35.427,57.117-35.427,25.3,0,43.742,19.159t18.437,44.465Z"
                transform="translate(-9.845 445.645)" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>

    );
};

