import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { QuoteButton, QuoteContainer, QuoteWrapper, Back, QuoteH1, QuoteForm, QuoteLabel, QuoteInput, QuoteTextArea } from './quote.styled';

const Quote = () => {
    const[inputs, setInputs] = useState({});
    const history = useHistory();   

    useEffect(() => {}, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        //add code here to send message to whatsapp
        console.log(inputs);
    }
    const handleInputs = e => {
        e.persist();
        setInputs(inputs => ({...inputs, [e.target.name] : e.target.value}))
    }
    
    return (
        <QuoteContainer>
            <QuoteWrapper>
                <Back onClick={() => history.goBack()}>go back</Back>
                <QuoteForm onSubmit={handleSubmit}>
                    <QuoteH1>get a quote</QuoteH1>
                    <QuoteLabel>name</QuoteLabel>
                    <QuoteInput type='text' required onChange={handleInputs} value={inputs.name || ''} name="name"/>
                    <QuoteLabel>phone</QuoteLabel>
                    <QuoteInput type='tel' required onChange={handleInputs} value={inputs.phone || ''} name="phone" placeholder="eg. 07xxxxxxxx"/>
                    <QuoteLabel>message</QuoteLabel>
                    <QuoteTextArea rows={6} required  onChange={handleInputs} value={inputs.message || ''}name="message" placeholder="phone type - damage"/>
                    <QuoteButton type='submit'>submit</QuoteButton>
                </QuoteForm>
            </QuoteWrapper>
        </QuoteContainer>
    )
}

export default Quote;
