import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    width: 100vw;
    height: 100vh;   
`;
export const SubContainer = styled.div`    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    juestify-content: center;
    background-color: #242424;
    align-items: center;
    padding-right: 50px;
    width: 90%;
    height: 80%;
    max-width: 1608px; 
    max-height: 814px;
    @media (max-width: 1608px) {
        background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
        padding-right: 0px;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
    }    
`;

