import React from 'react'
import { QuoteButton, QuoteContainer, QuoteWrapper, Back, QuoteH1, QuoteForm, QuoteLabel, QuoteInput, QuoteTextArea } from './quote.styled';
const Quote = () => {
    return (
        <QuoteContainer>
            <QuoteWrapper>
                <Back>go back</Back>
                <QuoteForm>
                    <QuoteH1>get a quote</QuoteH1>
                    <QuoteLabel>name</QuoteLabel>
                    <QuoteInput type='text' required />
                    <QuoteLabel>phone</QuoteLabel>
                    <QuoteInput type='tel' required />
                    <QuoteLabel>message</QuoteLabel>
                    <QuoteTextArea rows={6} required/>
                    <QuoteButton type='submit'>submit</QuoteButton>
                </QuoteForm>
            </QuoteWrapper>
        </QuoteContainer>
    )
}

export default Quote;
