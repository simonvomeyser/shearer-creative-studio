import {graphql, Link} from "gatsby";
import React from 'react';
import {DiaryEntryType} from "../../data/diaryEntries";
import {Container} from '../Container';
import {CopyText} from '../CopyText';
import {LazyImg} from '../LazyImg';
import {Section} from '../Section';
import {TitleImage} from "./components/TitleImage";

type DataPropsType = {
    data: {
        markdownRemark : {
            frontmatter: DiaryEntryType
            html: string
        }
    }
}

const DiaryEntryPage: React.FC<DataPropsType> = ({data}) => {

    const diaryEntry = data.markdownRemark.frontmatter;
    const folderUrl = `/diary/${diaryEntry.folder}/`;

    console.log(data)

    return (
        <Section headerPaddingTop={true}>
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
                <div className='grid md:grid-cols-2 gap-4'>
                    {diaryEntry.imageUrls.map((url) =>
                        <img src={folderUrl + url} alt='' loading="lazy" key={url}/>
                    )}
                </div>
            </Container>
        </Section>

    );

};

export const query = graphql`
  query($slug: String!, $titleImageUrl: String) {
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
    file(relativePath: { eq: $titleImageRelativePath }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default DiaryEntryPage;


