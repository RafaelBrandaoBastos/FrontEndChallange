import styled from "styled-components";

export const InputS = styled.input`
width: 75%;
height: 60px;
margin-right: 50px;
background: #26292C;
border: 1px solid #FFFFFF;
color: #FFFFFF;
border-radius: 50px;
font-family: 'Poppins'
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
padding-left: 4%;
position: absolute;
@media (max-width: 1100px) {
    width: 70%;
}
@media (max-width: 768px) {
    width: 78%;
}
@media (max-width: 450px) {
    width: 70%;
}
@media (max-width: 300px) {
    width: 60%;
}

&.invalid{
    border: 1px solid #E9B425;
}
`;
