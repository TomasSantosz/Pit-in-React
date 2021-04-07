import React from 'react';
import { Container, Content } from './styles';
import HeaderMenu from '../../components/Menu';
import { useLocation } from 'react-router-dom';
import LogoPadoca from '../../images/logo/LOGOPADOCA.png';

function Projects(){
  const location = useLocation();
  console.log(location.pathname);
  return(
    <>
      <Container>
          <Content>
              <img src={LogoPadoca} alt="Logo Padoca" />
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              
          </Content>  
          <HeaderMenu />        
      </Container>
    </> 
  );
}

export default Projects;