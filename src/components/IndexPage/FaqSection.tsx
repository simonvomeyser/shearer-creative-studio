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
                color="white"
                className="top-[-450px] md:top-[-250px] right-[-500px] w-[900px] h-[1000px] opacity-[0.02] md:opacity-10"
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
