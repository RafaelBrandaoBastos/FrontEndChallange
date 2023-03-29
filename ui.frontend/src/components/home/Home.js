import { MapTo } from '@adobe/aem-react-editable-components';
import { useHistory } from 'react-router-dom'; 
import {useForm} from "react-hook-form";
import React from "react";
import {Container, Header, Footer, SubContainer, Img, Logo} from "./style";

const Home = ({home, backgroundImage, logoImage}) => {

    return(
        <>
            {home.map((title={}, index) => (
                <div key={index}>
                    <Container>
                        <Header>
                            <Logo src={logoImage && logoImage.src} alt="LogoComponent"/>
                        </Header>
                        <SubContainer>
                            <Img src={backgroundImage && backgroundImage.src} alt="ImageComponent"/>
                            <div>

                            </div>
                        </SubContainer>
                        <Footer></Footer>
                    </Container>
                    
                </div>               
            ))} 
        </>
    );
};
    

Home.defaultProps = {
    home: [ 
        { 
        title: "To transform the world" 
        },
    ],
}; 

export default MapTo("reactapp/components/home-component")(Home);