import styled from "styled-components";

export const PopUpContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  padding: 0px 150px 20px 20px;
  @media (max-width: 1300px) {
    padding: 0px 0px 0px 0px;
  }
`;
export const Body = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  @media (max-width: 1300px) {
    display: block;
    width: 100%;
  }
`;
export const BioContainer = styled.div`
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  height: 40%;
  @media (max-width: 1300px) {
    flex-wrap: nowrap;
    width: 100%;
    height: 25%;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const UserLogo = styled.img`
  width: 174px;
  height: 174px;
  border-radius: 50%;
  @media (max-width: 1300px) {
    width: 100px;
    height: 100px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: auto;
  padding-top: 25px;
  align-items: flex-start;
  justify-content: center;
  color: #ffffff;
  @media (max-width: 1300px) {
    height: auto;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 10px;
  @media (max-width: 1300px) {
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
  }
`;
export const SubTitle = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  color: #8d8d8d;
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const ReposContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 90%;
  padding-left: 50px;
  align-items: flex-start;
  @media (max-width: 1300px) {
    height: 70%;
    padding-left: 0px;
  }
`;
export const ButtonsContainer = styled.div`
  display: block;
  width: 100%;
`;
export const ButtonRepos = styled.button`
  width: 170px;
  height: 55px;
  background: #2a2a2a;s
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  border: none;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  align-items: center;

`;

export const ButtonFavs = styled.button`
  width: 145px;
  height: 55px;
  background: #2a2a2a;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  border: none;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  align-items: center;

  &:hover {
  }
`;

export const Ball = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 10px;
  width: 25px;
  height: 25px;
  background: #454545;
  border-radius: 46px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  position: relative;
`;

export const Slide = styled.div`
  display: flex;
  &.repos {
    height: 3px;
    width: 315px;
    background: linear-gradient(
      to right,
      #9F9F9F 0%,
      #9F9F9F 55%,
      #2B2B2B 55%,
      #2B2B2B 100%
    );
  }
  &.fav {
    height: 3px;
    width: 315px;
    background: linear-gradient(
      to right,
      #2B2B2B 0%,
      #2B2B2B 55%,
      #9F9F9F 55%,
      #9F9F9F 100%
    );
  }
`;
export const ReposList = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 90%;
`;
export const Repos = styled.div`
  display: flex;
  width: 95%;
  min-height: 25%;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: no-wrap;
  border-bottom: 2px solid rgba(159, 159, 159, 0.7);
  @media (max-width: 1300px) {
    min-height: 30%;
  }
`;

export const ReposTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  width: 100%;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;

export const ReposDescription = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #8d8d8d;
  display: flex;
  width: 90%;
`;

export const ButonShare = styled.button`
  display: flex;
  align-items: flex-start;
  padding: 10px 32px;
  width: 190px;
  height: 47px;
  background: linear-gradient(90deg, #0487ff 0%, #1665c1 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  @media (max-width: 768px) {
    width: 100px;
    height: 47px;
    font-size: 12px;
    padding: 10px 5px 10px 5px;
  }
`;
