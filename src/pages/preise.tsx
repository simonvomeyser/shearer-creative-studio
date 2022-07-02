import clsx from "clsx";
import React from 'react';
import {ArrowLinkStyles} from "../components/ArrowLinkStyles";
import {Container} from "../components/Container";
import {CopyText} from "../components/CopyText";
import {SmoothScrollPageAnchor} from "../components/Header/components/SmoothScrollPageAnchor";
import {MetaTags} from "../components/MetaTags";
import {PriceCategory} from "../components/PreisePage/PriceCategory";
import {PriceHeading} from "../components/PriceHeading";
import {Section} from "../components/Section";
import {Watercolor} from "../components/Watercolor";
import {priceCategories, PriceCategoryType} from "../data/prices";

const Preise = () => {

    function sortByDetailPageSorting(a: PriceCategoryType, b: PriceCategoryType) {
        return b.detailPageSorting - a.detailPageSorting;
    }
    const sortedPrices = [...priceCategories].sort(sortByDetailPageSorting);

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
                <Container  size="xl">
                    {sortedPrices.map((category, index) => (
                        <React.Fragment key={index}>
                            <PriceCategory category={category} isFirst={!index}/>
                        </React.Fragment>
                    ))}
                </Container>
            </Section>
        </>
    )
};
export default Preise

