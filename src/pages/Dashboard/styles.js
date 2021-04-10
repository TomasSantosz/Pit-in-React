import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: rgb(247, 247, 247);
  

  justify-content: flex-start;
  
  #logo{
    height: 12.5%;
    width: 45%;
  }

  /* 
  @media(max-width:975px){
    h1{
      margin-top:5vh;
      font-size: 34px;
    }
  } 
  */
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 90%;
  padding: 30px 10px 0px 10px;
  
  overflow: auto; 

  ::-webkit-scrollbar {
    display: none;
  }  

`;
