import styled from "styled-components";
import VectorS from "../../assets/VectorS.png";

export const BtnSearch = styled.button`

background-image: url(${VectorS});
background-repeat: no-repeat;
background-position: 7em;
background-size: 20px;

  border: 0px;
  box-shadow: 0 1px 1px black;
  width: 200px;
  height: 67px;
  border-radius: 50px;
  font-weight: 700;
  line-height: 27px;
  padding-right: 50px;
  font-family: ${({font}) => font};
  background-color: ${({color}) => color};
  color: ${({labelcolor}) => labelcolor};
  font-size: ${({labelsize}) => labelsize};
  @media (max-width: 768px) {
    padding-right: 0px;   
    width: 77px;
    background-position: 1.5em;
    height: 67px;    
    color: transparent;
} 
  
`;
