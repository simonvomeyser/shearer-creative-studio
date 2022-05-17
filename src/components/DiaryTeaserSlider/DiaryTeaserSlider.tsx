import clsx from "clsx";
import {graphql, StaticQuery} from "gatsby";
import React from 'react';
import {isOdd} from "../../lib/isOdd";
import {shuffleArray} from "../../lib/shuffleArray";
import {DiaryTeaser} from "./components/DiaryTeaser";
import {StaticDiaryQueryDataType} from "./types";

export type DiaryTeaserSliderProps = {
    className?: string;
    featuredOnly?: Boolean;
    shuffle?: Boolean;
    exceptId?: number
    maxElements?: number
};

export const DiaryTeaserSlider: React.FC<DiaryTeaserSliderProps> = ({className, featuredOnly, exceptId, maxElements, shuffle}) => {

    function getGatsbyImageData(imageBaseName: string, allFileData: StaticDiaryQueryDataType['allFile']) {
        const value = allFileData.nodes.find((file) => file.base === imageBaseName);

        if (!value) {
            throw new Error(imageBaseName + ' not found in any diary folder');
        }

        return value.childImageSharp.gatsbyImageData;
    }

    return (
        <div className={clsx('', className)}>
            <div className='pl-8 2xl:pl-0 2xl:ml-[8.3333%] flex gap-4 overflow-x-auto  no-scrollbar pr-8'>
                <StaticQuery query={query} render={(data: StaticDiaryQueryDataType) => {

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

                    if (shuffle) {
                        diaryEntries = shuffleArray(diaryEntries)
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

const query = graphql`
query IndexPageQuery {
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