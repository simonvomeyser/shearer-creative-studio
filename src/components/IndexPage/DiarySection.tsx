import {Link} from "gatsby";
import React from 'react';
import {isOdd} from '../../lib/isOdd';
import {ArrowLinkStyles} from '../ArrowLinkStyles';
import {BraveText} from '../BraveText';
import {Container} from '../Container';
import {CopyText} from '../CopyText';
import {Section} from '../Section';
import {DiaryTeaser} from './components/DiaryTeaser';
import {featuredDiaryEntries} from '../../data/diaryEntries';

export const DiarySection: React.FC = () => {

    return (
        <Section id='diary' className=' py-[160px]'>
            <Container className='mb-16'>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div className='md:col-span-2'>
                        <BraveText className='mb-6'>
                            Highlights <br/>
                            und mehr
                        </BraveText>
                        <Link to='/diary'>
                            <ArrowLinkStyles>
                                Zum Diary
                            </ArrowLinkStyles>
                        </Link>


                    </div>
                    <CopyText className='mt-6 md:mt-0 xs:ml-auto md:ml-0 max-w-screen-xs'>
                        Egal ob Awards, tolle Kundengeschichten, Arbeit für den Zentralverband oder Hilfe für deinen
                        Haarnotfall, im meinem Dairy
                        bist du absolut richtig.
                    </CopyText>
                </div>
            </Container>

            <Container fluid>
                <div className='pl-8 2xl:pl-0 2xl:ml-[8.3333%] flex gap-4 overflow-x-auto  no-scrollbar pr-8'>
                    {featuredDiaryEntries.map((diaryEntry, index) => (
                        <DiaryTeaser diaryEntry={diaryEntry} key={diaryEntry.id}
                                     aspect={isOdd(index) ? 'square' : 'portrait'}/>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
