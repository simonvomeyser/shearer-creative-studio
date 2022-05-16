import clsx from 'clsx';
import {Link} from "gatsby";
import {GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image";
import React from 'react';
import {DiaryEntryType} from '../../data/diaryEntries';
import {ArrowLinkStyles} from '../ArrowLinkStyles';
import {CopyText} from '../CopyText';

export type DiaryCardSize = 'full' | 'small' | 'big'

export type DiaryCardProps = {
    className?: string;
    size: DiaryCardSize;
    diaryEntry: DiaryEntryType
    gatsbyImageData: IGatsbyImageData
};

export const DiaryCard: React.FC<DiaryCardProps> = ({diaryEntry, size, className, gatsbyImageData}) => {

    const url = '/diary/' + diaryEntry.slug;
    const showExcerpt = size === 'full' && diaryEntry.excerpt;

    return (
        <div className={clsx('', {
            'md:col-span-2': size === 'full',
            'md:p-[10%]': size === 'small',
            'xs:px-[5%] md:px-0': size === 'big',
        }, className)}>
            <div className={clsx('relative bg-sage-700 overflow-hidden mb-4', {
                'pt-[120%]': size !== 'full',
                'sm:mx-[calc(var(--container-padding--xs)*-1)]  md:mx-[calc(var(--container-padding--md)*-1)] pt-[56.6666%] md:pt-[42.85%]': size === 'full',
            })}>
                <Link to={url} className='absolute cursor-pointer w-full inset-0 h-full object-cover'>
                    <GatsbyImage
                        image={gatsbyImageData}
                        className=" w-full h-full  hover:scale-110 transition"
                        objectFit="cover"
                        objectPosition="top"
                        alt={`Titelbild für den Diary Eintrag ${diaryEntry.title}`}/>
                </Link>
            </div>
            <div className={clsx('flex gap-4', {
                'sm:px-[5%]': size === 'full'
            })}>

                <div className='md:pr-8 space-y-3 md:space-y-4 flex-1'>

                    <h3 className='text-2xl max-w-screen-sm sm:text-3xl md:text-4xl font-roma uppercase font-bold hyphens-auto'
                        dangerouslySetInnerHTML={{__html: diaryEntry.title}}
                    />

                    {showExcerpt ? <CopyText className="md:hidden">{diaryEntry.excerpt}</CopyText> : null}

                    <div>

                        <Link to={url}>
                                <ArrowLinkStyles size='sm' className='cursor-pointer'>Ansehen</ArrowLinkStyles>
                        </Link>
                    </div>
                </div>
                {showExcerpt ? <CopyText className="hidden md:block flex-1">{diaryEntry.excerpt}</CopyText> : null}

            </div>
        </div>
    );
};
