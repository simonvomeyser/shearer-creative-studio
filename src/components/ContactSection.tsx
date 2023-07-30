import clsx from "clsx";
import React from 'react';
import {BraveText} from "./BraveText";
import {Container} from "./Container";
import {House} from "./icons/House";
import {Mail} from "./icons/Mail";
import {WhatsApp} from "./icons/WhatsApp";
import {IconBubbleLink} from "./SalonPage/IconBubbleLink";
import {MapWithConsent} from "./MapWithConsent";
import {Section} from "./Section";
import {Watercolor} from "./Watercolor";
import {globalData} from "../data/global";
import {CopyText} from "./CopyText";
import {Heart} from "./icons/Heart";


export type ContactSectionProps = {
    className?: string;
};

export const ContactSection: React.FC<ContactSectionProps> = ({className}) => {

    return (
        <Section id="kontakt" className={clsx('lg:pb-20 pt-8 md:pt-12', className)}>
            <Watercolor
                color="green"
                className={clsx(' md:block top-[-50px] right-[-600px] xl:right-[-450px] w-[900px] h-[1000px] opacity-20 md:opacity-30 ')}
            />
            <Watercolor
                color="green"
                className={clsx(' lg:hidden top-[15%] left-[-600px] w-[900px] h-[1000px] opacity-20 md:opacity-30 ')}
            />
            <Container size="xl">
                <h2 className="sr-only">Kontakt</h2>
                <BraveText className="mb-4 xs:mb-8 md:mb-12 text-center lg:text-left">
                    Say Hello!
                </BraveText>
                <CopyText className="mb-8 xs:mb-14 md:mb-20 !max-w-[80ch]">
                    <strong>Wir bieten unsere Termine ausschließlich nach Vereinbarung an.</strong> <br/>
                    Am besten erreichst du uns per WhatsApp oder E-Mail, da wir während eines Termins oder
                    Auswärtseinsätzen nicht telefonisch erreichbar sind.
                </CopyText>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
                    <div className="space-y-14 lg:space-y-8 flex flex-col justify-center lg:pb-4">
                        <IconBubbleLink title="Online"
                                        superTitle="Bequem online buchen"
                                        href="/termin"
                                        icon={<Heart className="w-8 h-8"/>}
                        />
                        <IconBubbleLink title={globalData.phoneDisplay}
                                        superTitle="WhatsApp Business"
                                        href={globalData.phoneLinkWhatsAppHref}
                                        icon={<WhatsApp className="w-8 h-8"/>}
                        />
                        <IconBubbleLink title={globalData.email}
                                        superTitle="Mail"
                                        href={'mailto:' + globalData.email}
                                        icon={<Mail className="w-7 h-7"/>}
                        />
                        <IconBubbleLink title={
                            globalData.address.street + ' ' +
                            globalData.address.number + "<br/>" +
                            globalData.address.zip + '&nbsp;' +
                            globalData.address.city
                        }
                                        superTitle="Adresse"
                                        href={globalData.googleMapsLink}
                                        icon={<House className="w-9 h-9"/>}
                        />
                    </div>
                    <div>
                        <div className="mx-auto sm:max-w-[600px] sm:max-h-[600px] lg:max-w-[none] lg:max-h-[none] "
                             style={{boxShadow: '0 0 20px 3px rgba(255,255,255,0.1)'}}>
                            <MapWithConsent/>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
