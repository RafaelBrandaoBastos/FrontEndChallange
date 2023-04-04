import styled from "styled-components";

export const CustomTitle = styled.p`
  color: ${({color}) => color};
  font-size: ${({size}) => size};
  font-family: "${({font}) => font}";
  font-style: normal;
  font-weight: 400;
  line-height: 90px;   
}
`;

export const CustomText= styled.p`
 
  color: ${({color}) => color};
  font-size: ${({size}) => size};
  font-family: "${({font}) => font}";
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  MARGIN-BOTTOM: 25PX;
}
`;


