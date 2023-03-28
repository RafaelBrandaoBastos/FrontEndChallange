import styled from "styled-components";
import VectorU from "../../assets/VectorU.png";
import VectorP from "../../assets/VectorP.png";

export const InputU = styled.input`
width: 379px;
height: 60px;
background: #26292C;
border: 1px solid #FFFFFF; 
border-radius: 50px;
color: ${({ucolor}) => ucolor};
font-family: 'Poppins'
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
padding-left: 4%;
background-image: url(${VectorU});
background-repeat: no-repeat;
background-position: 20.8em;
background-size: 20px;
margin-top: 5%;
@media (max-width: 400px) {
    width: 82vw;
}

&.invalid{
    border: 1px solid #E9B425;
}

@media (max-width: 768px) {
    background-position: 95%;      
}

&::placeholder {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: ${({ucolor}) => ucolor};
}
`;

export const InputP = styled.input`
width: 379px;
height: 60px;
background: #26292C;
border: 1px solid #FFFFFF; 
border-radius: 50px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: ${({pcolor}) => pcolor};
padding-left: 4%;
background-image: url(${VectorP});
background-repeat: no-repeat;
background-position: 20.8em;
background-size: 20px;
margin-top: 5%;
@media (max-width: 400px) {
    width: 82vw;
}
&.invalid{
    border: 1px solid #E9B425;
}

@media (max-width: 768px) {
    background-position: 95%;       
}

&::placeholder {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: ${({pcolor}) => pcolor};
}
`;
