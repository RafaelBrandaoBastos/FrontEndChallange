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
  width: 70%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  outline-style: solid;
  outline-color: white;
  background: linear-gradient(#33383d, #1c1d20);
  @media (max-width: 1600px) {
    width: 100%;
  }
`;
export const Busca = styled.div`
  display: flex;
  width: 80%;
  height: 85%;
  max-height: 650px;
  padding-left: 50px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding-left: 0px;
    width: 90%;
    align-items: flex-start;
  }
`;
export const SearchForm = styled.form`
  width: 100%;
  height: 60%;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 30%;
  height: 100vh;
  @media (max-width: 1600px) {
    display: none;
  }
`;

export const Logo = styled.img`
  display: flex;
  height: 60px;
  @media (max-width: 1600px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center; 
    width 30%;
    height: 20%;
    @media (max-width: 1400px) {
        display: none;    
    } 
`;
export const ErrorMessage = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #e9b425;
  margin: auto;
`;

export const UserContainer = styled.div`
justify-content: space-between;
  display: flex;
  align-items: center;
  width: 99%;
  height: 28%;
  border: 1px solid #aaaaaa;
  background: #26292c;
  border-radius: 8px;
  margin-top: 20px;
`;
export const UserLogo = styled.img`
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 50%;
  width: auto;
  height: 60%;
`;
export const UserText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 16px;    
    } 
    @media (max-width: 400px) {
        width: 89px;
        height: 27px; 
        font-size: 12px;    
    } 
`;

export const List = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 40%;
`;
export const ButtonVerMais = styled.button`
    background: linear-gradient(90deg, #0487FF 0%, #1665C1 100%);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;  
    text-transform: uppercase;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-right: 25px;
    border-radius: 8px;
    border: 0px;
    width: 149px;
    height: 47px;
    @media (max-width: 768px) {
        width: 119px;
        height: 37px;    
    } 
    @media (max-width: 500px) {
        width: 89px;
        height: 27px; 
        font-size: 14px;    
    } 
    @media (max-width: 350px) {
        width: 89px;
        height: 27px; 
        font-size: 12px;    
    } 
`;
export const UserInfo = styled.div`
  width: 50%;
  height: 100%;
  justify-content: flex-start;
  display: flex;
  align-items: center;
`;

export const PopUpContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  width: 100vw;
  height: 100vh;
`;
export const ProfileContainer = styled.div`
position: relative;
  display: block;
  background-color: #242424;
  width: 85%;
  height: 75%;
  max-width: 1608px;
  max-height: 814px;
  outline-style: solid;
  outline-color: red;
  @media (max-width: 768px) {
    background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
    padding-right: 0px;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
`;
export const Header = styled.div`
  display: flex;
  padding-right: 20px;
  justify-content: flex-end;
  align-items: center;
    width: 100%;
    height: 10%;

`;
export const ButtonVoltar = styled.button`
    align-items: flex-start;
    gap: 10px;
    width: 136px;
    height: 47px;
    left: 1448px;
    top: 24px;
    background: linear-gradient(90deg, #0487FF 0%, #1665C1 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border: none;
    border-radius: 50px;   
    margin-top: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-transform: uppercase;
    color: #FFFFFF;
`;