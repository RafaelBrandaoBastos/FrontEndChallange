import styled from "styled-components";
export const WeatherDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const WeatherImage = styled.img`
  width: 4vw;
  background: linear-gradient(
    rgba(51, 56, 61, 0.3) 0%,
    rgba(28, 29, 32, 0.3) 50%
  );
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 8vw;
  }
`;

export const WeatheTemp = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
text-align: center;
color: #222222;
`;

export const City = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */
text-align: center;
/* Secundária */
color: #222222;
`;