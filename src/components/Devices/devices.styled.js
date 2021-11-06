import styled from "styled-components";

export const DevicesContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1vh;
    width: 100%;
    position: relative;
    margin-top: 80px;
    z-index: 1;
`

export const DevicesWrapper = styled.article`
    width: 100%;
    padding: 0 50px;
    height: 100%;
    margin: 0;
`

export const DevicesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const DevicesHeader = styled.h1`
    margin-top: 15px;
    font-weight: 500;
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
`
export const Device = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background: red;
`