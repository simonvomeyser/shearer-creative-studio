import {graphql, Link, StaticQuery} from "gatsby";
import React from 'react';
import {isOdd} from '../../lib/isOdd';
import {ArrowLinkStyles} from '../ArrowLinkStyles';
import {BraveText} from '../BraveText';
import {Container} from '../Container';
import {CopyText} from '../CopyText';
import {Section} from '../Section';
import {DiaryTeaser} from './components/DiaryTeaser';
import {StaticDiaryQueryDataType} from "./types";


export const DiarySection: React.FC = () => {

    function getGatsbyImageData(imageBaseName: string, allFileData: StaticDiaryQueryDataType['allFile']) {
        const value = allFileData.nodes.find((file) => file.base === imageBaseName);

        if (!value) {
            throw new Error(imageBaseName + ' not found in any diary folder');
        }

        return value.childImageSharp.gatsbyImageData;
    }

    return (
        <Section id='diary' className=' py-[160px]'>
            <Container className='mb-16'>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div className='md:col-span-2'>
                        <BraveText className='mb-6'>
                            Highlights <br/>
                            und mehr
                        </BraveText>
                        <Link to='/diary'>
                            <ArrowLinkStyles>
                                Zum Diary
                            </ArrowLinkStyles>
                        </Link>


                    </div>
                    <CopyText className='mt-6 md:mt-0 xs:ml-auto md:ml-0 max-w-screen-xs'>
                        Egal ob Awards, tolle Kundengeschichten, Arbeit für den Zentralverband oder Hilfe für deinen
                        Haarnotfall, im meinem Dairy
                        bist du absolut richtig.
                    </CopyText>
                </div>
            </Container>


            <Container fluid>
                <div className='pl-8 2xl:pl-0 2xl:ml-[8.3333%] flex gap-4 overflow-x-auto  no-scrollbar pr-8'>
                    <StaticQuery query={query} render={(data: StaticDiaryQueryDataType) => {
                        return (
                            data.allMarkdownRemark.edges.map((diaryEntryNode, index) => (
                                <DiaryTeaser
                                    gatsbyImage={getGatsbyImageData(
                                        diaryEntryNode.node.frontmatter.listImageUrl,
                                        data.allFile
                                    )}
                                    diaryEntry={diaryEntryNode.node.frontmatter}
                                    key={index}
                                    aspect={isOdd(index) ? 'square' : 'portrait'}/>
                            ))
                        )
                    }}/>

                </div>
            </Container>
        </Section>
    );
};

const query = graphql`
query IndexPageQuery {
  allMarkdownRemark(
    sort: {fields: frontmatter___id, order: DESC}
    filter: {frontmatter: {featured: {ne: null}}}
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
                width: 600
            )
        }
      }
    }
}
`