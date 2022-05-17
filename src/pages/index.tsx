import React from "react";
import {DiarySection} from '../components/IndexPage/DiarySection';
import {FaqSection} from "../components/IndexPage/FaqSection";
import {HeroSection} from "../components/IndexPage/HeroSection";
import {PriceSection} from "../components/IndexPage/PriceSection";
import {SalonSection} from "../components/IndexPage/SalonSection";
import {SarahSection} from "../components/IndexPage/SarahSection";

const IndexPage = () => {

    return (

        <div>

            <HeroSection/>

            <SalonSection/>

            <PriceSection/>

            <SarahSection/>

            <DiarySection/>

            <FaqSection/>

        </div>

    )
}

export default IndexPage

