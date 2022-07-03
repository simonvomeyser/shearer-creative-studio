import React, {useRef} from "react";
import {usePercentageInView} from "../../hooks/usePercentageInView";
import {Container} from "../Container";
import {FaqAccordion} from "../FaqAccordion";
import {FaqHeading} from "../FaqHeading";
import {Section} from "../Section";
import {Watercolor} from "../Watercolor";


export const FaqSection: React.FC = ({}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const {percentageInView, viewportPosition} = usePercentageInView(sectionRef);


    return (
        <Section id="faq"
                 ref={sectionRef}
                 className="bg-sage-700 pb-[80px] pt-[80px] md:pt-[200px] mt-[100px] md:mt-[200px] skew-top">
            <h2 className="sr-only">Häufig gestellte fragen</h2>
            <Watercolor
                color="white"
                className="top-[-450px] md:top-[-250px] right-[-500px] w-[900px] h-[1000px] opacity-[0.02] md:opacity-10"
            />
            <Container className="mt-[-220px] sm:mt-[-300px] md:mt-[-450px]">

                <FaqHeading className="w-[80%] md:w-[60%] text-secondary"
                            style={{
                                transform: viewportPosition === -1 ? `translateX(${(percentageInView - 100) * -0.5}px)` : '',
                            }}
                />

            </Container>
            <Container>
                <FaqAccordion/>
            </Container>

        </Section>
    );
};
