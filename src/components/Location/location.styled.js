import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

export const LocationMain = styled.main`
  width: 100%;
  height: 100vh;
`;

export const LocationWrapper = styled.article`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

export const LocationMap = styled.div`
  flex-grow: 2;
  background-color: red;

  @media screen and (max-width: 760px) {
    flex-grow: 3
  }
`;

export const LocationInfo = styled.div`
  flex-shrink: 1;
  background-color: #101522;
`;

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
`;

export const LocationHeader = styled.header`
  font-size: 34px;
  padding: 20px;
  margin-bottom: 16px;
  color: #fff;
  text-align: center;
`;

export const LocationDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px;
  height: 400px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  margin-bottom: 25px;
`;


export const ItemDetails = styled.p`
  color: #fff;
  font-size: 14px;
  padding-left: 10px;
`;
