import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
`

export const SideBarWrapper = styled.div`
    color: #fff;
`;

export const SideBarMenu = styled.ul`
    display: ${({ pathname }) => (pathname === "/" ? 'grid' : 'none')};
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;


    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SideBarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: all 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: all 0.2s ease-in-out;
    }
`

export const SideBarLinkTo = styled(SideBarLink)``;

export const SideBarBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const SideBarBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;  
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606
    }
`