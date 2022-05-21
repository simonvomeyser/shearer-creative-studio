import {Link} from "gatsby";
import React from 'react';
import {ArrowLinkStyles} from "../components/ArrowLinkStyles";
import {BraveText} from "../components/BraveText";
import {Container} from "../components/Container";
import {CopyText} from "../components/CopyText";
import {SmoothScrollPageAnchor} from "../components/Header/components/SmoothScrollPageAnchor";
import {MetaTags} from "../components/MetaTags";
import {PriceHeading} from "../components/PriceHeading";
import {Section} from "../components/Section";
import {priceCategories} from "../data/prices";

const Preise = () => {

    return (
        <>
            <MetaTags pageName="Preise"/>
            <Section headerPaddingTop headerMarginTop={false}>
                <Container>

                    <div className="mb-4">
                        <h1 className="sr-only">Unsere Preise</h1>
                        <PriceHeading className="w-full h-auto sm:w-[530px] md:w-[700px]   text-secondary"/>
                    </div>
                    <div className="mb-4 md:mb-8">

                        <SmoothScrollPageAnchor targetId="preise">
                            <ArrowLinkStyles className="sm:ml-[20%]" size="md" direction="down">
                                Direkt zur Liste
                            </ArrowLinkStyles>
                        </SmoothScrollPageAnchor>
                    </div>
                    <CopyText className="sm:ml-[20%] md:ml-[40%]">
                        Wir berechnen unsere Preise anders, als du es vielleicht gewohnt bist! Jede Dienstleistung wird
                        nach der benötigten Zeit und dem Materialaufwand eingeschätzt und ist somit für dich komplett
                        transparent! <br/><br/>

                        Wir möchten keine klassische Unterscheidung in der Bepreisung nach “Frau/Mann” und hoffen so
                        einen kleinen Beitrag für mehr Gleichberechtigung leisten zu können.
                    </CopyText>
                </Container>
            </Section>

            <Section id="preise" className="py-8 xs:py-14 md:py-20">
                <Container className="space-y-16 md:space-y-24" size="xl">
                    {priceCategories.map((category, id) => (
                        <div className="flex gap-4 md:gap-8 xl:gap-14 flex-wrap md:flex-nowrap" key={id} id={category.anchor}>
                            <div className="w-full md:w-auto md:flex-1 space-y-2 md:space-y-4">
                                <BraveText className="mb-4 sm:!text-[60px] xl:!text-[80px]">
                                    {category.title}
                                </BraveText>
                                {category.description ?
                                    <div className="md:text-lg"
                                         dangerouslySetInnerHTML={{__html: category.description}}/>
                                    : null}
                                <div>
                                    <Link to="/termin">
                                        <ArrowLinkStyles size="sm">
                                            Termin buchen
                                        </ArrowLinkStyles>
                                    </Link>
                                </div>

                            </div>
                            <div className="pl-0 xs:pl-4 sm:pl-[25%] pt-0 md:pl-0 md:pt-[80px] w-full md:w-auto md:flex-1">
                                {category.prices.map((price, priceId) => (
                                    <div key={`${id}.${priceId}`}>
                                        <div
                                            className="border-b border-dashed flex-wrap xs:flex-nowrap sm:text-lg md:text-xl py-3 mb-3 flex w-full justify-between items-end">

                                            <div className="w-full xs:w-auto"
                                                 dangerouslySetInnerHTML={{__html: price.title}}/>
                                            <div className="w-full xs:w-auto text-right opacity-75">{price.price}</div>
                                        </div>
                                        {category.description ? <div className="text-s-gray-400"
                                                                     dangerouslySetInnerHTML={{__html: price.description}}/> : null}
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </Container>
            </Section>
        </>
    )
};
export default Preise

