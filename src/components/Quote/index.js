import React from 'react'
import { QuoteButton, QuoteContainer, QuoteWrapper, Back, QuoteH1, QuoteForm, QuoteLabel, QuoteInput } from './quote.styled';
const Quote = () => {
    return (
        <QuoteContainer>
            <QuoteWrapper>
                <Back>go back</Back>
                <QuoteForm>
                    <QuoteH1>get a quote</QuoteH1>
                    <QuoteLabel>phone</QuoteLabel>
                    <QuoteInput type='text' required />
                    <QuoteLabel>message</QuoteLabel>
                    <QuoteInput type='text' required />
                    <QuoteButton type='submit'>submit</QuoteButton>
                </QuoteForm>
            </QuoteWrapper>
        </QuoteContainer>
    )
}

export default Quote;
