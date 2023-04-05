import styled from "styled-components";

export const PopUpContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  padding-right: 120px;
`;
export const Body = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
export const BioContainer = styled.div`
  justify-content: center;
  align-items: space-between;
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  height: 55%;
`;
export const UserLogo = styled.img`
  width: 174px;
  height: 174px;
  border-radius: 50%;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 15%;
  align-items: flex-start;
  justify-content: center;
  color: #ffffff;
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
`;
export const SubTitle = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  width: 90%;
  text-align: center;
  color: #8d8d8d;
`;

export const ReposContainer = styled.div`
  outline-style: solid;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 90%;
  padding-left: 50px;
  align-items: flex-start;
`;
export const ButtonRepos = styled.button`
  width: 200px;
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
  &.repos {
    width: 200px;
    height: 0px;
    border: 2px solid rgba(159, 159, 159, 0.7);
    position: absolute;
    top: 50px;
    left: 375px;
  }
  &.fav {
    width: 140px;
    height: 0px;
    border: 2px solid rgba(159, 159, 159, 0.7);
    position: absolute;
    top: 50px;
    left: 605px;
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
`;

export const ReposTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  width: 100%;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
  `;


export const ReposDescription = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #8D8D8D;
  display: flex;
  width: 90%;
`;

export const ButonShare = styled.button`
display: flex;
align-items: flex-start;
padding: 10px 32px;
width: 190px;
height: 47px;
background: linear-gradient(90deg, #0487FF 0%, #1665C1 100%);
box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
border-radius: 8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
text-transform: uppercase;
color: #FFFFFF;
border: none;
`;