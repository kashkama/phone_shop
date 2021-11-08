import React from 'react'
import { DevicesContainer, DevicesWrapper, DevicesSection, DevicesHeader, DevicesListWrapper, DeviceImg, DevicesList, Device } from './devices.styled';
import { devices } from '../InfoSection/Data';

const Devices = () => {
    return (
        <DevicesContainer>
            <DevicesWrapper>
                <DevicesSection>
                    <DevicesHeader>We fix...</DevicesHeader>
                    <DevicesListWrapper>
                        <DevicesList>
                            {devices.map((dv) => (<Device key={dv.name}><DeviceImg src={dv.icon}/></Device>))}
                        </DevicesList>
                    </DevicesListWrapper>
                </DevicesSection>
            </DevicesWrapper>
        </DevicesContainer >
    )
}

export default Devices;
