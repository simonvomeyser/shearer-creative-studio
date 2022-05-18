import clsx from "clsx";
import {StaticImage} from "gatsby-plugin-image";
import React from 'react';
import {BraveText} from "../components/BraveText";
import {Container} from "../components/Container";
import {CopyText} from "../components/CopyText";
import {MetaTags} from "../components/MetaTags";
import {Quote} from "../components/Quote";
import {SalonHeading} from "../components/SalonHeading";
import {SalonImagesSlider} from "../components/SalonImagesSlider";
import {SarahHeading} from "../components/SarahHeading";
import {Section} from "../components/Section";
import {Watercolor} from "../components/Watercolor";
import {getRandomQuote} from "../data/quotes";

const Salon = () => {


    return (
        <>
            <MetaTags pageName="Salon"/>
            <Section headerPaddingTop>
                <Watercolor
                    color="green"
                    className={clsx(' md:block top-[-15%] right-[-600px] xl:right-[-450px] w-[900px] h-[1000px] opacity-20 md:opacity-30 ')}
                />
                <Container className="mb-8 md:mb-14" size="xl">
                    <BraveText>
                        <h1>
                            Der Salon, in dem <br/>
                            <span className="stroked-sage-500">nur du zählst</span>
                        </h1>
                    </BraveText>
                </Container>
                <Container>
                    <div className="grid gap-4 xs:gap-8 md:grid-cols-2">
                        <div>

                            <CopyText className="ml-auto md:max-w-[35ch]">
                                Im Herzen Krefelds - inmitten der lauten Stadt - öffnet das Creative Studio seine Türe.
                                <br/> <br/>
                                Ein Ort wo es um dich geht. Ein Safespace, wo du die sein Person darfst die du sein
                                möchtest. Hier kansnt du es dir gut gehen lassen und bekommst <span
                                className="underline decoration-primary">die perfekte Frisur, um dich mehr nach dir
                                selbst zu fühlen.</span>
                                <StaticImage src="../images/salon/1.png"
                                             width={580}
                                             height={750}
                                             objectFit="cover"
                                             alt="Bild des Salons 1, organisches Interieur mit vielen Pflanzen"
                                             className="xs:hidden my-8"
                                />
                                <span className="hidden xs:inline"><br/><br/></span>
                                Unser Anspruch ist es, dir zu zu hören und dich ehrlich und ausführlich zu beraten. Das
                                heißt aber auch dir transparent zu sagen was möglich ist, ohne dir das Unmögliche zu
                                versprechen - <i>Denn die Qualität deiner Haare ist uns immer wichtiger als der neueste
                                Trend.</i>
                            </CopyText>

                        </div>
                        <div className="hidden xs:block md:pt-40">
                            <div className="max-w-[500px] md:w-full">

                                <StaticImage src="../images/salon/1.png"
                                             width={580}
                                             height={750}
                                             objectFit="cover"
                                             alt="Bild des Salons 1, organisches Interieur mit vielen Pflanzen"
                                             className=""
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="py-8 xs:py-14 md:py-20">
                <SalonHeading
                    className=" h-[135%] w-auto max-w-full absolute left-0 -top-1/2 xs:top-0 text-white opacity-30"/>
                <Container size="xl">
                    <BraveText
                        size="small"
                        className="font-roma font-bold !leading-[1] uppercase sm:max-w-[80%]">
                        Das SHEARER creative studio steht für Perfektion, Empathie und Kreativität im Friseurhandwerk.
                    </BraveText>
                </Container>
            </Section>
            <Section className="">
                <SalonImagesSlider/>
            </Section>
            <Section className="py-8 xs:py-14 md:py-20">
                <Container>
                    <div className="grid gap-4 md:gap-8 md:grid-cols-2">
                        <div className="flex justify-end order-3 md:order-2">
                            <div className="max-w-[500px] md:w-full ">

                                <StaticImage src="../images/salon/2.png"
                                             width={580}
                                             height={750}
                                             objectFit="cover"
                                             alt="Bild des Salons 2, die Waschplätze"
                                             className=""
                                />
                            </div>
                        </div>
                        <div className="md:pt-40 order-1 md:order-2">

                            <CopyText className="mr-auto md:max-w-[35ch]">
                                Mit den besten Produkten auf dem Markt arbeiten wir am Puls der Zeit mit vollem Herzblut
                                und Leidenschaft, so Ökologisch und Nachhaltig wie uns möglich. <span
                                className="underline decoration-primary">Unsere Preise richten sich ausschließlich nach
                                dem zeitlichen Aufwand, Skill und Materialverbrauch und nicht nach deinem
                                Geschlecht.</span>

                                <br/><br/>
                                Schöne Haare verändert nicht die Welt, aber wir können damit das Leben ein kleines
                                bisschen besser machen.

                                <br/><br/>

                                Für ein bisschen breiteres Lächeln, ein wenig aufrechter Gang… <i>es ist ein kleiner
                                Unterschied, aber es ist ein Unterschied.</i>
                            </CopyText>

                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="py-8 xs:py-10 md:py-20">
                <Container>
                    <Quote quoteData={getRandomQuote()}/>
                </Container>
            </Section>
            <Section className="bg-sage-700 py-8 xs:py-10 md:py-20 md:mt-36">
                <Watercolor
                    color='white'
                    className='top-[-40%] left-[-400px] h-[900px] w-[700px] opacity-10 xl:opacity-20'
                />
                <SarahHeading
                    className="md:w-[75%] bottom-[90%] md:bottom-[80%] 2xl:bottom-[65%] left-[25%] absolute text-sage-500 pointer-events-none"/>
                <Container>
                    <div className="grid gap-4 md:gap-8 md:grid-cols-2 ">
                        <div className="hidden sm:flex justify-end order-3 md:order-2">
                            <div className="max-w-[500px] md:w-full ">

                                <StaticImage src="../images/salon/sarah-1.jpg"
                                             width={580}
                                             height={750}
                                             objectFit="cover"
                                             alt="Bild von Sarah bei der Arbeit"
                                />
                            </div>
                        </div>
                        <div className="md:pt-40 order-1 md:order-2 ">

                            <BraveText size="small" className="mb-6 md:mb-8">
                                <h2>Über Sarah</h2>
                            </BraveText>

                            <div className="space-y-8">

                            <CopyText className="mr-auto md:max-w-[35ch]">
                                Sarah Scherer (Sie/Ihre) - Das multifunktionale Chamäleon.
                                irgendwo zwischen Pippi Langstrumpf und Rapunzel, macht gerne Dinge die ihr schwer
                                fallen,
                                um an ihnen zu wachsen.
                            </CopyText>
                            <StaticImage src="../images/salon/sarah-1.jpg"
                                         width={580}
                                         height={750}
                                         objectFit="cover"
                                         alt="Bild des Salons 1, organisches Interieur mit vielen Pflanzen"
                                         className="sm:hidden block ml-auto max-w-[450px]"
                            />
                            <CopyText className="mr-auto md:max-w-[35ch]">
                                Dabei ist es egal, ob es sich um das Perfektionieren der neuesten Haartrends handelt
                                oder
                                der Einsatz dafür, unsere Welt ein kleines bisschen offener zu gestalten.
                            </CopyText>
                            </div>

                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="bg-sage-700 pb-8 xs:pb-10 md:pb-20">
                <Container>
                    <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-8 2xl:gap-12">
                        <div className="md:row-span-2 pt-[125%] md:pt-[140%] relative sm:max-w-[500px] md:max-w-none ">
                            <StaticImage src="../images/salon/sarah-grid-big.jpg"
                                         width={700}
                                         height={910}
                                         objectFit="cover"
                                         alt="Bild von Sarah bei der Arbeit"
                                         className="absolute inset-0 w-full h-full max"
                            />
                        </div>
                        <div className=" pt-[75%] md:pt-0 relative">
                            <StaticImage src="../images/salon/sarah-grid-right-1.jpg"
                                         width={700}
                                         height={396}
                                         objectFit="cover"
                                         alt="Sarah mit glücklicher Kundin"
                                         className="absolute inset-0 w-full h-full"
                            />
                        </div>
                        <div className=" pt-[75%] md:pt-0 relative">
                            <StaticImage src="../images/salon/sarah-grid-right-2.jpg"
                                         width={700}
                                         height={396}
                                         objectFit="cover"
                                         alt="Bild von Sarah bei der Arbeit"
                                         className="absolute inset-0 w-full h-full"
                            />
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="bg-sage-700 pb-8 xs:pb-10 md:pb-20">
                <Container fluid className="px-[1rem] xs:px-[2rem] md:px-0">
                    <div className="grid md:grid-cols-2 gap-10 2xl:gap-12">
                        <div className="flex justify-end">
                            <CopyText className=" max-w-[35ch]">
                                Seit nun fast 10 Jahren fühlt sich die German Hairdressing Award Gewinnerin nicht nur
                                hinter dem Friseurstuhl wohl, sondern begleitet erfolgreich Kampagnen und Kunden quer
                                durch Europa als <span className="bg-mango-500">etablierte Hair & Make-up Artistin</span>.
                                <br/><br/>
                                Auch wenn die Meister Stipendiatin eher zufällig in die Branche stolperte, liebt sie
                                ihren Beruf. Er ist eins der mächtigsten Tools einem Menschen zu mehr Selbstwert zu
                                verhelfen. <i>Dafür lebt sie: Menschen glücklich zu sehen.</i>

                            </CopyText>
                        </div>
                        <div>
                            <StaticImage src="../images/salon/sarah-2.jpg"
                                         width={837}
                                         height={617}
                                         objectFit="cover"
                                         alt="Sarah bei der Arbeit"
                                         className="w-full max-w-[837px]"
                            />
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
};
export default Salon

