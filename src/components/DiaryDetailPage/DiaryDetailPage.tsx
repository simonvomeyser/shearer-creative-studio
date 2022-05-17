import clsx from "clsx";
import {graphql, Link} from "gatsby";
import {GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image";
import React from 'react';
import {DiaryEntryType} from "../../data/diaryEntries";
import {getRandomQuote} from "../../data/quotes";
import {Container} from '../Container';
import {CopyText} from '../CopyText';
import {DiaryTeaserSlider} from "../DiaryTeaserSlider/DiaryTeaserSlider";
import {Quote} from "../Quote";
import {Section} from '../Section';

type ChildrenImageSharpType = {
    gatsbyImageData: IGatsbyImageData
    original: {
        height: number,
        width: number,
        src: string
    }
}

type ImageType = {
    relativePath: string;
    base: string
    full: ChildrenImageSharpType
    half: ChildrenImageSharpType
}

type DataPropsType = {
    data: {
        markdownRemark: {
            frontmatter: DiaryEntryType
            html: string
        }
        allFile: {
            nodes: Array<ImageType>
        }
    }
}

const DiaryEntryPage: React.FC<DataPropsType> = ({data}) => {

    const diaryEntry = data.markdownRemark.frontmatter;

    function getImageMetaData(imageBaseName: String): ImageType {
        const value = data.allFile.nodes.find((file) => file.base === imageBaseName);

        if (!value) {
            throw new Error(imageBaseName + ' not found in folder ' + diaryEntry.folder);
        }

        return value;
    }

    function getGatsbyImageData(imageBaseName: String, size: 'full' | 'half') {
        return getImageMetaData(imageBaseName)[size].gatsbyImageData;
    }


    return (
        <>
            <Section headerPaddingTop={true}>
                <Container fluid className='max-w-[1400px] mb-8'>
                    <div className='relative pt-[50%] md:pt-[40%] 2xl:pt-[35%]'>
                        <GatsbyImage alt="Titelbild"
                                     image={getGatsbyImageData(diaryEntry.titleImageUrl, 'full')}
                                     className="object-cover object-top absolute inset-0 w-full h-full"
                                     objectFit="cover"
                                     objectPosition="top"
                        />
                    </div>
                </Container>
                <Container fluid className='max-w-[1400px] mb-8'>
                </Container>
                <Container className='!max-w-screen-md '>
                    <div className="mb-1">
                        <Link to="/diary" className="hover:text-mango-400 transition">
                            &lt; Zurück
                        </Link>
                    </div>
                    <h1 className='text-2xl xs:text-4xl md:text-6xl font-bold uppercase mb-4'
                        dangerouslySetInnerHTML={{__html: diaryEntry.title}}/>
                    <div className='text-lg text-s-gray-500'> {diaryEntry.category} | by Sarah Scherer</div>
                    <hr className='border-s-gray-500 mt-20 mb-4'/>
                </Container>
                <Container className='!max-w-screen-md mb-16'>
                    <CopyText className='!max-w-none'>
                        <article className="rich-text" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
                    </CopyText>
                </Container>
                <Container className='!max-w-screen-lg '>
                    <div className='flex -m-4 flex-wrap justify-center'>
                        {diaryEntry.imageUrls.map((url, index) => {

                            const metaData = getImageMetaData(url);
                            const isLandscape = metaData.full.original.width > metaData.full.original.height;

                            return (
                                <div className={clsx('p-4', {
                                    'w-full md:w-[90%] ': isLandscape,
                                    'w-full sm:w-1/2 p-4': !isLandscape,
                                })} key={index}>
                                    <GatsbyImage alt="Titelbild"
                                                 image={getGatsbyImageData(url, 'full')}
                                                 className="w-full"
                                                 objectFit="cover"
                                                 objectPosition="top"
                                    />
                                </div>
                            )
                        })}

                    </div>
                </Container>
            </Section>
            <Section className="p-16 md:py-20">
                <Container>
                    <Quote quoteData={getRandomQuote()}/>
                </Container>
            </Section>
            <Section className="  py-20 md:py-28 bg-sage-700">
                <Container>
                    <h2 className="font-roma mb-12 md:mb-16 font-bold text-[36px] xs:text-[44px] md:text-[56px] xl:text-[68px]  uppercase">
                        Mehr aus dem Diary
                    </h2>
                </Container>
                <Container fluid>
                    <DiaryTeaserSlider exceptId={diaryEntry.id} maxElements={4} shuffle/>
                </Container>
            </Section>
        </>


    );

};

export const query = graphql`
  query($slug: String!, $diaryFolderGlob: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id
        slug
        folder
        title
        titleImageUrl
        date
        category
        listImageUrl
        imageUrls
      }
    }
    allFile(
      filter: {relativePath: {glob: $diaryFolderGlob}, ext: {regex: "/^.(jpg|png|jpeg)/i"}}
    ) {
      nodes {
        relativePath
        base,
        full: childImageSharp {
            original {
              width
              height
              src
            }
            gatsbyImageData(
                placeholder: BLURRED,
                width: 1500
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

export default DiaryEntryPage;


