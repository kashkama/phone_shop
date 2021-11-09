import styled from "styled-components";

export const DevicesContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(1150px - 80px);
    width: 100%;
    position: relative;
    z-index: 1;
`

export const DevicesWrapper = styled.article`
    width: 100%;
    padding: 0 50px;
    height: 100%;
    margin: 0;

    @media screen and (max-width: 480px) {
        padding: 0 10px;
    }
`

export const DevicesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const DevicesHeader = styled.h1`
    margin-top: 15px;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 30px;
`
export const DevicesListWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
`
export const DevicesList = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    list-style: none;
    padding: 20px 0;
    width: 100%;
    justify-content: center;

    @media screen and (max-width: 768px) {
        gap: 1fr;
        grid-template-columns: repeat(3, minmax(100px, 1fr));
    }

    @media screen and (max-width: 480px) {
        gap: 1fr;
        grid-template-columns: repeat(2, minmax(100px, 1fr));
    }
`
export const Device = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DeviceImg = styled.img`
    height: 100px;
    width: 100px;
    object-fit: fill;

    @media screen and (max-width: 480px) {
        height: 80px;
        width: 80px;
    }
`