import React, { useState } from 'react'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroHeader, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './herosection.styled';
import {Button} from './../button.styled';
import Video from "./../../public/video/video.mp4";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted type="video/mp4" src={Video}/>
            </HeroBg>
            <HeroContent>
                <HeroHeader>Smartphone Care And Repairs Services</HeroHeader>
                <HeroP>Professional technicians specialized in complete smartphone care for all forms of devices. We believe in good communication and relationship building with our clients.</HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="services" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >our services {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
