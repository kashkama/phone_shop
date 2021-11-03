import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './services.styled'
import Android from "../../public/images/android.svg";
import Iphone from "../../public/images/iphone.svg";


const ServicesCardComp = ({ img, heading, paragraph }) => {
    return (
        <ServicesCard>
            <ServicesIcon src={img} />
            <ServicesH2>{heading}</ServicesH2>
            <ServicesP>{paragraph}</ServicesP>
        </ServicesCard>
    )
}

const Services = () => {
    const [heading1, heading2, heading3, paragraph1, paragraph2, paragraph3] = ["Android Repair", "Iphone Repair", "Tablet Repair",
        "We offer a professional service to ensure that your phone gets fixed without any hassles. We use all the latest tools and equipments to carry out repairs. We repair all brands of android devices including samsung, oneplus, xiaomi, vivo.",
         "We offer a professional service to ensure that your phone gets fixed without any hassles. We use all the latest tools and equipments to carry out repairs. We repair all brands of iphone devices including iphone 4 to iphone 13.",
          "We offer a professional service to ensure that your phone gets fixed without any hassles. We use all the latest tools and equipments to carry out repairs. We repair all brands of tablet devices including ipads."];
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCardComp img={Android} heading={heading1} paragraph={paragraph1} />
                    <ServicesCardComp img={Iphone} heading={heading2} paragraph={paragraph2} />
                    <ServicesCardComp img={Android} heading={heading3} paragraph={paragraph3} />
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
