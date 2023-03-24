import styled from "styled-components";

export const Container = styled.div`
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
        justify-content: center;
        align-items: center;
    }   
`;
export const LoginContainer = styled.div`
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
`;

export const Img = styled.img`
    object-fit: cover;
    width: 50%;
    height: auto;
    @media (max-width: 768px) {
        display: none;
    } 
`;