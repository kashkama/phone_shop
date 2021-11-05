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
                    <SideBarLink to="about" onClick={toggle}>about us</SideBarLink>
                    <SideBarLink to="what we do" onClick={toggle}>what we do</SideBarLink>
                    <SideBarLink to="why us" onClick={toggle}>why us</SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>services</SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrapper>
                    <SideBarBtnLink to="/getQuote" onClick={toggle}>Get A Quote</SideBarBtnLink>
                </SideBarBtnWrapper>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
