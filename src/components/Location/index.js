import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {LocationMain, LocationWrapper, LocationMap, LocationInfo, BackBtn} from './location.styled'

const Location = () => {
    const history = useHistory();
    return (
        <LocationMain>
            <LocationWrapper>
                <BackBtn onClick={() => history.goBack()}/>
                <LocationMap/>
                <LocationInfo/>
            </LocationWrapper>
        </LocationMain>
    )
}

export default Location;