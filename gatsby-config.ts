import type {GatsbyConfig} from "gatsby";
import path from "path";

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Shearer Creative Studio`,
        siteUrl: `https://shearer.studio`
    },
    plugins: [{
        resolve: 'gatsby-plugin-manifest',
        options: {
            "icon": "src/images/icon.png"
        }
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        // @ts-ignore
        __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "pages",
            "path": "./src/pages/"
        },
        // @ts-ignore
        __key: "pages"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "diaryEntries",
            "path": "./src/data/diaryEntries"
        },
        // @ts-ignore
        __key: "pages"
    }, {
        resolve: `gatsby-plugin-layout`,
        options: {
            component: path.resolve(`src/components/Layout.tsx`),
        },
    },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: process.env.TYPEKIT_ID,
                },
            },
        },
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                defaults: {
                    placeholder: 'blurred'
                },
            },
        },

        "gatsby-transformer-remark",
        "gatsby-transformer-sharp",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        'gatsby-plugin-postcss',
    ]
};

export default config;
