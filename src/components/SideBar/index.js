import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarBtnWrapper, SideBarBtnLink, SideBarLinkTo } from './sidebar.styled';

const SideBar = ({ isOpen, toggle }) => {
    const { pathname } = useLocation();
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu pathname={pathname}>
                    <SideBarLink to="about" onClick={toggle}>about us</SideBarLink>
                    <SideBarLink to="what we do" onClick={toggle}>what we do</SideBarLink>
                    <SideBarLink to="why us" onClick={toggle}>why us</SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>services</SideBarLink>
                    <SideBarLinkTo as={Link} to="/feed">our work</SideBarLinkTo>
                </SideBarMenu>
                <SideBarBtnWrapper>
                    <SideBarBtnLink to="/quote" onClick={toggle}>Get A Quote</SideBarBtnLink>
                </SideBarBtnWrapper>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
