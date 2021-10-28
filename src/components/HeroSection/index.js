import React from 'react'
import { HeroBg, HeroContainer, VideoBg } from './herosection.styled';
import Video from "./../../public/video/video.mp4";

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted type="video/mp4" src={Video}/>
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection;
