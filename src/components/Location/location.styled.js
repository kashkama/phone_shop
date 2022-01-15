import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa"

export const LocationMain = styled.main`
  width: 100%;
  height: 100vh;
  `

export const LocationWrapper = styled.article`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`

export const LocationMap = styled.div`
    flex-grow: 2;
    background-color: red;
`

export const LocationInfo = styled.div`
    flex-grow: 1;
    background-color: #101522;
`

export const BackBtn = styled(FaArrowLeft)`
    position: absolute;
    top: 2rem;
    left: 0;
    font-size: 40px;
    text-decoration: none;
    margin: 0 0 0 45px;
    cursor: pointer;
    color: #fff;

    @media screen and (max-width: 480px) {
        margin: 10px 0 0 35px;
        top: 0;
    }

    @media screen and (max-width: 280px) {
        margin: 10px 0 0 25px;
        top: 0;
    }
`