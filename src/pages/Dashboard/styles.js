import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: rgb(247, 247, 247);
  

  justify-content: flex-start;
  
  
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
  width: 100vw;
  height: 90%;
  overflow: auto; 

  ::-webkit-scrollbar {
    display: none;
  }  

  img{
    margin-left: 27.5%;
    width: 45%;
    height: 12.5%;
  }

`;
