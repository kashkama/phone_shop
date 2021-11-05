import React from 'react'
import Devices from '../components/Devices';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const DevicesPage = () => {
    return (
        <>
            <SideBar />
            <NavBar />
            <Devices />
        </>
    )
}

export default DevicesPage;
