import clsx from 'clsx';
import {Link} from "gatsby";
import React from "react";
import {ArrowLinkStyles} from "../ArrowLinkStyles";
import {BraveText} from "../BraveText";
import {Container} from "../Container";
import {CopyText} from "../CopyText";
import {SalonImagesSlider} from "../SalonImagesSlider";
import {Section} from "../Section";
import {Watercolor} from "../Watercolor";


export const SalonSection: React.FC = () => {

  return (
            <Section className="pt-20 lg:pt-32 mb-16 md:mb-24" id="salon">
                <h2 className="sr-only">Salon</h2>
                <Watercolor
                    color="black"
                    className={clsx('top-[5%] left-[-300px] w-[900px] h-[1000px] opacity-30 md:opacity-40 ')}
                />
                <Container className="mb-8 lg:mb-12">
                    <div className="sm:ml-[20%] md:ml-[50%] mb-10 lg:mb-16">
                        <CopyText>
                            Willkommen an dem Ort, an dem alle Willkommen sind! Einem Zuhause für die, die anders sind.
                            Wir sind mehr als ein Friseur, hier geht es nur um dich, ohne dass es darum geht, wer du bist. <br/><br/>
                            <b>SHEARER Creative Studio</b>, dein Safe Space für Haare und Farbe mitten in Krefeld!
                        </CopyText>
                    </div>
                    <BraveText className="mb-8 lg:mb-12">
                        Unser Mindset: <br/>
                        Grenzen- und <br/> Gender-Los
                    </BraveText>
                    <Link to="/salon">
                        <ArrowLinkStyles>Erfahre mehr</ArrowLinkStyles>
                    </Link>
                </Container>

                <SalonImagesSlider/>

            </Section>
  );
};
