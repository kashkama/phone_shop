import React, { useState } from 'react'
import Devices from '../components/Devices';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from "../components/Footer";

const DevicesPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <Devices />
            <Footer/>
        </>
    )
}

export default DevicesPage;
