import styled from "styled-components";

export const BtnAccess = styled.button` 
  border: 0px;
  width: 150px;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  font-family: ${({font}) => font};
  background-color: "${({color}) => color}";
  color: ${({labelcolor}) => labelcolor};
  font-size: ${({labelsize}) => labelsize};
  @media (max-width: 1530px) {  
    position: absolute; 
    left: 40%;
    width: 60%;  
  }
`;


export const BtnLogout = styled.button`
  border: 0px;
  width: 150px;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  font-family: ${({font}) => font};
  background-color: ${({color}) => color};
  color: ${({labelcolor}) => labelcolor};
  font-size: ${({labelsize}) => labelsize};
  @media (max-width: 1530px) { 
    position: absolute;
    width: 40%;  
  }
`;