import {StaticImage} from "gatsby-plugin-image";
import React from 'react';
import {Container} from "./Container";

export const SalonImagesSlider: React.FC = () => {
        return (
            <Container fluid>

                <div className="pl-[1rem] xs:pl-[2rem] md:pl-[3rem] 2xl:pl-0 2xl:ml-[8.3333%] flex gap-4 overflow-x-auto  no-scrollbar">
                    <div className=" relative flex-shrink-0 w-[75%] md:w-[45%] xl:w-[30%] overflow-hidden ">
                        <div className="pt-[75%] relative">
                            <StaticImage
                                className="absolute inset-0 w-full h-full"
                                objectFit="cover"
                                width={534}
                                height={400}
                                src="../images/index-salon-01.jpg"
                                alt="Innenansicht des Salons 1"/>

                        </div>
                    </div>
                    <div className=" relative flex-shrink-0 w-[75%] md:w-[45%] xl:w-[30%] overflow-hidden ">
                        <div className="pt-[75%] relative">
                            <StaticImage
                                className="absolute inset-0 w-full h-full"
                                objectFit="cover"
                                width={534}
                                height={400}
                                src="../images/index-salon-02.jpg"
                                alt="Innenansicht des Salons 2"/>

                        </div>
                    </div>
                    <div className=" relative flex-shrink-0 w-[75%] md:w-[45%] xl:w-[30%] overflow-hidden ">
                        <div className="pt-[75%] relative">
                            <StaticImage
                                className="absolute inset-0 w-full h-full"
                                objectFit="cover"
                                width={534}
                                height={400}
                                src="../images/index-salon-03.jpg"
                                alt="Innenansicht des Salons 3"/>
                        </div>
                    </div>
                    <div className=" relative flex-shrink-0 w-[75%] md:w-[45%] xl:w-[30%] overflow-hidden ">
                        <div className="pt-[75%] relative">
                            <StaticImage
                                className="absolute inset-0 w-full h-full"
                                objectFit="cover"
                                width={534}
                                height={400}
                                src="../images/index-salon-04.jpg"
                                alt="Innenansicht des Salons 4"/>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
;
