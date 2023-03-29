import styled from "styled-components";

export const CustomTitle = styled.p`
 
  color: ${(props) => props.titlecolor};
  font-size: ${(props) => props.titlesize};
  font-family: ${(props) => props.font};
  font-weight: 400;
  line-height: 90px;
  @media (max-width: 300px) {   
    }    
}
`;

export const CustomText= styled.p`
 
  color: ${(props) => props.textcolor};
  font-size: ${(props) => props.textsize};
  font-family: ${(props) => props.font};
  font-style: normal;
  line-height: 24px;
  @media (max-width: 300px) {   
    }    
}
`;

export const CustomSubTitle= styled.p`
 
  color: ${(props) => props.subtitlecolor};
  font-size: ${(props) => props.subtitlesize};
  font-family: "${(props) => props.font}";
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
  @media (max-width: 300px) {   
    }    
}
`;

