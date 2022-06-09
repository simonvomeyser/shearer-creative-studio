import {Link} from "gatsby";
import React from 'react';
import {ArrowLinkStyles} from '../ArrowLinkStyles';
import {BraveText} from '../BraveText';
import {Container} from '../Container';
import {CopyText} from '../CopyText';
import {DiaryTeaserSlider} from "../DiaryTeaserSlider/DiaryTeaserSlider";
import {Section} from '../Section';


export const DiarySection: React.FC = () => {


    return (
        <Section id='diary' className='pt-14 pb-24 sm:pb-36 sm:py-[160px]'>
            <Container className='mb-16'>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div className='md:col-span-2'>
                        <BraveText className='mb-6'>
                            Highlights <br className="hidden md:inline"/>
                            und mehr
                        </BraveText>
                        <Link to='/diary'>
                            <ArrowLinkStyles>
                                Zum Diary
                            </ArrowLinkStyles>
                        </Link>
                    </div>
                    <CopyText className='mt-2 sm:mt-6 md:mt-0 xs:ml-auto md:ml-0 max-w-screen-xs'>
                        Egal ob Awards, tolle Kundengeschichten, Arbeit für den Zentralverband oder Hilfe für deinen
                        Haarnotfall, im meinem Dairy
                        bist du absolut richtig.
                    </CopyText>
                </div>
            </Container>


            <Container fluid>
                <DiaryTeaserSlider featuredOnly />
            </Container>
        </Section>
    );
};

