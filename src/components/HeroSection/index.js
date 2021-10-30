import React, { useState } from 'react'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroHeader, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './herosection.styled';
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
                <HeroHeader>Phone care and Repairs</HeroHeader>
                <HeroP>Professional Specialists in smartphone repair.</HeroP>
            </HeroContent>
            <HeroBtnWrapper>
                <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>Get started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
            </HeroBtnWrapper>
        </HeroContainer>
    )
}

export default HeroSection;
