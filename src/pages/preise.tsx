import clsx from "clsx";
import React from 'react';
import {ArrowLinkStyles} from "../components/ArrowLinkStyles";
import {BraveText} from "../components/BraveText";
import {Container} from "../components/Container";
import {CopyText} from "../components/CopyText";
import {SmoothScrollPageAnchor} from "../components/Header/components/SmoothScrollPageAnchor";
import {MetaTags} from "../components/MetaTags";
import {PriceCategory} from "../components/PreisePage/PriceCategory";
import {PriceHeading} from "../components/PriceHeading";
import {QuestionMark} from "../components/QuestionMark";
import {Section} from "../components/Section";
import {Watercolor} from "../components/Watercolor";
import {priceCategories, PriceCategoryType} from "../data/prices";
import Modal from "../components/Modal";

const Preise = () => {

    function sortByDetailPageSorting(a: PriceCategoryType, b: PriceCategoryType) {
        return b.detailPageSorting - a.detailPageSorting;
    }

    const sortedPrices = [...priceCategories].sort(sortByDetailPageSorting);

    return (
        <>
            <MetaTags pageName="Preise" seo={{description: "Wir wollen mit unseren Preisen einen inklusivieren Weg gehen als der veraltete “Herrenschnitt”/ “Damenschnitt” Blödsinn."}}/>
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
                        Wir berechnen unsere Preise etwas anders, als du es vielleicht gewohnt bist! <br/>
                        Jede Dienstleistung wird nach der benötigten Zeit und dem Materialaufwand individuell
                        eingeschätzt und ist somit für dich komplett transparent!
                        <br/><br/>
                        <b>Wir wollen einen inklusivieren Weg gehen als der veraltete “Herrenschnitt”/ “Damenschnitt”
                            Blödsinn.</b>
                        <br/><br/>
                        Wenn du dir nicht sicher bist, welcher Tarif zu dir passt, melde dich bei uns bevor du buchst,
                        damit wir dir die benötigte Zeit auch garantieren können

                    </CopyText>
                </Container>
            </Section>

            <Section id="preise" className="py-8 xs:py-14 md:py-20">
                <Container size="xl">
                    {sortedPrices.map((category, index) => (
                        <React.Fragment key={index}>
                            <PriceCategory category={category} isFirst={!index}/>
                        </React.Fragment>
                    ))}
                </Container>
            </Section>
            <Section id="preis-infos" className="py-8 xs:py-14 md:py-20">
                <Container>
                    <QuestionMark className="h-full w-auto absolute left-0 top-0 opacity-10 md:opacity-40"/>

                    <BraveText className="mb-8 md:mb-12 relative">
                        Gut zu wissen:
                    </BraveText>
                    <div className="rich-text max-w-screen-md text-lg pl-[6.25%] xs:pl-[12.5%]">


                        <p>
                            Alle Preise sind Richtwerte und können ggf. abweichen. Die genaue Einschätzung geben wir
                            dir vor Ort.
                        </p>


                        <p>

                            <b>
                                Für Neukunden mit gebuchter Farbdienstleistung über 100€ nehmen wir eine Anzahlung in
                                Höhe von 50€
                            </b>
                        </p>

                        <p>

                            Jede Terminverschiebung oder Stornierung bedeutet einen Mehraufwand in der Planung. Deswegen
                            bitten wir euch Termine nur zu reservieren, wenn ihr sie auch wahrnehmen könnt. Nur so
                            können wir eine faire Terminvergabe für alle Kunden gewährleisten.
                        </p>
                        <p>
                            Eine Absage oder Verschiebung der Buchung kann bis zu 48 Stunden / 2 Tage kostenfrei
                            telefonisch oder per E-mail/WhatsApp vor dem Termin vorgenommen werden.

                        </p>

                        <p>
                            Nehmt zur Kenntnis, dass für Termine, die innerhalb von 48 Stunden storniert oder verschoben
                            werden, die Anzahlung einbehalten wird. Im Falle eines Nichterscheinens oder eine
                            Terminstornierung oder Verschiebung innerhalb von 24 Stunden wird in der Höhe von 100% des
                            Auftragswertes in Rechnung gestellt.

                        </p>
                    </div>

                </Container>
            </Section>
            <Modal/>
        </>
    )
};
export default Preise

