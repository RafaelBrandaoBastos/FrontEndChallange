import styled from "styled-components";
export const Time = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 70px;
  @media (max-width: 1530px) {   
    display: none;
  }    
`;

export const TimerH1 = styled.h1`
  width: 150px;
  height: 60px;
  font-family: "Poppins";
  font-style: normal;
  font-size: 48px;
  text-align: center;
  color: #ffffff;
  align-items: center;
`;
export const TimerP = styled.h1`
  width: 150px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: right;
  text-align: center;
  align-items: center;
  color: #ffffff;
`;
export const TimerP2 = styled.h1`
  width: 100px;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: right;
  align-items: center;
  color: #ffffff;
`;
