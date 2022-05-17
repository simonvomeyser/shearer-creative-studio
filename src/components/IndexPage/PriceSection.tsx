import clsx from 'clsx';
import React from "react";
import {Container} from "../Container";
import {PriceAccordion} from "../PriceAccordion/PriceAccordion";
import {PriceHeading} from "../PriceHeading";
import {Section} from "../Section";
import {Watercolor} from "../Watercolor";


export const PriceSection: React.FC = ({}) => {

    return (
        <Section id="preise" className="mb-36 md:mb-48">
            <h2 className="sr-only">Preise</h2>
            <Watercolor
                color="green"
                className={clsx('hidden md:block top-[-15%] right-[-600px] w-[900px] h-[1000px] opacity-30 ')}
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
    );
};
