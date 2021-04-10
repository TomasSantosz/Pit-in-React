import React from 'react';
import { Container, Content } from './styles';
import HeaderMenu from '../../components/Menu';
import { useLocation } from 'react-router-dom';
import LogoPadoca from '../../images/logo/LOGOPADOCA.png';
import Shops from './components/lojas';

function Projects(){
  const location = useLocation();
  console.log(location.pathname);
  return(
    <>
      <Container>
          <img id="logo" src={LogoPadoca} alt="Logo Padoca" />
          <Content>              
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
            <Shops />
          </Content>  
          <HeaderMenu />        
      </Container>
    </> 
  );
}

export default Projects;