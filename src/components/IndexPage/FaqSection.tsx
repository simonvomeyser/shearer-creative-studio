import React from "react";
import {Container} from "../Container";
import {FaqAccordion} from "../FaqAccordion";
import {FaqHeading} from "../FaqHeading";
import {Section} from "../Section";
import {Watercolor} from "../Watercolor";


export const FaqSection: React.FC = ({}) => {

    return (
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
    );
};
