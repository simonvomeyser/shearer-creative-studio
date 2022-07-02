import clsx from "clsx";
import {graphql, StaticQuery} from "gatsby";
import React from 'react';
import {isOdd} from "../../lib/isOdd";
import {DiaryTeaser} from "./components/DiaryTeaser";
import {StaticDiaryQueryDataType} from "./types";

export type DiaryTeaserSliderProps = {
    className?: string;
    featuredOnly?: Boolean;
    exceptId?: number
    maxElements?: number
};

export const DiaryTeaserSlider: React.FC<DiaryTeaserSliderProps> = ({className, featuredOnly, exceptId, maxElements}) => {

    function getGatsbyImageData(imageBaseName: string, allFileData: StaticDiaryQueryDataType['allFile']) {
        const value = allFileData.nodes.find((file) => file.base === imageBaseName);

        if (!value) {
            throw new Error(imageBaseName + ' not found in any diary folder');
        }

        return value.childImageSharp.gatsbyImageData;
    }

    return (
        <div className={clsx('', className)}>
            <div className='pl-8 lg:pl-0 lg:ml-[8.3333%] flex gap-4 md:gap-6 overflow-x-auto  no-scrollbar pr-8'>
                <StaticQuery query={diaryTeaserSliderQuery} render={(data: StaticDiaryQueryDataType) => {

                    let diaryEntries = data.allMarkdownRemark.edges.map((edge) => edge.node.frontmatter)

                    if (featuredOnly) {
                        diaryEntries = diaryEntries
                            .filter((entry) => !!entry.featured)
                            .sort((a, b) => {
                                if (!a.featured || !b.featured) {
                                    return 0;
                                }
                                if (b.featured > a.featured) {
                                    return 1;
                                }
                                return -1;
                            })
                        ;
                    }

                    if (exceptId) {
                        diaryEntries = diaryEntries.filter((entry) => entry.id !== exceptId);
                    }
                    if (maxElements) {
                        diaryEntries = diaryEntries.slice(0, maxElements)
                    }

                    return (
                        diaryEntries.map((diaryEntry, index) => (
                            <DiaryTeaser
                                gatsbyImage={getGatsbyImageData(
                                    diaryEntry.listImageUrl,
                                    data.allFile
                                )}
                                diaryEntry={diaryEntry}
                                key={diaryEntry.id}
                                aspect={isOdd(index) ? 'square' : 'portrait'}/>
                        ))
                    )
                }}/>

            </div>
        </div>
    );
};

const diaryTeaserSliderQuery = graphql`
query DiaryTeaserSliderQuery {
  allMarkdownRemark(
    sort: {fields: frontmatter___id, order: DESC}
  ) {
    edges {
      node {
        frontmatter {
          excerpt
          featured
          id
          listImageUrl
          titleImageUrl
          title
          slug
        }
      }
    }
  }
  allFile(
      filter: {relativePath: {glob: "diary/**"}, ext: {regex: "/^.(jpg|png|jpeg)/i"}}
    ) {
      nodes {
        relativePath
        base,
        childImageSharp {
            gatsbyImageData(
                placeholder: BLURRED,
                width: 550
            )
        }
      }
    }
}
`