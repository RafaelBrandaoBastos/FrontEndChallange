import styled from "styled-components";

export const Container = styled.div`
    justify-content: flex-end;
    display: block;
    width: 100vw;
    height: 100vh;   
`;

export const SubContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-right: 5%;
    height: 70%;
    width: 100%;
`;
export const TextContainer= styled.div`
    display: block;
    align-items: flex-start;
    width: 60%;
    height: 100%;
`;
export const ButtonContainer= styled.div`
    position: relative;
    display: flex;
    height: 100%;
    width: 300px;
    @media (max-width: 1530px) {
        width: 100%;  
    } 
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20%;
    padding: 10px 20px 0 10px;
`;
export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);  
`;


export const Img = styled.img`
    width: auto;
    height: 75%;
    @media (max-width: 768px) {
        max-width: 100%;
        max-height: 75%;
        height: auto; 
    } 
`;


export const Logo = styled.img`
    height: 50%;
    width: auto;
    @media (max-width: 768px) {
        max-width: 100%;
        max-height: 50%;
        height: auto;
    }
`;

