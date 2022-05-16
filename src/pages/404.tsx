import * as React from "react"
import {Link} from "gatsby"
import {ArrowLinkStyles} from "../components/ArrowLinkStyles";
import {BraveText} from "../components/BraveText";
import {Container} from "../components/Container";
import {CopyText} from "../components/CopyText";
import {MetaTitle} from "../components/MetaTitle";
import {Section} from "../components/Section";

const NotFoundPage = () => {
    return (
        <>
            <MetaTitle pageName="404 - Seite nicht gefunden"/>
            <Section className=" justify-center items-center flex " headerPaddingTop>
                <Container className="text-center space-y-10 md:space-y-14 py-10 md:py-20">
                    <BraveText >
                        <h1>404</h1>
                    </BraveText>

                    <CopyText  className="mx-auto">
                       Leider existiert die von dir gesuchte Seite nicht (mehr). Ich hoffe, du hast beim nächsten Mal mehr Glück 🙁!
                    </CopyText>
                    <div>

                    <Link to="/">
                        <ArrowLinkStyles>Zur Startseite</ArrowLinkStyles>
                    </Link>
                    </div>

                </Container>
            </Section>
        </>
    )
}

export default NotFoundPage
