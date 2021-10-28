import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarBtnWrapper, SideBarBtnLink } from './sidebar.styled';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                    <SideBarLink to="discover" onClick={toggle}>Discover</SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>Services</SideBarLink>
                    <SideBarLink to="signup" onClick={toggle}>Sign Up</SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrapper>
                    <SideBarBtnLink to="/signin" onClick={toggle}>Sign In</SideBarBtnLink>
                </SideBarBtnWrapper>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
