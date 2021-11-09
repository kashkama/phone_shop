import React from 'react'
import { QuoteButton, QuoteContainer, QuoteWrapper, Back, QuoteH1, QuoteForm, QuoteLabel, QuoteInput} from './quote.styled';
const Quote = () => {
    return (
        <QuoteContainer>
            <QuoteWrapper>
                <Back>go back</Back>
                <QuoteH1>get a quote</QuoteH1>
                <QuoteForm>
                    <QuoteLabel>phone</QuoteLabel>
                    <QuoteInput/>
                    <QuoteLabel>message</QuoteLabel>
                    <QuoteInput/>
                    <QuoteButton>submit</QuoteButton>
                </QuoteForm>
            </QuoteWrapper>
        </QuoteContainer>
    )
}

export default Quote;
