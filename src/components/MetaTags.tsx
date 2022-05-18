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

export const MetaTags: React.FC<MetaTitleProps> = ({pageName, seo={}}) => {
    const title = createTitle(pageName);
    const image =  trimSlash(globalData.url) + '/' + (seo.image ?  trimSlash(seo.image) : trimSlash(metaData.defaultOgImage))
    const description = seo.description || metaData.defaultDescription;
    return (
        <Helmet title={title}  htmlAttributes={{lang: 'de'}}>
            <meta name="description" content={description} />

            {image && <meta property="image" content={image} />}
            {image && <meta property="og:image" content={image} />}

            {(seo.article ? true : null) && <meta property="og:type" content="article" />}

            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
};
