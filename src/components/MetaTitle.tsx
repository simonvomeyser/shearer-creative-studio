import React from 'react';
import {Helmet} from 'react-helmet'
import {globalData} from "../data/global";

export type MetaTitleProps = {
    pageName?: string;
};
export const metaData = {
    title: globalData.title,
    titleDefault: globalData.titleDefault,
}

export function createTitle(pageName?: string) {
    if (pageName) {
        return `${pageName} - ${metaData.title}`
    }
    return `${metaData.title} - ${metaData.titleDefault}`
}

export const MetaTitle: React.FC<MetaTitleProps> = ({pageName,}) => {
    return (
        <Helmet title={createTitle(pageName)}/>
    );
};
