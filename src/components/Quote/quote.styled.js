import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa"

export const QuoteContainer = styled.main`
    width: 100%;
`

export const QuoteWrapper = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #000;
    opacity: 0.9;
`
export const Back = styled(FaArrowLeft)`
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

export const QuoteH1 = styled.h1`
    font-size: 20px;
    color: #fff;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`

export const QuoteForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    background: #000;
    border-radius: 10px;
    height: 500px;

    @media screen and (max-width: 480px) {
        width: 300px;
    }

    @media screen and (max-width: 280px) {
        width: 250px;
    }
`

export const QuoteLabel = styled.label`
    font-size: 15px;
    width: 90%;
    height: 30px;
    color: #fff;
    margin-top: 15px;
`

export const QuoteInput = styled.input`
    border-radius: 5px;
    width: 90%;
    height: 55px;
    padding: 10px;
    font-size: 20px;
    transition: all 0.15s ease-in-out;

    &:focus-visible {
        outline: 2px solid #01bf71;
        border-radius: 5px;
    }
    @media screen and (max-width: 480px) {
        height: 45px;
    }
`

export const QuoteTextArea = styled.textarea`
    width: 90%;
    border-radius: 5px;
    padding: 10px;
    font-size: 18px;
    transition: all 0.15s ease-in-out;

    &:focus-visible {
        outline: 3px solid #01bf71;
        border-radius: 5px;
    }
`

export const QuoteButton = styled.button`
    margin-top: 25px;
    width: 90%;
    height: 55px;
    background: #01bf71;
    color: #fff;
    font-size: 20px;
    font-weight: 550;
    cursor: pointer;
`