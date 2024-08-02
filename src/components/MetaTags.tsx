import React from 'react';
import {Helmet} from 'react-helmet'
import {globalData} from "../data/global";
import {trimSlash} from "../lib/trimSlash";

export type SeoDataType = {
    description?: string;
    article?: boolean;
    image?: string;
}
export type MetaTitleProps = {
    pageName?: string;
    seo?: SeoDataType;
    hideFromSearchEngines?: boolean;
};

export const metaData = {
    title: globalData.title,
    titleDefaultExtension: globalData.titleDefaultExtension,
    defaultOgImage: globalData.defaultOgImage,
    defaultDescription: globalData.defaultDescription,
}

export function createTitle(pageName?: string) {
    if (pageName) {
        return `${pageName} - ${metaData.title}`
    }
    return `${metaData.title} - ${metaData.titleDefaultExtension}`
}

export const MetaTags: React.FC<MetaTitleProps> = (
    {pageName, seo = {}, hideFromSearchEngines}) => {
    const title = createTitle(pageName);
    const image = trimSlash(globalData.url) + '/' + (seo.image ? trimSlash(seo.image) : trimSlash(metaData.defaultOgImage))
    const description = seo.description ? seo.description : metaData.defaultDescription;
    return (
        <Helmet title={title} htmlAttributes={{lang: 'de'}}>
            <meta name="og:title" content={title}/>
            <meta name="description" content={description}/>
            <meta name="og:description" content={description}/>
            <meta property="og:site_name" content="SHEARER Creative Studio"/>

            {image && <meta property="image" itemProp="image" content={image}/>}
            {image && <meta property="og:image" itemProp="image" content={image}/>}

            {(seo.article ? <meta property="og:type" content="article"/> :
                <meta property="og:type" content="website"/>)}

            <link rel="canonical" href={trimSlash(window.location.href)}/>

            {(hideFromSearchEngines ? <meta name="robots" content="noindex"/> : null)}

            <meta name="twitter:card" content="summary_large_image"/>
        </Helmet>
    );
};
