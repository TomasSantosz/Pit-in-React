import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  //background-color: rgb(247, 247, 247);
  padding: 0 10px 0 10px;

  justify-content: flex-start;
  
  #logo{
    height: 12.5%;
    width: 45%;
    margin-bottom: 10px;
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
export const Titles = styled.div`
  display: flex;
  width:100%;
  align-items: flex-start;
  margin-bottom:10px;
`;
export const TitlePadarias = styled.text`
  -webkit-font-smoothing: antialiased;
  font: 19px Roboto, sans-serif;
  font-weight: 400;
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 90%;
  padding: 0px 10px 0px 10px;
  
  overflow: auto; 

  ::-webkit-scrollbar {
    display: none;
  }  

`;
