import clsx from 'clsx';
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import React, {useEffect, useState} from "react";
import useInView from "../../hooks/useInView";
import {ButtonStyles} from "../ButtonStyles";
import {Container} from "../Container";
import {SmoothScrollPageAnchor} from "../Header/components/SmoothScrollPageAnchor";
import {Arrow} from "../icons/Arrow";
import {Section} from "../Section";
import {Watercolor} from "../Watercolor";
import {useMountedTick} from "../../hooks/useMountedTick";

export const HeroSection: React.FC = () => {
    let bgVideo: React.RefObject<HTMLVideoElement> = React.createRef();
    let [videoStarted, setVideoStarted] = useState(false);
    let mountedTick = useMountedTick();

    const [ref, isVisible] = useInView()

    useEffect(() => {
        setTimeout(() => {
            if (bgVideo.current) {

                bgVideo.current?.play().then(() => {
                    setVideoStarted(true);
                }).catch(() => {
                });
            }

        }, 5000)

    }, [bgVideo])

    useEffect(() => {
        if(!videoStarted) {
            return;
        }

        if(isVisible) {
            bgVideo.current?.play();
        } else {
            bgVideo.current?.pause();
        }

    }, [isVisible])


    return (
        < Section
            className="min-h-[var(--100vh)] md:min-h-screen flex flex-col justify-center " ref={ref}>

            {/* BG-Image */}
            <StaticImage
                src="../../images/bg-index-kamil-01.jpg"
                alt="Bild des Salons"
                objectFit="cover"
                layout="fullWidth"
                loading="eager"
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
                color="black"
                className={clsx('top-[-400px] left-[-200px] w-[555px] h-[725px] opacity-50 !duration-[3s]',
                    {
                        'scale-50 !opacity-0': !mountedTick,
                        '!opacity-10 md:!opacity-20': videoStarted
                    }
                )}
            />
            <Watercolor
                color="black"
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

                <div className={'relative '}>
                    <h1 className="text-4xl xs:text-6xl md:text-[120px] 2xl:text-[160px] font-semibold uppercase leading-none mb-6 font-roma">
                        <span className={clsx('text-white delay-500 transition duration-[2s] inline-block', {
                            'opacity-0 translate-y-10': !mountedTick
                        })}>
                            Salon
                        </span>
                        <br/>
                        <span
                            className={clsx('stroked-sage-500 text-secondary delay-500 transition duration-[2s] inline-block', {
                                'opacity-0 translate-y-10': !mountedTick
                            })}
                        >
                            neu gedacht
                        </span>
                    </h1>
                    <Link to="/termin">
                        <ButtonStyles className={clsx('delay-[2s] transition duration-[1s]', {
                            'opacity-0': !mountedTick,
                        })}>
                            Termin buchen
                        </ButtonStyles>
                    </Link>
                </div>
            </Container>

        </Section>
    );
};
