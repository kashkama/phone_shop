import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './services.styled'
import Iphone from "../../public/images/logo5.jpg";

const ServicesCardComp = ({img, heading, paragraph}) => {
    return (
        <ServicesCard>
            <ServicesIcon src={img}/>
            <ServicesH2>{heading}</ServicesH2>
            <ServicesP>{paragraph}</ServicesP>
        </ServicesCard>
    )
}

const Services = () => {
    const heading1 = "paragraphparagraphparag"
    const paragraph1 = "Lorem ipsum dolor sit amet consectetuer adipiscing elit. Rutrum eni ipsum mus posuere egestas nisl dignissim felis. Purus rhoncus magna parturient vehicula felis euismod ad netus amet. Sem potenti non cubilia ante et pulvinar natoque primis augue quisque euismod mus vestibulum lacus. Arcu a purus magna velit magnis metus"
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCardComp img={Iphone} heading={heading1} paragraph={paragraph1}/>
                    <ServicesCardComp img={Iphone} heading="Affordable Prices" paragraph={paragraph1}/>
                    <ServicesCardComp img={Iphone} heading="Affordable Prices" paragraph={paragraph1}/>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
