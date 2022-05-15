import clsx from 'clsx';
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import React from 'react';
import {DiaryEntryType} from '../../../data/diaryEntries';
import {ArrowLinkStyles} from '../../ArrowLinkStyles';
import {CopyText} from '../../CopyText';
import {LazyImg} from '../../LazyImg';

export type DiaryTeaserProps = {
    diaryEntry: DiaryEntryType,
    className?: string,
    aspect?: 'portrait' | 'square',
};

export const DiaryTeaser: React.FC<DiaryTeaserProps> = ({diaryEntry, className, aspect = 'portrait'}) => {

    const url = '/diary/' + diaryEntry.slug;
    const folder = '/diary/' + diaryEntry.slug;
    const imageUrl = '../../../static/diary/' + diaryEntry.folder + '/' + diaryEntry.listImageUrl;

    return (
        <div className={clsx('relative flex-shrink-0 w-[85%] md:w-[45%] xl:w-[40%] overflow-hidden', className)}>
            <div className=''>
                <div className={clsx('w-full relative mb-4 md:mb-8 overflow-hidden', {
                    'pt-[140%]': aspect === 'portrait',
                    'pt-[120%]': aspect === 'square',
                })}>
                    <Link to={url} className='absolute cursor-pointer w-full inset-0 h-full'>
                    </Link>
                </div>
                <div className='pr-2 md:pr-8 space-y-3  md:space-y-4'>

                    <h3 className='text-2xl xs:text-3xl md:text-4xl font-roma uppercase font-bold hyphens-auto'
                        dangerouslySetInnerHTML={{__html: diaryEntry.title}}
                    />
                    {diaryEntry.excerpt ? <CopyText>{diaryEntry.excerpt}</CopyText> : null}
                    <div>

                        <Link to={url}>
                            <ArrowLinkStyles size='sm' className='cursor-pointer'>Mehr erfahren</ArrowLinkStyles>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
};
