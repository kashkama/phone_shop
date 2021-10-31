import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
        </>
    )
}

export default Home
