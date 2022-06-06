import clsx from "clsx";
import {StaticImage} from "gatsby-plugin-image";
import React, {useEffect, useState} from 'react';
import {ButtonStyles} from "./ButtonStyles";
import {createGoogleMap} from "./SalonPage/googleMaps";

export type MapWithConsentProps = {};

export const MapWithConsent: React.FC<MapWithConsentProps> = ({}) => {

    const [consentGiven, setConsentGiven] = useState(false);
    const [showOverlays, setShowOverlays] = useState(true);

    useEffect(() => {
        if (consentGiven && showOverlays) {
            setTimeout(() => createGoogleMap('map'), 500)
            setTimeout(() =>setShowOverlays(false), 1000)
        }
    }, [consentGiven])

    return (
        <div className="pt-[150%] sm:pt-[100%] relative
            w-[calc(100%+(var(--container-padding)*2))] md:w-full
            mx-[calc(-1*(var(--container-padding)))] md:mx-0
            mt-6 xs:mt-12 lg:mt-0 mx-auto bg-s-black overflow-hidden">
            <div className="absolute inset-0 w-full h-full" id="map"/>
            {showOverlays ?
                <>
                    <StaticImage src="../images/map-placeholder.png"
                                 width={700}
                                 height={700}
                                 objectFit="cover"
                                 alt="Platzhalter der Karte"
                                 className={clsx('absolute inset-0 w-full h-full blur-sm transition ease-linear duration-1000', {
                                     'opacity-0 pointer-events-none scale-125': consentGiven,
                                     'opacity-50 ': !consentGiven,
                                 })}
                    />
                    <div
                        className={clsx('absolute inset-0 w-full h-full flex flex-col justify-center items-center transition duration-1000', {
                            'opacity-0 pointer-events-none': consentGiven,
                        })}>
                        <button type="button" onClick={() => setConsentGiven(true)}>
                            <ButtonStyles>
                                Karte anzeigen
                            </ButtonStyles>
                        </button>
                        <div className="text-center p-4">
                            Hier werden ggf. Daten an Google gesendet und Cookies gesetzt! <br/> Unsicher? Schau mal in
                            unserer <a href="/datenschutz#google-maps" target="_blank"
                                          className="underline">Datenschutzerklärung</a>
                        </div>
                    </div>
                </> : null}
        </div>
    );
};
