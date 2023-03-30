import styled from "styled-components";

export const CustomTitle = styled.p`
  color: ${({color}) => color};
  font-size: ${({size}) => size};
  font-family: "${({font}) => font}";
  font-weight: 700;
  line-height: 96px;
  text-align: right;
  @media (max-width: 1530px) {   
    display: none;
  }    
}
`;

export const CustomText= styled.p`
 
  color: ${({fcolor}) => fcolor};
  font-size: ${({size}) => size};
  font-family: "${({font}) => font}";
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-align: right;
  @media (max-width: 1530px) {   
    display: none;
  }     
}
`;

export const CustomSubTitle= styled.p`
  color: ${({scolor}) => scolor};
  font-size: ${({ssize}) => ssize};
  font-family: "${({sfont}) => sfont}";
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  text-align: right;
  @media (max-width: 1530px) {   
    display: none;
  } 
}
`;

export const CustomFooter= styled.p`
  color: ${({color}) => color};
  font-size: ${({size}) => size};
  font-family: "${({font}) => font}";
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-align: right;
  max-width: 650px;
  margin-left: 30%;
  @media (max-width: 1530px) {   
    display: none;
  }  
}
`;


