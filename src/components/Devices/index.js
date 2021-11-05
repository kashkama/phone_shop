import React from 'react'
import { DevicesContainer, DevicesWrapper, DevicesSection, DevicesHeader, DevicesListWrapper, DevicesList, Device } from './devices.styled';

const Devices = () => {
    return (
        <DevicesContainer>
            <DevicesWrapper>
                <DevicesSection>
                    <DevicesHeader>Devices</DevicesHeader>
                    <DevicesListWrapper>
                        <DevicesList>
                            <Device></Device>
                        </DevicesList>
                    </DevicesListWrapper>
                </DevicesSection>
            </DevicesWrapper>
        </DevicesContainer >
    )
}

export default Devices;
