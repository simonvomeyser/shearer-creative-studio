import clsx from "clsx";
import React from 'react';
import {useMountedTick} from "../hooks/useMountedTick";
import {BraveText} from "./BraveText";
import {Container} from "./Container";
import {CopyText} from "./CopyText";
import {MetaTags} from "./MetaTags";
import {Section} from "./Section";
import {Watercolor} from "./Watercolor";

export type PlainTextPageProps = {
  className?: string;
  children?: React.ReactNode;
  heading: string;

};

export const PlainTextPage: React.FC<PlainTextPageProps> = ({
  className,
    children,
    heading
}) => {

  const mountedTick =  useMountedTick()
  return (
	<div className={clsx('', className)}>
        <MetaTags pageName={heading} hideFromSearchEngines/>
        <Section headerPaddingTop>
            <Watercolor
                color="green"
                className={clsx('top-[50px] right-[-500px]  lg:right-[-300px] w-[900px] h-[1000px] opacity-10 md:opacity-30 lg:opacity-40 ', {
                    'scale-90' : !mountedTick
                })
            }
            />
            <Container className="mb-8 md:mb-14">
                <BraveText>
                    <h1>{heading}</h1>
                </BraveText>
            </Container>
            <Container className="max-w-screen-md">
               <CopyText className="!max-w-none rich-text">
                   {children}
               </CopyText>
            </Container>
        </Section>
	</div>
  );
};
