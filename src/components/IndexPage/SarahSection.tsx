import clsx from 'clsx';
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import React, {useRef, useState} from 'react';
import {usePercentageInView} from '../../hooks/usePercentageInView';
import {ArrowLinkStyles} from '../ArrowLinkStyles';
import {Container} from '../Container';
import {CopyText} from '../CopyText';
import {SarahHeading} from '../SarahHeading';
import {Section} from '../Section';
import {Watercolor} from '../Watercolor';

export const SarahSection: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const {percentageInView, viewportPosition} = usePercentageInView(sectionRef);

    return (
        <Section
            id='sarah'
            className='bg-sage-700 pb-[80px] pt-[80px] md:pt-[200px] '
            ref={sectionRef}
        >
            <h2 className='sr-only'>Über Sarah</h2>
            <Watercolor
                color='white'
                className='top-[-20%] left-[-400px] h-[900px] w-[700px] opacity-10 2xl:opacity-20'
            />
            <div className='transition-opacity'>
                <SarahHeading
                    className='absolute right-0 top-[-5%] w-full text-secondary sm:w-[90%] 2xl:w-[66%]'
                    style={{
                        opacity: percentageInView / 100,
                        transform: viewportPosition === -1 ? `translateX(${percentageInView - 100}px)` : '',
                    }}
                />
            </div>

            <Container>
                <div className='relative flex flex-wrap items-start justify-end md:flex-nowrap '>
                    <div
                        className=' relative h-[500px] w-[350px] bg-white bg-opacity-10 xs:mr-[10%] sm:mr-[30%] md:mr-0 md:h-[550px] md:w-[400px] xl:h-[600px] xl:w-[450px] '>
                        <StaticImage
                            src='../../images/sarah-about-me-image.jpg'
                            width={450}
                            height={600}
                            placeholder="blurred"
                            onLoad={() => setImageLoaded(true)}
                            className='absolute inset-0 h-full w-full md:mr-10'
                            objectFit="cover"
                            objectPosition="top"
                            alt='Freundliches Bild von Sarah'
                        />
                        <div
                            className={clsx(
                                'absolute right-0 xs:-right-12 top-0 font-roma text-3xl font-bold uppercase !leading-none text-s-black transition delay-500 duration-1000 xs:text-5xl sm:-right-16 md:-right-40 md:top-16 xl:-right-56 md:text-[72px] xl:text-[100px] 2xl:-left-56',
                                {
                                    'opacity-0': !imageLoaded,
                                },
                            )}
                        >
                            Cut & <br/>
                            Grow
                        </div>
                    </div>
                    <CopyText
                        className='mt-0 sm:flex-1 w-full sm:w-auto -translate-y-12 -mb-12 bg-sage-700 p-4 md:mt-[40%] lg:mt-[25%] md:translate-y-0 md:mb-0 md:bg-transparent'>
                        <div
                            className='max-w-screen-sm'
                            style={{
                                opacity: percentageInView / 100,
                                transform: viewportPosition === -1 ? `translateX(${(percentageInView - 100) * -1}px)` : '',
                            }}
                        >
                            <div className='mb-6'>
                                Sarah Scherer (Sie/Ihre) - Das multifunktionale Chamäleon.
                                irgendwo zwischen Pippi Langstrumpf und Rapunzel, macht gerne Dinge die ihr schwer
                                fallen,
                                um an ihnen zu wachsen.
                                <br/><br/>
                                Dabei ist es egal, ob es sich um das Perfektionieren der neuesten Haartrends handelt
                                oder
                                der Einsatz dafür, unsere Welt ein kleines bisschen offener zu gestalten.
                            </div>
                            <div className='text-right'>

                                <Link to='/salon#sarah' className='text-right'>
                                    <ArrowLinkStyles size='sm'>
                                        Mehr lesen
                                    </ArrowLinkStyles>
                                </Link>
                            </div>
                        </div>
                    </CopyText>
                </div>
            </Container>
        </Section>
    );
};
