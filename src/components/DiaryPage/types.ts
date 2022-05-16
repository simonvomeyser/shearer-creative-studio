import {IGatsbyImageData} from "gatsby-plugin-image";
import {DiaryEntryType} from "../../data/diaryEntries";

export type ChildrenImageSharpType = {
    gatsbyImageData: IGatsbyImageData
    original: {
        height: number,
        width: number,
        src: string
    }
}

export type ImageType = {
    relativePath: string;
    base: string
    full: ChildrenImageSharpType
    half: ChildrenImageSharpType
}

export type DiaryPagePropsType = {
    data: {
        allMarkdownRemark: {
            edges: Array<{
                node: {
                    frontmatter: DiaryEntryType
                }
            }>
        }
        allFile: {
            nodes: Array<ImageType>
        }
    }
}