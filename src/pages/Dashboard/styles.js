import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: #f7f7f7;
  

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
`;

export const Rodape = styled.div`
  display: flex;
  align-content: center; 
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #c6c6c6; 
  width: 100vw;
  height: 10%;
  background-color: rgb(253, 47, 37); 

`;

export const IconsMenu = styled.div`
  a{
    display: flex; 
    align-items: center;
    flex-direction: column;
    text-decoration: none;

    #inicio{
      font-size: 20px;
    }
    p{
      margin-top: 1px;
      font-size: 15px;
      color: white;
    }
  }
  
`;