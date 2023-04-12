import styled from "styled-components";

export const BtnContinuar = styled.button`
  border: 0px;
  box-shadow: 0 1px 1px black;
  width: 379px;
  height: 67px;
  border-radius: 40px;
  font-weight: 700;
  line-height: 27px;
  font-family: ${({font}) => font};
  background-color: ${({color}) => color};
  color: ${({labelcolor}) => labelcolor};
  font-size: ${({labelsize}) => labelsize};
  @media (max-width: 400px) {
    width: 82vw;  
}
`;
