import clsx from "clsx";
import React from 'react';
import {ArrowLinkStyles} from "../components/ArrowLinkStyles";
import {BraveText} from "../components/BraveText";
import {ContactSection} from "../components/ContactSection";
import {Container} from "../components/Container";
import {CopyText} from "../components/CopyText";
import {SmoothScrollPageAnchor} from "../components/Header/components/SmoothScrollPageAnchor";
import {MetaTags} from "../components/MetaTags";
import {Section} from "../components/Section";
import {Watercolor} from "../components/Watercolor";

const Termin = () => {

    return (
        <>
            <MetaTags pageName="Termin buchen"/>
            <Section headerPaddingTop className="pb-8 xs:pb-14 md:pb-20">
                <Watercolor
                    color="green"
                    className={clsx(' md:block top-[-15%] right-[-600px] xl:right-[-450px] w-[900px] h-[1000px] opacity-20 md:opacity-30 ')}
                />
                <Container>
                    <div className="mb-4">
                        <BraveText>
                            <h1>
                                <div>Termin buchen</div>
                                <div className="stroked-sage-500">Wie du willst</div>
                            </h1>
                        </BraveText>
                    </div>
                    <div className="mb-4 md:mb-8">

                        <SmoothScrollPageAnchor targetId="online-termin-buchen">
                            <ArrowLinkStyles className="sm:ml-[20%]" size="md" direction="down">
                                Direkt zur Buchung
                            </ArrowLinkStyles>
                        </SmoothScrollPageAnchor>
                    </div>
                    <CopyText className="sm:ml-[20%] md:ml-[40%]">
                        Falls du nicht gerne telefonierst (das können wir nachvollziehen), kannst du bei uns einen Termin bequem <SmoothScrollPageAnchor targetId="online-termin-buchen"
                                                              className="underline transition duration-500 hover:text-primary  decoration-primary">online
                        buchen</SmoothScrollPageAnchor> <br/><br/>
                        Wir bieten aber natürlich auch alle "klassischen" Arten an, einen Termin zu buchen, scrolle
                        dafür einfach <SmoothScrollPageAnchor targetId="kontakt"
                                                              className="underline transition duration-500 hover:text-primary  decoration-primary">etwas weiter nach
                        unten</SmoothScrollPageAnchor>
                    </CopyText>
                </Container>
            </Section>
            <Section  id="online-termin-buchen">
                <Watercolor
                    color="black"
                    className={clsx('top-[5%] left-[-300px] w-[900px] h-[1000px] opacity-30 md:opacity-40 ')}
                />
                <h2 className="sr-only">Online Termin buchen</h2>
                <Container fluid className="h-full">

                <div className="w-full sm:w-[488px] h-full mx-auto relative">
                    <iframe src="https://shearer-creative-studio.salonized.com/widget_bookings/new"
                             className="w-full h-[calc(100vh-2rem)] max-h-[700px] rounded-2xl overflow-hidden bg-white"/>
                </div>
                </Container>
            </Section>
            <ContactSection />
        </>
    )
};
export default Termin

