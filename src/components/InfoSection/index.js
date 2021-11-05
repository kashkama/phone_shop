import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, Img, ImgWrap } from './infoSection.styled';
import { Button, ButtonNav } from './../button.styled';

const InfoSection = ({ id, purpose, to, lightBg, lightText, lightTextDesc, topLine, headLine, description, buttonLabel, imgStart, img, alt, dark, dark2, primary, darkText }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    {purpose === "nav" ? (<ButtonNav
                                        to={`/${to}`}
                                        dark={dark ? 1 : 0}
                                        primary={primary ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</ButtonNav>) : (<Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>)
                                    }
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;