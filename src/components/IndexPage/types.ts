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
    childImageSharp: ChildrenImageSharpType
}

export type StaticDiaryQueryDataType = {
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