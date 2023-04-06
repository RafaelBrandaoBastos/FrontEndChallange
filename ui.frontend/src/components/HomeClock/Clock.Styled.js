import styled from "styled-components";

export const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  #headerBodyTimeText {
    font-size: 5rem;
    font-weight: 700;
    line-height: 5rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Time = styled.p`
  left: 796px;
  top: 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 144px;
  text-align: center;
  color: #222222;
`;

export const DateC = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #222222;
`;
