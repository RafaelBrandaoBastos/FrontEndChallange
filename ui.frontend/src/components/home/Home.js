import { MapTo } from "@adobe/aem-react-editable-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import Text from "../HomeText/HomeText";
{/*import Timer from "../HomeTimer/HomeTimer";*/}
import HomeButton from "../HomeButton/HomeButton";
import { Container, Header, Footer, SubContainer, Img, Logo, TextContainer, ButtonContainer} from "./style";


const Home = ({
  backgroundImage, 
  logoImage,
  title1,
  title2,
  title3,
  titleSize,
  titleColor,
  subTitle,
  subTitleSize,
  subTitleColor,
  text1,
  text2,
  text3,
  text4,
  footer,
  footerSize,
  footerColor,
  textSize,
  textColor,
  titleFont, 
  subtitleFont,
  textFont, 
  footerFont,
  buttonColorAccess,
  labelColorAccess,
  labelSizeAccess, 
  labelAccess,
  labelFontAccess, 
  buttonColorLogout,
  labelColorLogout,
  labelSizeLogout, 
  labelLogout,
  labelFontLogout, 
  clockSize,
  clockFont
}) => {

  const [countdown, setCountdown] = useState(600);
  const [startCountdown, setStartCountdown] = useState(false);
  const history = useHistory();


  if (!startCountdown) {
    setStartCountdown(true);
    setInterval(() => {
      setCountdown((state) => state - 1);
    }, 1000);
  }

  useEffect(() => {
    if (countdown === 0) {
      console.log("end of session");
      history.push("/content/reactapp/us/en/home.html");
      return;
    }
  }, [countdown]);
  return (
    <>
      <Container>
        <Header>
          <Logo src={logoImage && logoImage.src} alt='LogoComponent' />
        </Header>
        <SubContainer>
          <Img
            src={backgroundImage && backgroundImage.src}
            alt='ImageComponent'
          />
          <TextContainer>
            <Text type = {"subtitle"} sfont = {subtitleFont} scolor={subTitleColor} ssize={subTitleSize} subtitle={subTitle}/> 
            <Text type = {"text1"} tfont = {textFont} tcolor={textColor} tsize={textSize} text1={text1}/>   
            <Text type = {"title1"} Tfont = {titleFont} Tcolor={titleColor} Tsize={titleSize} title1={title1}/>  
            <Text type = {"text2"} tfont = {textFont} tcolor={textColor} tsize={textSize} text2={text2}/>  
            <Text type = {"title2"} Tfont = {titleFont} Tcolor={titleColor} Tsize={titleSize} title2={title2}/> 
            <Text type = {"text3"} tfont = {textFont} tcolor={textColor} tsize={textSize} text3={text3}/>  
            <Text type = {"title3"} Tfont = {titleFont} Tcolor={titleColor} Tsize={titleSize} title3={title3}/> 
            <Text type = {"text4"} tfont = {textFont} tcolor={textColor} tsize={textSize} text4={text4}/>
          </TextContainer>
        </SubContainer>
        <Footer>
          {/*<Text type = {"footer"} ffont = {footerFont} fcolor={footerColor} fsize={footerSize} footer={footer}/> 
          <Timer countdown={countdown} />*/}
          <ButtonContainer>
            <HomeButton afont = {labelFontAccess} type={"access"} atext={labelAccess} acolor={buttonColorAccess} alcolor={labelColorAccess} asize={labelSizeAccess}/>
            <HomeButton  lfont = {labelFontLogout} type={"logout"} ltext={labelLogout} lcolor={buttonColorLogout} llcolor={labelColorLogout} lsize={labelSizeLogout}/>
        </ButtonContainer>
        </Footer>
      </Container>
    </>
  );
};

export default MapTo("reactapp/components/home-component")(Home);
