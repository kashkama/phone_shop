import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './navbar.styled';
import { animateScroll } from 'react-scroll';

export const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const scrollHome = () => {
        animateScroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: 'green' }}>
                <Nav scrollNav={scrollNav}>
                    <NavContainer>
                        <NavLogo to="/" onClick={scrollHome}>aarepairshop</NavLogo>
                        <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="about" smooth={true}
                                    duration={500} spy={true}
                                    exact='true'
                                    offset={-80}>about us</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="what we do"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>what we do</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="why us"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>why us</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>services</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/getQuote">Get Quote</NavBtnLink>
                        </NavBtn>
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}


export default NavBar;