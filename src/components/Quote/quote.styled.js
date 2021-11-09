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
`
export const Back = styled(FaArrowLeft)`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 40px;
    text-decoration: none;
    margin: 15px 0 0 15px;
    cursor: pointer;
`

export const QuoteH1 = styled.h1`
    font-size: 30px;
    margin: 20px 0;
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
`

export const QuoteLabel = styled.label`
    font-size: 15px;
    height: 30px;
    color: #fff;
`

export const QuoteInput = styled.input`
    border-radius: 5px;
    width: 90%;
    height: 55px;
`

export const QuoteButton = styled.button`
    margin-top: 25px;
    width: 90%;
    height: 55px;
    background: #000;
    color: #fff;
`