import React from 'react'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import { animateScroll } from 'react-scroll';
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialWrapper, SocialLogo, SocialIcons, SocialIconLink, WebSiteRights } from './footer.styled';

const Footer = () => {
    const scrollHome = () => {
        animateScroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">Sign In</FooterLink>
                                <FooterLink to="/">Terms of service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialWrapper>
                        <SocialLogo to="/" onClick={scrollHome}>AARepairshop</SocialLogo>
                        <WebSiteRights>aarepairshop &copy; {new Date().getFullYear()} All rights reserved.</WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://web.facebook.com/aarepairshop" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/aarepairshop/" target="_blank" aria-label="Instagram" rel="noopener noreferrer"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="https://www.jiji.co.ke" target="_blank" aria-label="Jiji" rel="noopener noreferrer">jiji</SocialIconLink>
                        </SocialIcons>
                    </SocialWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;
