import styled from "styled-components";

export const Container = styled.div`
    justify-content: flex-end;
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;   
`;

export const SubContainer = styled.div`
    display: flex;
    width: 50%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#33383D, #1C1D20);
    @media (max-width: 768px) {
        width: 100%;
    }   
`;

export const LoginForm = styled.form`
    display: flex;
    width: 380px;
    height: 80%;
    max-height: 650px;
    justify-content: space-between;
    align-items: flex-start; 
    flex-direction: column; 
    @media (max-width: 400px) {
        width: 82%;
        align-items: center;
    }
    @media (max-height: 500px) {
        height: 90%;
    }
`;


export const Img = styled.img`
    object-fit: cover;
    width: 50%;
    height: 100vh;
    position: relative;
    @media (max-width: 768px) {
        display: none;
    } 
`;


export const Logo = styled.img`
    display: flex;
    height: auto;
    @media (max-width: 400px) {
        width 100%; 
    }
`;

export const LogoContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center; 
    width 50%;
    height: auto;
    @media (max-width: 768px) {
        width 100%; 
        padding-right: 90px;   
    } 
`;
export const ErrorMessage = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #E9B425;
margin: auto;
`;