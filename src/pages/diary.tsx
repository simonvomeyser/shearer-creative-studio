import {graphql} from "gatsby";
import React from 'react';

import {BraveText} from '../components/BraveText';
import {Container} from '../components/Container';
import {DiaryCard, DiaryCardSize} from '../components/DiaryPage/DiaryCard';
import {DiaryPagePropsType, ImageType} from "../components/DiaryPage/types";
import {MetaTags} from "../components/MetaTags";
import {Quote} from '../components/Quote';
import {Section} from '../components/Section';
import {DiaryEntryType} from '../data/diaryEntries';
import {getRandomQuote} from '../data/quotes';


const Diary = (props: DiaryPagePropsType) => {
    const diaryEntryEdges = props.data.allMarkdownRemark.edges

    function getImageMetaData(imageBaseName: String): ImageType {
        const value = props.data.allFile.nodes.find((file) => file.base === imageBaseName);

        if (!value) {
            throw new Error(imageBaseName + ' not found in any diary folder');
        }

        return value;
    }

    function getGatsbyImageData(imageBaseName: String, size: DiaryCardSize) {
        const chosenSize = size === 'full' ? 'full' : 'half';
        return getImageMetaData(imageBaseName)[chosenSize].gatsbyImageData;
    }

    function renderDiaryEntry(diaryEntry: DiaryEntryType, index: number) {

        const normalizedIndex = index + 1;
        const prependQuote = normalizedIndex === 6;
        let width: DiaryCardSize = 'small';

        if (normalizedIndex % 3 === 0) {
            width = 'full';
        } else if (normalizedIndex % 2 === 0) {
            width = 'big';
        }

        const imageUrl = width === 'full' ? diaryEntry.titleImageUrl : diaryEntry.listImageUrl

        const gatsbyImageData = getGatsbyImageData(imageUrl, width)
        return (
            <>
                {prependQuote ? <div className='md:col-span-2 py-10 md:py-0'>
                    <Quote quoteData={getRandomQuote()} />
                </div> : null}
                <DiaryCard size={width} diaryEntry={diaryEntry} gatsbyImageData={gatsbyImageData} />
            </>
        );

    }


    return (
        <>
            <MetaTags pageName="Diary" seo={{description: 'Egal ob Awards oder tolle Kundengeschichte, im unserem Dairy bist du absolut richtig.'}}/>
            <Section headerPaddingTop>
                <Container>

                    <BraveText className='text-center mb-8 md:mb-12'>

                        <h1>
                            Geschichten, Highlights und der Alltag. <span className='stroked-sage-500 block xl:inline'>Dear
                            Diary...</span>
                        </h1>
                    </BraveText>

                </Container>
            </Section>
            <Section className='py-10 md:py-16'>
                <Container>

                    <div className='grid md:grid-cols-2 gap-12 md:gap-y-20'>
                        {diaryEntryEdges.map((diaryEntryEdge, index) => (
                            <React.Fragment key={index}>
                                {renderDiaryEntry(diaryEntryEdge.node.frontmatter, index)}
                            </React.Fragment>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    )
};

export default Diary

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___id, order: DESC}) {
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
        full: childImageSharp {
            gatsbyImageData(
                placeholder: BLURRED,
                width: 1400
            )
        }
        half: childImageSharp {
            original {
              width
              height
              src
            }
            gatsbyImageData(
                placeholder: BLURRED
                width: 768
            )
        }
      }
    }
}
`