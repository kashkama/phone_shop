import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GoLocation, GoMail, GoClock } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";

import {
  LocationMain,
  LocationWrapper,
  LocationMap,
  LocationInfo,
  BackBtn,
  LocationHeader,
  LocationDetailsWrapper,
  List,
  ItemDetails,
  ListDetails,
} from "./location.styled";

const Location = () => {
  const history = useHistory();
  return (
    <LocationMain>
      <LocationWrapper>
        <BackBtn onClick={() => history.goBack()} />
        <LocationMap />
        <LocationInfo>
          <LocationHeader>Find us</LocationHeader>
          <LocationDetailsWrapper>
            <LocationDetails info="nairobi" icon={GoLocation} />
            <LocationDetails info="+25400000000" icon={FiPhoneCall} />
            <LocationDetails info="peter@gmail.com" icon={GoMail} />
            <LocationDetails
              info="Monday - Saturday 8am - 7pm, Saturdays 9am - 6pm, Closed Sundays"
              icon={GoClock}
            />
          </LocationDetailsWrapper>
        </LocationInfo>
      </LocationWrapper>
    </LocationMain>
  );
};

const LocationDetails = (props) => {
  let Icon = props.icon;
  return (
    <List>
      <Icon style={{ color: "#fff" }} />
      <ItemDetails>{props.info}</ItemDetails>
    </List>
  );
};

export default Location;
