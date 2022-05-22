import clsx from "clsx";
import {Link} from "gatsby";
import React from 'react';
import {ArrowLinkStyles} from "../components/ArrowLinkStyles";
import {BraveText} from "../components/BraveText";
import {Container} from "../components/Container";
import {CopyText} from "../components/CopyText";
import {FaqHeading} from "../components/FaqHeading";
import {SmoothScrollPageAnchor} from "../components/Header/components/SmoothScrollPageAnchor";
import {MetaTags} from "../components/MetaTags";
import {Section} from "../components/Section";
import {Watercolor} from "../components/Watercolor";
import {faqs} from "../data/faqs";
import {slugify} from "../lib/slugify";

const Preise = () => {

    return (
        <>
            <MetaTags pageName="Preise"/>
            <Section headerPaddingTop headerMarginTop={false}>
                <Watercolor
                    color="green"
                    className={clsx(' md:block top-[-15%] right-[-600px] xl:right-[-450px] w-[900px] h-[1000px] opacity-20 md:opacity-30 ')}
                />
                <Container>
                    <div className="mb-4">
                        <h1 className="sr-only">Fragen & Antworten</h1>
                        <FaqHeading className="w-full h-auto sm:w-[530px] md:w-[700px]   text-secondary"/>
                    </div>
                    <div className="mb-4 md:mb-8">

                        <SmoothScrollPageAnchor targetId="fragen">
                            <ArrowLinkStyles className="sm:ml-[20%]" size="md" direction="down">
                                Direkt zu den Fragen
                            </ArrowLinkStyles>
                        </SmoothScrollPageAnchor>
                    </div>
                    <CopyText className="sm:ml-[20%] md:ml-[40%]">
                        Wir versuchen, unser Salon- und Preiskonzept so transparent wie möglich für dich zu gestalten.  <br/> <br/>
                        Falls du trotzdem Fragen hast kannst du uns immer <Link to="/salon#kontakt" className="underline decoration-primary">kontaktieren</Link>, schau aber vielleicht vorher hier nach, ob du nicht schon eine Antwort findest
                    </CopyText>
                </Container>
            </Section>

            <Section id="fragen" className="py-8 xs:py-14 md:py-20">
                <Container className="space-y-16 md:space-y-24" size="xl">
                    {faqs.map((faq, index) => (
                        <div key={index} className="space-y-10 md:space-y-16" id={slugify(faq.question)}>
                            <BraveText>
                                <div  className=" mb-2">
                                    <a className="inline-block w-20 h-[2px] md:h-2 bg-primary" href={`/faq#${slugify(faq.question)}`}/>
                                </div>
                                <h2>
                                    {faq.question}
                                </h2>
                            </BraveText>
                            <CopyText className="sm:ml-[20%] md:ml-[40%]">
                                <div dangerouslySetInnerHTML={{__html: faq.answer}}/>
                            </CopyText>
                        </div>
                    ))}
                </Container>
            </Section>
        </>
    )
};
export default Preise

