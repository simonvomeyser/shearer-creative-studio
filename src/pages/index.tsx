import clsx from 'clsx';
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import React from "react";
import {ArrowLinkStyles} from "../components/ArrowLinkStyles";
import {BraveText} from "../components/BraveText";
import {Container} from "../components/Container";
import {CopyText} from "../components/CopyText";
import {FaqAccordion} from "../components/FaqAccordion";
import {FaqHeading} from "../components/FaqHeading";
import {DiarySection} from '../components/IndexPage/DiarySection';
import {HeroSection} from "../components/IndexPage/HeroSection";
import {SarahSection} from "../components/IndexPage/SarahSection";
import {PriceAccordion} from "../components/PriceAccordion/PriceAccordion";
import {PriceHeading} from "../components/PriceHeading";
import {Section} from "../components/Section";
import {Watercolor} from "../components/Watercolor";


const IndexPage = () => {


    return (

        <div>

            <HeroSection/>

            <Section className="pt-20 lg:pt-32 mb-16 md:mb-24" id="salon">
                <h2 className="sr-only">Salon</h2>
                <Watercolor
                    blendMode="color-dodge"
                    blendColor="black"
                    className={clsx('top-[5%] left-[-300px] w-[900px] h-[1000px] opacity-50 ')}
                />
                <Container className="mb-8 lg:mb-12">
                    <div className="sm:ml-[20%] md:ml-[50%] mb-10 lg:mb-16">
                        <CopyText>
                            Willkommen an dem Ort, an dem alle Willkommen sind, Ein Zuhause für die, die anders. Deine
                            Outkast Batcave, die du dir schon immer gewünscht hast. Hier wirst du angenommen und gesehen
                            als das was du bist. SHEARER creative studio.
                        </CopyText>
                    </div>
                    <BraveText className="mb-8 lg:mb-12">
                        Unser Mindset: <br/>
                        Grenzen- und <br/> Gender-Los
                    </BraveText>
                    <Link to="/salon">
                        <ArrowLinkStyles>Zum Salon</ArrowLinkStyles>
                    </Link>
                </Container>
                <Container fluid>
                    <div className="pl-8 2xl:pl-0 2xl:ml-[8.3333%] flex gap-4 overflow-x-auto  no-scrollbar">
                        <div className=" relative flex-shrink-0 w-[75%] md:w-[45%] xl:w-[30%] overflow-hidden ">
                            <div className="pt-[75%] relative">
                                <StaticImage
                                    className="hover:scale-110 duration-700 cursor-pointer absolute inset-0 w-full h-full"
                                    objectFit="cover"
                                    width={534}
                                    height={400}
                                    placeholder="blurred"
                                    src="../images/index-salon-01.jpg"
                                    alt="Innenansicht des Salons 1"/>

                            </div>
                        </div>
                        <div className=" relative flex-shrink-0 w-[75%] md:w-[45%] xl:w-[30%] overflow-hidden ">
                            <div className="pt-[75%] relative">
                                <StaticImage
                                    className="hover:scale-110 duration-700 cursor-pointer absolute inset-0 w-full h-full"
                                    objectFit="cover"
                                    width={534}
                                    height={400}
                                    placeholder="blurred"
                                    src="../images/index-salon-02.jpg"
                                    alt="Innenansicht des Salons 2"/>

                            </div>
                        </div>
                        <div className=" relative flex-shrink-0 w-[75%] md:w-[45%] xl:w-[30%] overflow-hidden ">
                            <div className="pt-[75%] relative">
                                <StaticImage
                                    className="hover:scale-110 duration-700 cursor-pointer absolute inset-0 w-full h-full"
                                    objectFit="cover"
                                    width={534}
                                    height={400}
                                    placeholder="blurred"
                                    src="../images/index-salon-03.jpg"
                                    alt="Innenansicht des Salons 3"/>
                            </div>
                        </div>
                        <div className=" relative flex-shrink-0 w-[75%] md:w-[45%] xl:w-[30%] overflow-hidden ">
                            <div className="pt-[75%] relative">
                                <StaticImage
                                    className="hover:scale-110 duration-700 cursor-pointer absolute inset-0 w-full h-full"
                                    objectFit="cover"
                                    width={534}
                                    height={400}
                                    placeholder="blurred"
                                    src="../images/index-salon-04.jpg"
                                    alt="Innenansicht des Salons 4"/>
                            </div>
                        </div>
                    </div>
                </Container>

            </Section>
            <Section id="preise" className="mb-36 md:mb-48">
                <h2 className="sr-only">Preise</h2>
                <Watercolor
                    blendMode="color-dodge"
                    className={clsx('top-[-15%] right-[-600px] w-[900px] h-[1000px] opacity-30 ')}
                />
                <Container className="fluid pt-[40%] md:pt-[28%] " fluid>
                    <PriceHeading
                        className="absolute left-8 2xl:left-[8.3333%] top-0 w-[90%] md:w-[80%] h-auto md:text-secondary"/>
                </Container>
                <Container>
                    <div className="max-w-[920px] ml-auto ">
                        <PriceAccordion/>
                    </div>
                </Container>

            </Section>

            <SarahSection/>

            <DiarySection/>

            <Section id="faq"
                     className="bg-sage-700 pb-[80px] pt-[80px] md:pt-[200px] mt-[100px] md:mt-[200px] skew-top">
                <h2 className="sr-only">Häufig gestellte fragen</h2>
                <Watercolor
                    blendMode="screen"
                    blendColor="white"
                    className="top-[-150px] right-[-600px] w-[900px] h-[1000px] opacity-10 lg:opacity-30"
                />
                <Container className="mt-[-250px] sm:mt-[-300px] md:mt-[-450px]">

                    <FaqHeading className="w-[80%] text-secondary"/>

                </Container>
                <Container>
                    <FaqAccordion/>
                </Container>

            </Section>


        </div>


    )
}

export default IndexPage
