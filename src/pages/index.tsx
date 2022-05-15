import clsx from 'clsx';
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import React, {useEffect, useState} from "react";
import {ArrowLinkStyles} from "../components/ArrowLinkStyles";
import {BraveText} from "../components/BraveText";
import {ButtonStyles} from "../components/ButtonStyles";
import {Container} from "../components/Container";
import {CopyText} from "../components/CopyText";
import {FaqAccordion} from "../components/FaqAccordion";
import {FaqHeading} from "../components/FaqHeading";
import {SmoothScrollPageAnchor} from "../components/Header/components/SmoothScrollPageAnchor";
import {Arrow} from "../components/icons/Arrow";
import { DiarySection } from '../components/IndexPage/DiarySection';
import {SarahSection} from "../components/IndexPage/SarahSection";
import {LazyImg} from "../components/LazyImg";
import {PriceAccordion} from "../components/PriceAccordion/PriceAccordion";
import {PriceHeading} from "../components/PriceHeading";
import {Section} from "../components/Section";
import {Watercolor} from "../components/Watercolor";
import {useMountedTick} from "../hooks/useMountedTick";


const IndexPage = () => {
    let bgVideo: React.RefObject<HTMLVideoElement> = React.createRef();
    let [videoStarted, setVideoStarted] = useState(false);
    let mountedTick = useMountedTick();

    useEffect(() => {
        setTimeout(() => {
            if (bgVideo.current) {

                bgVideo.current?.play().then(() => {
                    setVideoStarted(true);
                }).catch(() => {});

            }

        }, 4000)

    }, [bgVideo])

    return (

        <div>

            < Section
                className="min-h-[95vh] md:min-h-screen flex flex-col justify-center ">

                {/* BG-Image */}
                <StaticImage
                    src="../../static/bg-index.jpg"
                    alt="Bild des Salons"
                    objectFit="cover"
                    layout="fullWidth"
                    className={clsx('absolute w-full h-full inset-0 transition duration-1000',
                    {
                            'opacity-30':
                                !videoStarted,
                            'opacity-0':
                            videoStarted,
                        }
                        )}
                />
                {/* BG-Video */}
                <video muted loop ref={bgVideo}
                       preload="none"
                       className={clsx('w-full h-full object-cover absolute inset-0 transition duration-1000', {
                           'opacity-0': !videoStarted,
                           'opacity-60 md:opacity-100': videoStarted,
                       })}
                >
                    <source src="/shearer-placeholder-bg-video.mp4" type="video/mp4"/>
                </video>

                {/* Gradients */}
                <div
                    className="absolute left-0 top-0 h-full w-[50vw] bg-gradient-to-l from-transparent to-s-black opacity-70 "/>
                <div
                    className="absolute left-0 bottom-0 h-[25%] w-full bg-gradient-to-b from-transparent to-s-black  "/>

                {/* Watercolor Drops */}
                <Watercolor
                    blendMode="color-dodge"
                    blendColor="black"
                    className={clsx('top-[-400px] left-[-200px] w-[555px] h-[725px] opacity-50 !duration-[3s]',
                        {
                            'scale-50 !opacity-0': !mountedTick,
                            '!opacity-10 md:!opacity-20': videoStarted
                        }
                    )}
                />
                <Watercolor
                    blendMode="color-dodge"
                    blendColor="black"
                    className={clsx('top-[45vh] right-[-300px] w-[600px] h-[800px] opacity-50 !duration-[3s]',
                        {
                            'scale-75 !opacity-0': !mountedTick,
                            '!opacity-10 md:!opacity-20': videoStarted
                        }
                    )}
                />
                {/* Scroll Down Arrow  */}
                <SmoothScrollPageAnchor
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 "
                    targetId="salon">

                    <span className={clsx('inline-block transition delay-[2s] duration-1000', {
                        'opacity-0': !videoStarted,
                        'animate-bounce ': videoStarted,
                    })}>

                        <Arrow direction="down"
                               className="h-6 w-6 md:h-8 md:w-8  transition duration-500  md:hover:text-primary  inline-block"/>
                    </span>
                </SmoothScrollPageAnchor>
                {/* Content */}
                <Container>

                    <div className={clsx('relative transition opacity-100 duration-1000 delay-1000', {})}>
                        <h1 className="text-5xl xs:text-7xl md:text-[120px] 2xl:text-[160px] font-semibold uppercase leading-none mb-6 font-roma">
                            <span className="text-white">Salon</span> <br/>
                            <span
                                className="stroked-sage-500 text-secondary transition-all"
                            >
                                neu gedacht
                            </span>

                        </h1>
                        <Link to="/termin">
                                <ButtonStyles>
                                    Termin buchen
                                </ButtonStyles>
                        </Link>
                    </div>
                </Container>

            </Section>
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
                                <LazyImg
                                    className="hover:scale-110 duration-700 cursor-pointer absolute inset-0 w-full h-full object-cover"
                                    src="/index-salon-01.jpg"
                                    alt=""/>

                            </div>
                        </div>
                        <div className=" relative flex-shrink-0 w-[75%] md:w-[45%] xl:w-[30%] overflow-hidden ">
                            <div className="pt-[75%] relative">
                                <LazyImg
                                    className="hover:scale-110 duration-700 cursor-pointer absolute inset-0 w-full h-full object-cover"
                                    src="/index-salon-02.jpg"
                                    alt=""/>

                            </div>
                        </div>
                        <div className=" relative flex-shrink-0 w-[75%] md:w-[45%] xl:w-[30%] overflow-hidden ">
                            <div className="pt-[75%] relative">
                                <LazyImg
                                    className="hover:scale-110 duration-700 cursor-pointer absolute inset-0 w-full h-full object-cover"
                                    src="/index-salon-03.jpg"
                                    alt=""/>

                            </div>
                        </div>
                        <div className=" relative flex-shrink-0 w-[75%] md:w-[45%] xl:w-[30%] overflow-hidden ">
                            <div className="pt-[75%] relative">
                                <LazyImg
                                    className="hover:scale-110 duration-700 cursor-pointer absolute inset-0 w-full h-full object-cover"
                                    src="/index-salon-04.jpg"
                                    alt=""/>

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
